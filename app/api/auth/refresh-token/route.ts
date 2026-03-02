import { NextRequest, NextResponse } from 'next/server';

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

/**
 * API route to proxy refresh token request
 * This ensures cookies are properly sent since it's same-origin
 */
export async function POST(request: NextRequest) {
  if (!GRAPHQL_ENDPOINT) {
    return NextResponse.json(
      { error: 'GraphQL endpoint is not configured' },
      { status: 500 }
    );
  }

  try {
    // Get cookies from the incoming request
    const cookies = request.headers.get('cookie') || '';
    
    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[RefreshToken API] Cookies received:', cookies ? 'Yes' : 'No');
      console.log('[RefreshToken API] GraphQL endpoint:', GRAPHQL_ENDPOINT);
    }

    // Forward the refresh token request to the backend
    // This is same-origin, so cookies will be automatically included
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Forward cookies from the incoming request
        'Cookie': cookies,
      },
      credentials: 'include',
      body: JSON.stringify({
        query: `
          mutation RefreshToken {
            refreshToken {
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
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[RefreshToken API] HTTP error:', response.status, errorText);
      return NextResponse.json(
        { error: `Refresh token request failed: ${response.status}` },
        { status: response.status }
      );
    }

    const result = await response.json();

    // Check for GraphQL errors
    if (result.errors && result.errors.length > 0) {
      const errorMessage = result.errors[0]?.message || 'Token refresh failed';
      console.error('[RefreshToken API] GraphQL error:', result.errors);
      return NextResponse.json(
        { error: errorMessage, errors: result.errors },
        { status: 400 }
      );
    }

    // Return the access token
    return NextResponse.json({
      accessToken: result.data?.refreshToken?.accessToken,
      user: result.data?.refreshToken?.user,
    });
  } catch (error: any) {
    console.error('[RefreshToken API] Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to refresh token' },
      { status: 500 }
    );
  }
}

