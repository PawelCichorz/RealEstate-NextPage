import { NextRequest, NextResponse } from 'next/server';

const isProtectedPath = (pathname: string) =>
  ['/auths', '/addoffers'].includes(pathname);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessTokenCookie = request.cookies.get('accessToken');
  const accessToken = accessTokenCookie?.value; // Pobieranie wartości string z obiektu RequestCookie

  // Sprawdzenie chronionych ścieżek
  if (isProtectedPath(pathname)) {
    if (!accessToken) {
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }

    // Opcjonalnie: dodanie logiki weryfikacji tokena (np. dekodowanie JWT)
  }

  // Dodanie tokena do nagłówków, aby był dostępny na serwerze
  const response = NextResponse.next();
  if (accessToken) {
    response.headers.set('x-access-token', accessToken);
  }

  return response;
}
