import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest ) {
	// Gets baseURL leaf and excludes '/'
	let pathname = request.nextUrl.pathname.substring(1, request.nextUrl.pathname.length);

	// Splits nested routes into names
	let splitPaths = pathname.split('/');

	let validRoutes: Array<string> = ["blog," "blogs," "about"];

	switch (validRoutes.findIndex(splitPaths[0])) {
		// Outputs nested routes to the new URL excluding '/blog' and '/blogs'
		case 0: {
			splitPaths.shift();
			pathname = splitPaths.join('/');
		} 
		case 1: {
			splitPaths.shift();
			pathname = splitPaths.join('/');
		}
		case 2: {
			return NextResponse.redirect(new URL(`https://github.com/KXzeno`, request.url));
		}
	}

	return NextResponse.redirect(new URL(`https://blog.karnovah.com/${pathname}`, request.url));
}

	export const config = {
		matcher: ['/blog/:path*', '/blogs/:path*',],
	}
