import { NextRequest, NextResponse } from 'next/server';

const isProtectedPath = (pathname: string) =>
  ['/auths', '/addoffers'].includes(pathname);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessTokenCookie = request.cookies.get('accessToken');
  const accessToken = accessTokenCookie?.value;

  if (isProtectedPath(pathname) && !accessToken) {
    const url = new URL('/login', request.url);
    return NextResponse.redirect(url);
  }

  const response = NextResponse.next();
  if (accessToken) {
    response.headers.set('x-access-token', accessToken);
  }

  return response;
}
