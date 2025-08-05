// /apps/frontend/src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const isPublicPath = ["/login", "/register", "/"].includes(
    request.nextUrl.pathname
  );

  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/games/:path*",
    "/admin/:path*",
    "/superadmin/:path*",
  ],
};
