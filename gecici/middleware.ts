import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

console.log("asdasdsaddsa")

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/tr', request.url));
  
  
  const url = request.nextUrl.clone()   
  if (url.pathname === '/') {
    url.pathname = '/tr'
    console.log("asd: ", url)
    return NextResponse.redirect(url)   
  } 

}

//See "Matching Paths" below to learn more
export const config = {
  // matcher: '/',
   matcher: '/:path*',
};