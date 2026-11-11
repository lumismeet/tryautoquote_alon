// Topic hubs: the middle layer of the site structure.
//   /car-insurance            pillar (all topics + state laws)
//   /car-insurance/<hub>      hub (overview + every article on the topic)
//   /blogs/<slug>, /guides/*  articles (URLs unchanged; breadcrumbs follow the hub)
// Every post belongs to exactly one hub. tests/hubs.test.ts enforces that.

export type HubSlug = "coverage" | "cost" | "claims" | "drivers" | "buying";

export type Hub = {
  slug: HubSlug;
  name: string; // short label for nav, breadcrumbs, footer
  title: string; // H1
  metaTitle: string;
  metaDescription: string;
  intro: string[]; // paragraphs, plain text
  posts: string[]; // blog slugs, in display order (most important first)
  guides: { href: string; title: string }[];
};

export const HUBS: Hub[] = [
  {
    slug: "coverage",
    name: "Coverage",
    title: "Car insurance coverage, explained",
    metaTitle: "Car Insurance Coverage: Types, Limits and Deductibles",
    metaDescription:
      "What each type of car insurance covers, how liability limits and deductibles work, and how to decide between state minimum and full coverage.",
    intro: [
      "A car insurance policy is a bundle of separate coverages. Liability pays for harm you cause to other people. Collision and comprehensive pay for your own car. Other parts, like uninsured motorist coverage, fill specific gaps.",
      "The articles below explain what each piece covers, what the numbers on your policy mean, and how to decide how much protection you actually need, from state minimum to full coverage.",
    ],
    posts: [
      "state-minimum-vs-full-coverage",
      "when-to-drop-full-coverage",
      "how-much-car-insurance-do-you-need",
      "50-100-50-liability-limits-explained",
      "500-vs-1000-deductible",
      "how-to-choose-your-deductible",
      "what-comprehensive-coverage-covers",
      "uninsured-motorist-coverage",
      "gap-insurance",
      "actual-cash-value-vs-replacement-cost",
      "rental-car-insurance",
      "who-is-covered-when-someone-else-drives-your-car",
      "insuring-multiple-vehicles",
      "business-use-car-insurance",
      "can-employer-ask-for-car-insurance-information",
      "certificate-of-insurance-explained",
    ],
    guides: [{ href: "/guides/liability-only-vs-full-coverage", title: "Liability only vs. full coverage" }],
  },
  {
    slug: "cost",
    name: "Cost and saving",
    title: "What car insurance costs, and how to pay less",
    metaTitle: "Car Insurance Cost: What Sets Your Rate and How to Lower It",
    metaDescription:
      "How insurers price car insurance, why rates go up, and the practical ways to lower your premium without giving up protection you need.",
    intro: [
      "Your premium is a prediction of how likely you are to file a claim and how expensive it would be. Where you live, your driving record, your car, and in most states your credit history all feed into that number.",
      "These articles break down what drives your rate, why it can rise even when nothing changed, and which levers actually lower it.",
    ],
    posts: [
      "how-insurers-calculate-your-premium",
      "why-your-car-insurance-went-up",
      "how-zip-code-affects-your-insurance-rate",
      "credit-score-insurance",
      "how-an-accident-affects-your-insurance-rate",
      "ev-insurance-cost",
      "telematics-usage-based-insurance",
      "bundle-home-and-auto-insurance",
      "what-happens-if-your-insurance-lapses",
    ],
    guides: [{ href: "/guides/how-to-lower-your-car-insurance-premium", title: "How to lower your car insurance premium" }],
  },
  {
    slug: "claims",
    name: "Claims",
    title: "Car insurance claims and accidents",
    metaTitle: "Car Insurance Claims: After an Accident and How to File",
    metaDescription:
      "What to do after a car accident, how to file a claim, what to say and not say to your insurer, and how to appeal if your claim is denied.",
    intro: [
      "The first hours after an accident shape how your claim goes. What you document, what you say, and how quickly you report it all matter.",
      "Start with what to do at the scene, then use the articles below to file the claim, avoid the common mistakes, and push back if the payout is too low or the claim is denied.",
    ],
    posts: [
      "what-documents-to-file-a-car-insurance-claim",
      "what-not-to-tell-your-insurance-company",
      "common-mistakes-when-filing-a-claim",
      "comparative-negligence-partial-fault",
      "how-to-appeal-a-denied-auto-insurance-claim",
      "diminished-value-claims",
      "how-to-file-a-theft-or-vandalism-claim",
    ],
    guides: [{ href: "/guides/what-to-do-after-a-car-accident", title: "What to do after a car accident" }],
  },
  {
    slug: "drivers",
    name: "Drivers",
    title: "Car insurance for specific drivers",
    metaTitle: "Car Insurance for Teens, SR-22, Rideshare and New Drivers",
    metaDescription:
      "How car insurance works for teen and young drivers, high-risk drivers who need an SR-22, rideshare and delivery drivers, and drivers new to the U.S.",
    intro: [
      "Insurers price some drivers very differently. A teen on a parent's policy, a driver who needs an SR-22, someone driving for Uber or DoorDash, and a newcomer without a U.S. driving record each face different rules and costs.",
      "Find your situation below for what to expect and how to keep the cost manageable.",
    ],
    posts: [
      "how-adding-a-teen-driver-affects-your-premium",
      "sr22-insurance",
      "rideshare-delivery-insurance",
      "car-insurance-for-foreign-drivers",
    ],
    guides: [{ href: "/guides/cheapest-car-insurance-for-young-drivers", title: "Cheapest car insurance for young drivers" }],
  },
  {
    slug: "buying",
    name: "Buying and switching",
    title: "How to buy, compare and switch car insurance",
    metaTitle: "How to Buy and Compare Car Insurance (and When to Switch)",
    metaDescription:
      "How to compare car insurance quotes, what to ask before you buy, the red flags to avoid, and how to switch insurers without a gap in coverage.",
    intro: [
      "Prices for the same driver can vary widely from one insurer to the next, so comparing is often the biggest saving available. It also pays to know what to ask, and what to watch out for, before you commit.",
      "These articles cover getting quotes, choosing an insurer, buying online without an agent, and switching mid-policy without a gap in coverage.",
    ],
    posts: [
      "how-to-compare-auto-insurance",
      "questions-to-ask-before-buying-car-insurance",
      "red-flags-choosing-insurance-company",
      "car-insurance-without-an-agent",
      "car-insurance-quote-without-personal-information",
      "can-you-switch-car-insurance-mid-policy",
    ],
    guides: [{ href: "/guides/does-getting-a-quote-affect-credit-score", title: "Does getting a quote affect your credit score?" }],
  },
];

export const hubHref = (slug: HubSlug) => `/car-insurance/${slug}`;

export function getHub(slug: HubSlug): Hub {
  const hub = HUBS.find((h) => h.slug === slug);
  if (!hub) throw new Error(`Unknown hub: ${slug}`);
  return hub;
}

// The hub a blog post belongs to, or null if unassigned.
export function hubForPost(postSlug: string): Hub | null {
  return HUBS.find((h) => h.posts.includes(postSlug)) ?? null;
}

// The hub a guide belongs to, or null.
export function hubForGuide(href: string): Hub | null {
  return HUBS.find((h) => h.guides.some((g) => g.href === href)) ?? null;
}
