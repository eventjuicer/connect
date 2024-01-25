import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
 
  if (!currentUser) {
    return NextResponse.redirect(new URL('/profile', request.url))
  }

}
 
export const config = {
  matcher: ['/visitors'],
}