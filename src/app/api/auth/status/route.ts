import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const userInfoCookie = request.cookies.get('user_info');
    const accessTokenCookie = request.cookies.get('access_token');
    
    if (!userInfoCookie || !accessTokenCookie) {
      return NextResponse.json({ isAuthenticated: false }, { status: 401 });
    }
    
    const userInfo = JSON.parse(userInfoCookie.value);
    
    return NextResponse.json({
      isAuthenticated: true,
      user: userInfo
    });
  } catch (error) {
    console.error('Status check error:', error);
    return NextResponse.json({ isAuthenticated: false }, { status: 401 });
  }
} 