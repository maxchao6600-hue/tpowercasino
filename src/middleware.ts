import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/config/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];
  if (isValidLocale(segment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", segment);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const locale =
    request.headers
      .get("accept-language")
      ?.split(",")
      .map((part) => part.split(";")[0]?.trim().toLowerCase())
      .find((lang) =>
        locales.some(
          (supported) => lang === supported || lang.startsWith(`${supported}-`),
        ),
      ) ?? defaultLocale;

  const resolved = isValidLocale(locale) ? locale : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${resolved}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
