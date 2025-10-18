import { NextRequest, NextResponse } from 'next/server';
import { generateAuthUrl } from '@/lib/cognito';

export async function GET(request: NextRequest) {
  try {
    const { authUrl, nonce, state } = generateAuthUrl();
    
    // Store nonce and state in cookies for verification
    const response = NextResponse.redirect(authUrl);
    response.cookies.set('cognito_nonce', nonce, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 300 // 5 minutes
    });
    response.cookies.set('cognito_state', state, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 300 // 5 minutes
    });
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.redirect(new URL('/?error=auth_failed', request.url));
  }
} 