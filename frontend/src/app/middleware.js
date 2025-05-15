import { NextResponse } from 'next/server';

export function middleware(request) {
  const role = request.cookies.get('role')?.value;
  const url = request.nextUrl.pathname;

  if (url.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
