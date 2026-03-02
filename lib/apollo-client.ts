"use client";

import { 
    ApolloClient, 
    ApolloLink, 
    HttpLink, 
    InMemoryCache, 
    Observable,
    Operation,
    FetchResult
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ErrorLink } from "@apollo/client/link/error";
import { CombinedGraphQLErrors } from "@apollo/client/errors";
import { RefreshTokenDocument, RefreshTokenMutation } from "@/graphql/generated/graphql";

// ============================================================================
// CONFIGURATION
// ============================================================================

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const FALLBACK_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const SIGN_IN_URL = '/signin';
const TOKEN_STORAGE_KEY = 'accessToken';
const TOKEN_REFRESHED_EVENT = 'token-refreshed';

const isDevelopment = process.env.NODE_ENV === 'development';

// ============================================================================
// TYPES
// ============================================================================

interface QueuedRequest {
    resolve: (token: string) => void;
    reject: (error: any) => void;
}

// ============================================================================
// TOKEN MANAGEMENT
// ============================================================================

/**
 * Gets the current access token from localStorage
 */
const getAccessToken = (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_STORAGE_KEY);
};

/**
 * Stores the access token in localStorage
 */
export const setAccessToken = (token: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

/**
 * Removes the access token from localStorage
 */
export const clearAccessToken = (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(TOKEN_STORAGE_KEY);
};

/**
 * Dispatches a custom event when token is refreshed
 */
const notifyTokenRefreshed = (): void => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new Event(TOKEN_REFRESHED_EVENT));
};

/**
 * NOTE: We do NOT redirect here. The middleware handles all auth redirects.
 * This function just clears the token - the middleware will detect the missing
 * token and redirect on the next request.
 */
const handleAuthFailure = (): void => {
    if (typeof window === 'undefined') return;
    // Just clear the token - Proxy will handle redirect
    clearAccessToken();
};

// ============================================================================
// REFRESH TOKEN QUEUE MANAGEMENT
// ============================================================================

let isRefreshing = false;
let failedQueue: QueuedRequest[] = [];

/**
 * Processes all queued requests after token refresh
 */
const processQueue = (error: any, token: string | null = null): void => {
    failedQueue.forEach((request) => {
        if (error) {
            request.reject(error);
        } else if (token) {
            request.resolve(token);
        }
    });
    failedQueue = [];
};

/**
 * Adds a request to the queue while token is being refreshed
 */
const queueFailedRequest = (operation: Operation, observer: any, forward: ApolloLink.ForwardFunction)
: void => {
    failedQueue.push({
        resolve: (token: string) => {
            operation.setContext(({ headers = {} }) => ({
                headers: {
                    ...headers,
                    Authorization: `Bearer ${token}`,
                },
            }));
            forward(operation).subscribe(observer);
        },
        reject: (error: any) => {
            observer.error(error);
        },
    });
};

// ============================================================================
// ERROR DETECTION
// ============================================================================

/**
 * Checks if an error is an authentication error
 */
const isAuthenticationError = (error: any): boolean => {
    // Check GraphQL error extensions
    if (error.extensions) {
        if (error.extensions.code === 'UNAUTHENTICATED' || error.extensions.statusCode === 401) {
            return true;
        }
    }

    // Check error message
    if (error.message) {
        const message = error.message.toLowerCase();
        const authErrorPatterns = [
            'unauthorized',
            'unauthenticated',
            'authentication failed',
            'refresh token not found',
            'token has expired',
            'token expired',
            'jwt expired',
            '401'
        ];
        return authErrorPatterns.some(pattern => message.includes(pattern));
    }

    // Check status code
    if ((error as any).statusCode === 401) {
        return true;
    }

    return false;
};

// ============================================================================
// TOKEN REFRESH LOGIC
// ============================================================================

/**
 * Attempts to refresh the access token using the refresh token
 * Uses Next.js API route proxy to ensure cookies are properly sent (same-origin)
 */
const refreshAccessToken = async (): Promise<string> => {
    try {
        if (isDevelopment) {
            console.log('[Apollo] Attempting to refresh token via API route...');
        }

        // Use Next.js API route proxy for same-origin request
        // This ensures cookies are automatically included
        const response = await fetch('/api/auth/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include cookies (same-origin, so this works)
        });

        if (isDevelopment) {
            console.log('[Apollo] Refresh token response status:', response.status);
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            if (isDevelopment) {
                console.error('[Apollo] Refresh token HTTP error:', response.status, errorData);
            }
            throw new Error(errorData.error || `Refresh token request failed: ${response.status}`);
        }

        const result = await response.json();

        // Check for errors in response
        if (result.error) {
            if (isDevelopment) {
                console.error('[Apollo] Refresh token error:', result.error);
            }
            throw new Error(result.error);
        }

        const newToken = result.accessToken;
        
        if (!newToken) {
            throw new Error('No access token in refresh response');
        }

        if (isDevelopment) {
            console.log('[Apollo] Token refresh successful');
        }

        setAccessToken(newToken);
        notifyTokenRefreshed();

        return newToken;
    } catch (error: any) {
        if (isDevelopment) {
            console.error('[Apollo] Token refresh failed:', error);
        }
        throw error;
    }
};

/**
 * Handles token refresh and retries the operation
 */
const handleTokenRefresh = (
    operation: Operation,
    observer: any,
    forward: ApolloLink.ForwardFunction
): Observable<FetchResult> => {
    return new Observable((obs) => {
        // If already refreshing, queue this request
        if (isRefreshing) {
            queueFailedRequest(operation, obs, forward);
            return;
        }

        isRefreshing = true;

        refreshAccessToken()
            .then((newToken) => {
                processQueue(null, newToken);

                // Retry the original operation with new token
                operation.setContext(({ headers = {} }) => ({
                    headers: {
                        ...headers,
                        Authorization: `Bearer ${newToken}`,
                    },
                }));

                forward(operation).subscribe({
                    next: (value) => obs.next(value),
                    error: (error) => obs.error(error),
                    complete: () => obs.complete(),
                });
            })
            .catch((error) => {
                processQueue(error, null);
                handleAuthFailure();
                // Emit an error so the observable chain doesn't complete without a value
                obs.error(new Error('Authentication failed. Please sign in again.'));
            })
            .finally(() => {
                isRefreshing = false;
            });
    });
};

// ============================================================================
// APOLLO LINKS
// ============================================================================

/**
 * HTTP Link - connects to GraphQL endpoint
 */
const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    credentials: 'include', // Include cookies for all requests
    fetchOptions: {
        credentials: 'include', // Also set in fetchOptions for compatibility
    },
});

/**
 * Auth Link - adds Authorization header with access token
 */
const authLink = setContext((_, { headers }) => {
    const token = getAccessToken() || FALLBACK_TOKEN || null;

    if (isDevelopment) {
        console.log('[Apollo] Auth token:', token ? '***' + token.slice(-8) : 'none');
    }

    if (!token) {
        return { headers };
    }

    return {
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    };
});

/**
 * Debug Link - logs request headers (development only)
 */
const debugLink = new ApolloLink((operation, forward) => {
    if (isDevelopment) {
        console.log('[Apollo] Operation:', operation.operationName);
        console.log('[Apollo] Headers:', operation.getContext().headers);
    }
    return forward(operation);
});

/**
 * Error Link - handles authentication errors and token refresh
 */
const errorLink = new ErrorLink(({ error, operation, forward }) => {
    if (isDevelopment) {
        console.log('[Apollo] Error detected:', {
            operation: operation.operationName,
            error: error.message,
        });
    }

    // Handle GraphQL errors
    if (CombinedGraphQLErrors.is(error)) {
        for (const err of error.errors) {
            if (isAuthenticationError(err)) {
                if (isDevelopment) {
                    console.log('[Apollo] Authentication error detected, refreshing token...');
                }
                // Create a dummy observer for handleTokenRefresh
                const dummyObserver = {
                    next: () => {},
                    error: () => {},
                    complete: () => {},
                };
                return handleTokenRefresh(operation, dummyObserver, forward);
            }
        }
    }

    // Handle network/other errors
    if (isAuthenticationError(error)) {
        if (isDevelopment) {
            console.log('[Apollo] Network authentication error detected, refreshing token...');
        }
        // Create a dummy observer for handleTokenRefresh
        const dummyObserver = {
            next: () => {},
            error: () => {},
            complete: () => {},
        };
        return handleTokenRefresh(operation, dummyObserver, forward);
    }

    // For non-auth errors, don't intercept - let Apollo handle it
    return;
});

// ============================================================================
// APOLLO CLIENT CONFIGURATION
// ============================================================================

/**
 * Default Apollo Client options
 */
const defaultOptions = {
    watchQuery: {
        fetchPolicy: "network-only" as const,
        errorPolicy: "all" as const,
        notifyOnNetworkStatusChange: false,
        pollInterval: 0,
    },
    query: {
        fetchPolicy: "network-only" as const,
        errorPolicy: "all" as const,
    },
    mutate: {
        fetchPolicy: "network-only" as const,
        errorPolicy: "all" as const,
    },
};

/**
 * Creates an Apollo Client instance with optional access token
 */
export const createApolloClient = (accessToken?: string) => {
    const authLinkWithToken = setContext((_, { headers }) => {
        const token = accessToken || getAccessToken() || null;

        if (!token) {
            return { headers };
        }

        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${token}`,
            },
        };
    });

    return new ApolloClient({
        link: ApolloLink.from([
            errorLink,
            authLinkWithToken,
            ...(isDevelopment ? [debugLink] : []),
            httpLink,
        ]),
        cache: new InMemoryCache(),
        defaultOptions,
    });
};

/**
 * Default Apollo Client instance
 */
export const client = new ApolloClient({
    link: ApolloLink.from([
        errorLink,
        authLink,
        ...(isDevelopment ? [debugLink] : []),
        httpLink,
    ]),
    cache: new InMemoryCache(),
    defaultOptions,
});
