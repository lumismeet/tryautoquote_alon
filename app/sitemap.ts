import type { MetadataRoute } from "next";
import { states } from "@/lib/states";
import { getAllPosts, lastModified } from "@/lib/blogs";
import { HUBS, hubHref } from "@/lib/hubs";
import { STATE_LAWS_VERIFIED, LAWS_BY_STATE_PATH } from "@/lib/states/verification";

/* ------------------------------------------------------------------
   app/sitemap.ts  →  Next.js serves this automatically at /sitemap.xml

   Add a new entry every time you publish a content page from the
   content plan. Keep URLs absolute and on the production domain.
   ------------------------------------------------------------------ */

const BASE = "https://www.tryautoquote.com";

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
      url: `${BASE}/about`,
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
    {
      url: `${BASE}/car-insurance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/guides/does-getting-a-quote-affect-credit-score`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/guides/cheapest-car-insurance-for-young-drivers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/guides/liability-only-vs-full-coverage`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/guides/how-to-lower-your-car-insurance-premium`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/guides/what-to-do-after-a-car-accident`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...(STATE_LAWS_VERIFIED
      ? [{ url: `${BASE}${LAWS_BY_STATE_PATH}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }]
      : []),
    ...HUBS.map((h) => ({
      url: `${BASE}${hubHref(h.slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...getAllPosts().map((post) => ({
      url: `${BASE}/blogs/${post.slug}`,
      lastModified: new Date(lastModified(post)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...states.map((s) => ({
      url: `${BASE}/car-insurance/${s.slug}`,
      lastModified: new Date(s.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}