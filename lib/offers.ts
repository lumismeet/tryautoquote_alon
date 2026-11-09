// Advertiser listings shown on the results page.
// To add a client: copy one entry, set active: true, and fill in name, url, and copy.
// Every click passes the user's answers plus UTM parameters on the client's URL.

export type Answers = Partial<Record<AnswerKey, string>>;

export type AnswerKey =
  | "zip" | "state" | "insured" | "carrier" | "vehicles" | "homeowner" | "age";

export type Offer = {
  id: string;
  active: boolean;
  name: string;
  logo?: string;            // path under /public, e.g. "/offers/acme.png"
  headline: string;
  bullets: string[];
  url: string;              // client landing page (may already include query params)
  buttonLabel?: string;     // default: "View Rates"
  // Rename parameters if a client expects different names, e.g. { zip: "zipcode" }.
  // Set a key to null to not send that answer to this client.
  paramNames?: Partial<Record<AnswerKey, string | null>>;
  staticParams?: Record<string, string>; // fixed extras, e.g. { aff_id: "123" }
  // For tracking links (Everflow, etc.): don't append raw answers/UTMs,
  // build the network's sub-parameters instead.
  customParams?: (answers: Answers, ctx: ClickContext) => Record<string, string>;
  filter?: {
    states?: string[];                 // only show to these states (e.g. ["CA","TX"])
    excludeStates?: string[];          // never show to these states
    insured?: ("Yes" | "No")[];        // only show to these insured statuses
    homeowner?: ("Own" | "Rent")[];
  };
};

// Compact profile string for internal reporting, e.g. "FL|ins-GEICO|v2|own|35-44"
export function profileCode(a: Answers): string {
  return [
    a.state ?? "NA",
    a.insured === "Yes" ? `ins-${a.carrier ?? "unk"}` : a.insured === "No" ? "unins" : "NA",
    a.vehicles ? `v${a.vehicles}` : "NA",
    a.homeowner ? a.homeowner.toLowerCase() : "NA",
    a.age ?? "NA",
  ].join("|");
}

export const OFFERS: Offer[] = [
  // DMS (Everflow) - Offer 31149, Budget Auto Quotes, 80% rev-share.
  // uid must never be changed. sub1 = channel, sub2 = click id,
  // sub3 = internal (user profile), sub4 = subsource (page the visitor came from).
  {
    id: "dms-budget-auto-quotes",
    active: true, // NOTE: DMS requires creative/pre-lander approval before launch
    name: "Budget Auto Quotes",
    headline: "Compare auto insurance quotes from multiple providers",
    bullets: ["Free, no-obligation quotes", "Compare options in minutes", "Available nationwide"],
    url: "https://www.dxm4n9z.com/DZKLZ511/2Z5TDTNW/?uid=291",
    buttonLabel: "Get My Quotes",
    customParams: (answers, ctx) => ({
      sub1: "SEO",
      sub2: ctx.clickId,
      sub3: profileCode(answers),
      sub4: ctx.campaign.slice(0, 100),
    }),
  },
  // Example template (inactive). Replace with real clients.
  {
    id: "example-client",
    active: false,
    name: "Example Insurance",
    headline: "Compare auto insurance rates in minutes",
    bullets: ["Free online quote", "Multi-car discounts", "Switch anytime"],
    url: "https://example.com/auto-quote",
  },
];

export type ClickContext = { medium: string; campaign: string; content: string; clickId: string };

export function matchingOffers(answers: Answers): Offer[] {
  return OFFERS.filter((o) => {
    if (!o.active) return false;
    const f = o.filter;
    if (!f) return true;
    if (f.states && (!answers.state || !f.states.includes(answers.state))) return false;
    if (f.excludeStates && answers.state && f.excludeStates.includes(answers.state)) return false;
    if (f.insured && !f.insured.includes(answers.insured as "Yes" | "No")) return false;
    if (f.homeowner && !f.homeowner.includes(answers.homeowner as "Own" | "Rent")) return false;
    return true;
  });
}

export function buildOfferUrl(
  offer: Offer,
  answers: Answers,
  utm: ClickContext
): string {
  const url = new URL(offer.url);
  if (offer.customParams) {
    Object.entries(offer.customParams(answers, utm)).forEach(([k, v]) => url.searchParams.set(k, v));
    Object.entries(offer.staticParams ?? {}).forEach(([k, v]) => url.searchParams.set(k, v));
    return url.toString();
  }
  (Object.keys(answers) as AnswerKey[]).forEach((key) => {
    const value = answers[key];
    const name = offer.paramNames?.[key] === undefined ? key : offer.paramNames[key];
    if (value && name) url.searchParams.set(name, value);
  });
  url.searchParams.set("utm_source", "tryautoquote");
  url.searchParams.set("utm_medium", utm.medium);
  url.searchParams.set("utm_campaign", utm.campaign);
  url.searchParams.set("utm_content", utm.content);
  Object.entries(offer.staticParams ?? {}).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}
