import { NextRequest, NextResponse } from 'next/server';
import { getClient } from '@/lib/cognito';

export async function GET(request: NextRequest) {
  try {
    const client = await getClient();
    
    if (!client) {
      console.warn('Cognito client not available - redirecting to home');
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    const searchParams = request.nextUrl.searchParams;
    
    // Get the stored nonce and state from cookies
    const nonce = request.cookies.get('cognito_nonce')?.value;
    const state = request.cookies.get('cognito_state')?.value;
    
    if (!nonce || !state) {
      throw new Error('Missing nonce or state');
    }
    
    // Get callback parameters from the request
    const params = {
      code: searchParams.get('code'),
      state: searchParams.get('state'),
    };
    
    if (!params.code || !params.state) {
      throw new Error('Missing authorization code or state');
    }
    
    // Verify state matches
    if (params.state !== state) {
      throw new Error('State mismatch');
    }
    
    // Exchange code for tokens
    const tokenSet = await (client as any).callback(
      'https://d84l1y8p4kdic.cloudfront.net',
      params,
      { nonce, state }
    );
    
    // Get user info
    const userInfo = await (client as any).userinfo(tokenSet.access_token);
    
    // Create response with user info in cookies
    const response = NextResponse.redirect(new URL('/', request.url));
    
    // Store user info in secure cookies
    response.cookies.set('user_info', JSON.stringify(userInfo), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600 // 1 hour
    });
    
    // Store access token
    response.cookies.set('access_token', tokenSet.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600 // 1 hour
    });
    
    // Clear auth cookies
    response.cookies.delete('cognito_nonce');
    response.cookies.delete('cognito_state');
    
    return response;
  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.redirect(new URL('/?error=callback_failed', request.url));
  }
} 