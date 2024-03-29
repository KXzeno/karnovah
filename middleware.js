import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let path = request.nextUrl.pathname + request.nextUrl.search;

  return NextResponse.redirect(new URL(`https://blog.karnovah.com/${path}`, request.url));
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/blog/:path*', '/blogs/:path*',],
}
