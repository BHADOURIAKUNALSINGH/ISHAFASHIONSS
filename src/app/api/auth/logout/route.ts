import { NextRequest, NextResponse } from 'next/server';
import { getLogoutUrl } from '@/lib/cognito';

export async function GET(request: NextRequest) {
  try {
    // Clear all auth cookies
    const response = NextResponse.redirect(getLogoutUrl());
    
    response.cookies.delete('user_info');
    response.cookies.delete('access_token');
    response.cookies.delete('cognito_nonce');
    response.cookies.delete('cognito_state');
    
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.redirect(new URL('/?error=logout_failed', request.url));
  }
} 