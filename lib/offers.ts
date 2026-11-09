// Advertiser listings shown on the results page.
// To add a client: copy one entry, set active: true, and fill in name, url, and copy.
// Every click passes the user's answers plus UTM parameters on the client's URL.

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
  filter?: {
    states?: string[];                 // only show to these states (e.g. ["CA","TX"])
    excludeStates?: string[];          // never show to these states
    insured?: ("Yes" | "No")[];        // only show to these insured statuses
    homeowner?: ("Own" | "Rent")[];
  };
};

export const OFFERS: Offer[] = [
  // Example template (inactive). Replace with real clients.
  {
    id: "example-client",
    active: true, // PREVIEW ONLY: set to false before going live
    name: "Example Insurance",
    headline: "Compare auto insurance rates in minutes",
    bullets: ["Free online quote", "Multi-car discounts", "Switch anytime"],
    url: "https://example.com/auto-quote",
  },
];

export type Answers = Partial<Record<AnswerKey, string>>;

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
  utm: { medium: string; campaign: string; content: string }
): string {
  const url = new URL(offer.url);
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
