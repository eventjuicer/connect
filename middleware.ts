import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "@/i18n-config";
import { auth } from "@/auth"


function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  
  return locale;
}



export default auth((req) => {
  if (!req.auth && !req.nextUrl.pathname.startsWith("/api/auth/")) {
    const newUrl = new URL("/api/auth/signin", req.nextUrl.origin)
    // return NextResponse.redirect(newUrl)
  }


})


// export async function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   // if (['/images/'].includes(pathname)){
//   //   return
//   // }
    

//   // Check if there is any supported locale in the pathname
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) =>
//       !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
//   );


//   const locale = getLocale(request);

//   console.log({locale, pathnameIsMissingLocale})


//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);

//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//         request.url,
//       ),
//     );
//   }
// }

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images/).*)"],
};