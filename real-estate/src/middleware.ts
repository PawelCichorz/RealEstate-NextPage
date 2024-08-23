import { NextRequest, NextResponse } from 'next/server';

const isProtectedPath = (pathname: string) => ['/auths', '/addoffers'].includes(pathname);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isProtectedPath(pathname)) {
    const accessToken = request.cookies.get('accessToken');

    if (!accessToken) {
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }

    // Możesz dodać tutaj dodatkowe sprawdzanie poprawności tokena, np. dekodowanie JWT
  }

  return NextResponse.next();
}
