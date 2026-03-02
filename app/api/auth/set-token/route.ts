import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to set the access token in localStorage from server-side login
 * This is called after successful NextAuth login to sync the token
 */
export async function POST(request: NextRequest) {
  try {
    const { accessToken } = await request.json();
    
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Access token is required' },
        { status: 400 }
      );
    }

    // Return the token so client can store it
    return NextResponse.json({ success: true, accessToken });
  } catch (error) {
    console.error('[SetToken] Error:', error);
    return NextResponse.json(
      { error: 'Failed to process token' },
      { status: 500 }
    );
  }
}

