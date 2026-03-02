import { NextRequest, NextResponse } from 'next/server'
//  import createMiddleware from "next-intl/middleware";

 
const PUBLIC_FILE = /\.(.*)$/

// const intlMiddleware = createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "en",
// });
 
export async function proxy(req: NextRequest) {
  
    const { pathname } = req.nextUrl;
console.log("Proxy running:", pathname)
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  // Protected Routes
  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/users");

  const token = req.cookies.get("next-auth.session-token")?.value || 
              req.cookies.get("__Secure-next-auth.session-token")?.value;
              
  console.log("token",token)
  console.log("cookies",req.cookies.getAll())

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (token && pathname.endsWith("/signin")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // return intlMiddleware(req);
  return NextResponse.next();


 
  // if (req.nextUrl.locale === 'default') {
  //   const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
 
  //   return NextResponse.redirect(
  //     new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
  //   )
  // }
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};