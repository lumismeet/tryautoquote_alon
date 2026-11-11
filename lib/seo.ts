// Google shows roughly 60 characters of a title before cutting it off.
export const TITLE_MAX = 60;
const BRAND = " | TryAutoQuote";

// Appends the brand only when the full title still fits, so the part people
// search for is never the part that gets truncated.
export function pageTitle(title: string): string {
  const t = title.trim();
  return t.length + BRAND.length <= TITLE_MAX ? `${t}${BRAND}` : t;
}
