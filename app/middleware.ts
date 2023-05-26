import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

console.log("asdasdsaddsa")

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("request.urlrequest.url: ", request.url)
  return NextResponse.redirect(new URL('/tr', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};