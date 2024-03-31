import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/', '/login', '/signup',],
    
});

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value;

    if (currentUser) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.redirect(new URL('/login', request.url))
}


export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
        '/((?!.+\\.[\\w]+$|_next).*)',
        '/', 
        '/(api|trpc)(.*)'
    ],
}