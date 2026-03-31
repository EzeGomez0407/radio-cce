import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn');
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  // Si intenta entrar a panel de admin y no está logueado -> Al login
  if (request.nextUrl.pathname.startsWith('/admin') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si ya está logueado e intenta ir al login -> Al admin
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

// Aquí defines qué rutas quieres que vigile el middleware
export const config = {
  matcher: ['/admin/:path*', '/login'],
};