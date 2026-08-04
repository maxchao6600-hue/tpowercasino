import type { MetadataRoute } from "next";

/** Build-time static robots — keep aligned with sitemap origin. */
export const dynamic = "force-static";

const BASE_URL = "https://tpowermycasino.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/cdn-cgi/",
          "/*/help",
          "/*/payments",
          "/*/privacy",
          "/*/terms",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
