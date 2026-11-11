// Google Analytics 4. Every ID here receives the same data, so a second
// property can be added (e.g. one owned by StarTech Media) without breaking
// the existing one. IDs are public by design.
export const GA_IDS = ["G-SNTTKK995J"];

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

// Funnel events (see docs in the PR / chat):
//   cta_click     { location }            any "compare quotes" button or link
//   quote_start   { entry }               a valid ZIP was submitted
//   quote_step    { step }                each step of the quote flow was shown
//   results_view  { offers_count, state } the results page was shown
//   offer_click   { offer_id, position }  an offer was clicked (Results.tsx)
export function track(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}

// Where on the page a click happened, for cta_click.
export function ctaLocation(el: Element): string {
  const explicit = (el as HTMLElement).dataset?.location;
  if (explicit) return explicit;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("aside")) return "sidebar";
  return "content";
}

// One document-level listener tracks every link into the quote flow and every
// element marked data-track="cta", so server components need no client code.
export function installCtaTracking(): () => void {
  const onClick = (e: MouseEvent) => {
    const target = e.target as Element | null;
    const el = target?.closest?.('a[href^="/quote/1_map"], [data-track="cta"]');
    if (!el) return;
    track("cta_click", { location: ctaLocation(el), page_path: window.location.pathname });
  };
  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}
