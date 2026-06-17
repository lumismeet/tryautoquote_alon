import type { MetadataRoute } from "next";

/* ------------------------------------------------------------------
   app/sitemap.ts  →  Next.js serves this automatically at /sitemap.xml

   Add a new entry every time you publish a content page from the
   content plan. Keep URLs absolute and on the production domain.
   ------------------------------------------------------------------ */

const BASE = "https://tryautoquote.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE}/terms-of-use`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    // As you publish content pages, add them here, e.g.:
    // { url: `${BASE}/guides/does-a-quote-affect-credit-score`,
    //   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}