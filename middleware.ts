import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest ) {
  // Gets baseURL leaf and excludes '/'
  let pathname = request.nextUrl.pathname.substring(1, request.nextUrl.pathname.length);

  // Splits nested routes into names
  let splitPaths = pathname.split('/');

  // Outputs nested routes to the new URL excluding '/blog' and '/blogs'
  if (splitPaths[0].includes('blogs')) {
    splitPaths.shift();
    pathname = splitPaths.join('/');
  } else if (splitPaths[0].includes('blog')) {
    splitPaths.shift();
    pathname = splitPaths.join('/');
  }

  return NextResponse.redirect(new URL(`https://blog.karnovah.com/${pathname}`, request.url));
}

export const config = {
  matcher: ['/blog/:path*', '/blogs/:path*',],
}
