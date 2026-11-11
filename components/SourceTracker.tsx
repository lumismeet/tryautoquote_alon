"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { aiSourceFromReferrer, aiSourceFromUtm } from "@/lib/ai-referrers";
import { installCtaTracking } from "@/lib/analytics";


// Remembers the last content page a visitor viewed before entering the quote
// flow, so outbound offer clicks can be attributed (utm_campaign) to that page.
// Also tags visits that arrive from AI assistants (ChatGPT, Perplexity, ...)
// with an "ai_referral" GA4 event, once per session.
export default function SourceTracker() {
  const pathname = usePathname();

  useEffect(() => installCtaTracking(), []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("tq_ai_checked")) return;
      sessionStorage.setItem("tq_ai_checked", "1");
      const ai = aiSourceFromReferrer(document.referrer) ?? aiSourceFromUtm(window.location.search);
      if (!ai) return;
      sessionStorage.setItem("tq_ai_source", ai);
      window.gtag?.("event", "ai_referral", {
        ai_source: ai,
        landing_page: window.location.pathname,
      });
      window.gtag?.("set", "user_properties", { ai_source: ai });
    } catch {
      /* storage blocked: skip AI tagging */
    }
  }, []);

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
