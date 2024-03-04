import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('https://blog.karnovah.com', request.url));
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/blog/:path*', '/blogs/:path*',],
}
