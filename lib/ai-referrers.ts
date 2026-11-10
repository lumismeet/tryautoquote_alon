// Hostnames of AI assistants and answer engines that send visitors to the
// site. Used to tag those visits in GA4 so AI search shows up as its own
// source instead of being lumped into "referral" or "direct".
const AI_REFERRERS: Array<[RegExp, string]> = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/, "chatgpt"],
  [/(^|\.)perplexity\.ai$/, "perplexity"],
  [/(^|\.)gemini\.google\.com$|(^|\.)bard\.google\.com$/, "gemini"],
  [/(^|\.)copilot\.microsoft\.com$/, "copilot"],
  [/(^|\.)claude\.ai$/, "claude"],
  [/(^|\.)you\.com$/, "you"],
  [/(^|\.)phind\.com$/, "phind"],
  [/(^|\.)meta\.ai$/, "meta_ai"],
  [/(^|\.)deepseek\.com$/, "deepseek"],
  [/(^|\.)grok\.com$/, "grok"],
];

// Returns a short source name for an AI referrer URL, or null.
export function aiSourceFromReferrer(referrer: string | null | undefined): string | null {
  if (!referrer) return null;
  let host: string;
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return null;
  }
  for (const [re, name] of AI_REFERRERS) if (re.test(host)) return name;
  return null;
}

// Some assistants append utm_source instead of (or as well as) a referrer.
export function aiSourceFromUtm(search: string): string | null {
  const utm = new URLSearchParams(search).get("utm_source")?.toLowerCase() ?? "";
  if (!utm) return null;
  if (utm.includes("chatgpt") || utm.includes("openai")) return "chatgpt";
  if (utm.includes("perplexity")) return "perplexity";
  if (utm.includes("gemini")) return "gemini";
  if (utm.includes("copilot")) return "copilot";
  if (utm.includes("claude")) return "claude";
  return null;
}
