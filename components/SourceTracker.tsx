"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Remembers the last content page a visitor viewed before entering the quote
// flow, so outbound offer clicks can be attributed (utm_campaign) to that page.
export default function SourceTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || pathname.startsWith("/quote")) return;
    try {
      sessionStorage.setItem("tq_source", pathname);
    } catch {
      /* storage blocked: attribution falls back to "direct" */
    }
  }, [pathname]);
  return null;
}
