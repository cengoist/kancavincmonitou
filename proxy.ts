import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { services } from "@/lib/services";

/**
 * SEO: Var olmayan /hizmetler/<slug> adresleri ilk istekte bile gerçek HTTP 404 dönsün
 * (aksi halde Google "soft 404" olarak algılayabilir).
 */
const known = new Set(services.map((s) => s.slug));

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  if (slug && !known.has(slug)) {
    return NextResponse.rewrite(new URL("/_not-found-seo", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/hizmetler/:slug",
};
