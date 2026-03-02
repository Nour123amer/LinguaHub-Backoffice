import { NextRequest, NextResponse } from 'next/server';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

/**
 * API route to handle login
 * This ensures cookies from the backend are properly forwarded to the client's browser
 */
export async function POST(request: NextRequest) {
  if (!GRAPHQL_ENDPOINT) {
    return NextResponse.json(
      { error: 'GraphQL endpoint is not configured' },
      { status: 500 }
    );
  }

  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Make login request to backend
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        query: `
          mutation Login($input: LoginInput!) {
            login(input: $input) {
              accessToken
              user {
                id
                email
                firstName
                lastName
                roles
                isVerified
                createdAt
              }
            }
          }
        `,
        variables: {
          input: {
            email,
            password,
          },
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Login API] HTTP error:', response.status, errorText);
      return NextResponse.json(
        { error: `Login request failed: ${response.status}` },
        { status: response.status }
      );
    }

    const result = await response.json();

    // Check for GraphQL errors
    if (result.errors && result.errors.length > 0) {
      const errorMessage = result.errors[0]?.message || 'Login failed';
      console.error('[Login API] GraphQL error:', result.errors);
      return NextResponse.json(
        { error: errorMessage, errors: result.errors },
        { status: 400 }
      );
    }

    if (!result.data?.login) {
      return NextResponse.json(
        { error: 'Login failed: No data returned' },
        { status: 400 }
      );
    }

    // Get Set-Cookie headers from backend response
    // Note: getSetCookie() is available in Node.js 18+
    const setCookieHeaders: string[] = [];
    
    // Try getSetCookie first (Node.js 18+)
    if (typeof response.headers.getSetCookie === 'function') {
      setCookieHeaders.push(...response.headers.getSetCookie());
    } else {
      // Fallback: get all headers and check for set-cookie
      // In Node.js fetch, set-cookie headers are not accessible directly
      // We'll need to rely on getSetCookie() which should be available in Node.js 18+
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Login API] getSetCookie() not available, cookies may not be forwarded');
      }
    }
    
    // Create response with login data
    const nextResponse = NextResponse.json({
      accessToken: result.data.login.accessToken,
      user: result.data.login.user,
    });

    // Forward all Set-Cookie headers from backend to client
    if (setCookieHeaders && setCookieHeaders.length > 0) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[Login API] Forwarding cookies:', setCookieHeaders);
      }
      setCookieHeaders.forEach((cookie) => {
        // Parse the cookie string and set it on the response
        // Format: "name=value; Path=/; HttpOnly; SameSite=Lax"
        const [nameValue, ...attributes] = cookie.split(';');
        const [name, value] = nameValue.split('=');
        
        if (!name || !value) {
          console.warn('[Login API] Invalid cookie format:', cookie);
          return;
        }
        
        // Extract cookie attributes
        const cookieOptions: any = {};
        attributes.forEach((attr) => {
          const trimmed = attr.trim();
          if (trimmed.toLowerCase() === 'httponly') {
            cookieOptions.httpOnly = true;
          } else if (trimmed.toLowerCase().startsWith('path=')) {
            cookieOptions.path = trimmed.split('=')[1];
          } else if (trimmed.toLowerCase().startsWith('samesite=')) {
            const sameSiteValue = trimmed.split('=')[1].toLowerCase();
            cookieOptions.sameSite = sameSiteValue === 'none' ? 'none' : 
                                    sameSiteValue === 'strict' ? 'strict' : 'lax';
          } else if (trimmed.toLowerCase().startsWith('max-age=')) {
            cookieOptions.maxAge = parseInt(trimmed.split('=')[1]);
          } else if (trimmed.toLowerCase() === 'secure') {
            cookieOptions.secure = true;
          } else if (trimmed.toLowerCase().startsWith('domain=')) {
            cookieOptions.domain = trimmed.split('=')[1];
          }
        });

        // Set default values if not provided
        if (!cookieOptions.path) cookieOptions.path = '/';
        if (!cookieOptions.sameSite) cookieOptions.sameSite = 'lax';
        
        // For localhost, secure should be false
        if (process.env.NODE_ENV === 'development') {
          cookieOptions.secure = false;
        }
        
        nextResponse.cookies.set(name.trim(), value.trim(), cookieOptions);
      });
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Login API] No Set-Cookie headers from backend');
        console.log('[Login API] Response headers:', Object.fromEntries(response.headers.entries()));
      }
    }

    return nextResponse;
  } catch (error: any) {
    console.error('[Login API] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to login' },
      { status: 500 }
    );
  }
}

