import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { AuthOptions } from "next-auth";
import { graphqlServerClient } from "./graphql-server-client";

// Default redirect URL after successful login
export const DEFAULT_AFTER_LOGIN_REDIRECT = process.env.NEXT_PUBLIC_AFTER_LOGIN_REDIRECT || '/dashboard';

export const authOptions: AuthOptions = {
    pages: {
        signIn: '/signin',
        signOut: '/',
        error: '/error', // Custom error page
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                    scope: "openid email profile",
                }
            }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
                firstName: { label: "First Name", type: "text", required: false },
                lastName: { label: "Last Name", type: "text", required: false },
                phone: { label: "Phone Number", type: "text", required: false },
                roles: { label: "Roles", type: "text", required: false },
            },
            async authorize(credentials) {
                    console.log("🔥 AUTHORIZE CALLED WITH:", credentials);

                // Handle regular email/password authentication
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    // If accessToken and user data are provided (from API login),
                    // skip the login call and return the user directly
                    if ((credentials as any).accessToken && (credentials as any).user) {
                        const userData = (credentials as any).user;
                        return {
                            id: userData.id,
                            email: userData.email,
                            name: `${userData.firstName} ${userData.lastName}`,
                            accessToken: (credentials as any).accessToken,
                            roles: userData.roles,
                        };
                    }

                    // Check if this is a signup (has firstName and lastName)
                    if (credentials.firstName && credentials.lastName) {
                        const roles = credentials.roles 
                            ? JSON.parse(credentials.roles) 
                            : ['student'];
                        
                        // Prepare signup input - note: phoneNumber may need to be added to backend SignupInput
                        const signupInput: any = {
                            firstName: credentials.firstName,
                            lastName: credentials.lastName,
                            email: credentials.email,
                            password: credentials.password,
                            roles: roles,
                        };
                        
                        // Add phoneNumber if provided (backend needs to support this in SignupInput)
                        if (credentials.phone) {
                            signupInput.phone = credentials.phone;
                        }
                        
                        const result = await graphqlServerClient.Signup({
                            input: signupInput,
                        });

                        if (result.signup) {
                            // signup now returns User directly, not AuthResponse
                            // Access token should be set in cookies by the backend
                            return {
                                id: result.signup.id,
                                email: result.signup.email,
                                name: `${result.signup.firstName} ${result.signup.lastName}`,
                                accessToken: '', // Token should be in cookies, will be retrieved by Apollo Client
                                roles: result.signup.roles,
                            };
                        }
                    } else {
                        // This is a login
                        const result = await graphqlServerClient.Login({
                            input: {
                                email: credentials.email,
                                password: credentials.password,
                            },
                        });
                        console.log("GraphQL login result:", result);

                        if (result.login) {
                           console.log("GraphQL login result:", result);
                            return {
                                id: result.login.user.id,
                                email: result.login.user.email,
                                name: `${result.login.user.firstName} ${result.login.user.lastName}`,
                                accessToken: result.login.accessToken,
                                roles: result.login.user.roles,
                            };
                        }
                    }
                } catch (error: any) {
                    console.error("[NextAuth] Authentication error:", error);
                    console.error("[NextAuth] Error response:", error?.response);
                    console.error("[NextAuth] Error message:", error?.message);
                    
                    // Extract error message from GraphQL error
                    const errorMessage = error?.response?.errors?.[0]?.message || 
                                       error?.message || 
                                       'Authentication failed';
                    
                    console.error("[NextAuth] Final error message:", errorMessage);
                    
                    // Throw error so NextAuth can handle it properly
                    // NextAuth will pass this to the signIn result as result.error
                    throw new Error(errorMessage);
                }

                return null;
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60, // 7 days (matching backend refresh token)
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            // Handle Google sign in
            if (account?.provider === 'google') {
                try {
                    // NextAuth's Google provider uses OAuth2, which doesn't provide id_token directly
                    // We need to get user info and call our backend
                    // However, the backend expects id_token, so we'll need to handle this differently
                    
                    // Option 1: If account.id_token exists (might not in standard OAuth2 flow)
                    if (account.id_token) {
                        const result = await graphqlServerClient.GoogleSignIn({
                            input: {
                                idToken: account.id_token,
                                roles: ['student'],
                            },
                        });

                        if (result.googleSignIn) {
                            user.id = result.googleSignIn.user.id;
                            user.email = result.googleSignIn.user.email;
                            user.name = `${result.googleSignIn.user.firstName} ${result.googleSignIn.user.lastName}`;
                            (user as any).accessToken = result.googleSignIn.accessToken;
                            (user as any).roles = result.googleSignIn.user.roles;
                            return true;
                        }
                    } else {
                        // Option 2: Get user info from Google using access_token
                        // Then we'd need to modify backend or use a different approach
                        // For now, let's try to get id_token from the profile
                        console.warn('Google id_token not available in account object');
                        // We'll handle this in the jwt callback
                        return true;
                    }
                } catch (error: any) {
                    console.error("Google sign in error:", error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user, account }) {
            // Handle Google OAuth account
            if (account?.provider === 'google') {
                // If we have id_token, use it
                if (account.id_token) {
                    try {
                        const result = await graphqlServerClient.GoogleSignIn({
                            input: {
                                idToken: account.id_token,
                                roles: ['student'],
                            },
                        });

                        if (result.googleSignIn) {
                            token.id = result.googleSignIn.user.id;
                            token.email = result.googleSignIn.user.email;
                            token.name = `${result.googleSignIn.user.firstName} ${result.googleSignIn.user.lastName}`;
                            token.accessToken = result.googleSignIn.accessToken;
                            token.roles = result.googleSignIn.user.roles;
                        }
                    } catch (error) {
                        console.error("Error in jwt callback for Google:", error);
                    }
                } else if (user) {
                    // Fallback: use user data from signIn callback
                    token.id = user.id;
                    token.email = user.email;
                    token.name = user.name;
                    token.accessToken = (user as any).accessToken;
                    token.roles = (user as any).roles;
                }
            } else if (user) {
                // Regular credentials sign in
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.accessToken = (user as any).accessToken;
                token.roles = (user as any).roles;
            }
            
            // Store access token in localStorage for Apollo client (client-side only)
            if (typeof window !== 'undefined' && token.accessToken) {
                localStorage.setItem('accessToken', token.accessToken as string);
            }
            
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                // (session as any).accessToken = token.accessToken as string;
                // (session as any).roles = token.roles as string[];
                session.accessToken = token.accessToken as string;
session.roles = token.roles as string[];
                
                // Keep localStorage in sync (client-side only)
                if (typeof window !== 'undefined' && token.accessToken) {
                    localStorage.setItem('accessToken', token.accessToken as string);
                }
            }
            return session;
        }
    },
    secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET
}