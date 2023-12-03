import { LOCALES } from "@/config";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const nextIntlMiddleware = createMiddleware({
  locales: LOCALES,
  defaultLocale: "es",
});

export default async function middleware(request: NextRequest) {
  const intlResponse = nextIntlMiddleware(request);
  return intlResponse;
}

export const config = {
  matcher: ["/", "/(en|es)/:path*"],
};
