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
  disclaimer?: string;      // small print shown under the listing (required by some advertisers)
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
    excludeAges?: string[];            // never show to these age ranges (e.g. ["18-24"])
    hoursET?: [number, number];        // only show between these hours, US Eastern (e.g. [8, 20] = 8am-8pm)
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
    // Logo, copy and CTA follow the DMS Partner Brand & Compliance Guidelines.
    // Use only approved claims; do not add savings figures, time claims, or
    // "we compare for you" language without DMS approval. Logo must not be altered.
    logo: "/offers/budget-auto-quotes.jpg",
    headline: "Compare rates and save",
    bullets: [
      "Quotes from top providers in your area",
      "Free quote with no obligation",
      "No unsolicited calls",
    ],
    url: "https://www.dxm4n9z.com/DZKLZ511/2Z5TDTNW/?uid=291",
    buttonLabel: "Get Free Quotes",
    // DMS guidelines: do not target under-25 audiences.
    filter: { excludeAges: ["18-24"] },
    customParams: (answers, ctx) => ({
      sub1: "SEO",
      sub2: ctx.clickId,
      sub3: profileCode(answers),
      sub4: ctx.campaign.slice(0, 100),
    }),
  },
  // Natural Intelligence / BestMoney - auto insurance. Contract signed Sept 24, 2026, Net30.
  // Contact: Josh Molin (josh.molin@naturalint.com).
  // Caps: hard 100 carrier clickouts/day, soft 300 bridge visits/day (enforced by NI).
  // Day parting: 8am-8pm US Eastern. Billing source of truth: NI Publisher Hub (UTC).
  // Copy follows NI guidelines: "Compare Car Insurance Providers" style, no "rates just
  // changed" claims, no "one question" hook, no age references, disclaimer required.
  // LAUNCH: keep active: false until NI's data team validates the test link + postback.
  {
    id: "ni-bestmoney-auto",
    active: false,
    name: "BestMoney",
    headline: "Compare Car Insurance Providers",
    bullets: [
      "Answer a few quick questions and compare providers",
      "Free, no obligation",
    ],
    url: "https://funnel.naturaltracking.com/v4?key=ezisqznfL2NzVKH9xBrv",
    buttonLabel: "Compare Providers",
    disclaimer:
      "Advertisement. Advertiser is not an insurance provider. Terms set by providers. Not all providers featured.",
    filter: { hoursET: [8, 20] },
    customParams: (answers, ctx) => ({
      pub_param_1: "tryautoquote_seo",            // our source ID
      pub_param_2: ctx.clickId,                   // unique click ID, returned in postback
      external_campaign_id: ctx.campaign.slice(0, 100) || "auto_insurance_seo",
      // TODO: confirm SEO values with Josh (Meta = Paid_Social / Facebook)
      aff_traffic_join: "Organic_Search",
      aff_source_join: "Google",
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
    if (f.excludeAges && answers.age && f.excludeAges.includes(answers.age)) return false;
    if (f.hoursET) {
      const h = Number(new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", hourCycle: "h23" }).format(new Date()));
      if (h < f.hoursET[0] || h >= f.hoursET[1]) return false;
    }
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
