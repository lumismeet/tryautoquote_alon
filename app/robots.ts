import type { MetadataRoute } from "next";

/* ------------------------------------------------------------------
   app/robots.ts  →  Next.js serves this automatically at /robots.txt

   Also solves the preview-vs-production duplicate problem:
   - Production domain  → allow crawling, point to sitemap.
   - Vercel PREVIEW (*.vercel.app) / development → block all crawling
     so the preview never competes with the real domain.

   Vercel sets VERCEL_ENV to "production" | "preview" | "development".
   ------------------------------------------------------------------ */

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.tryautoquote.com/sitemap.xml",
    host: "https://www.tryautoquote.com",
  };
}