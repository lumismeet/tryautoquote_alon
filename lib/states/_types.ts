export type StateInsuranceData = {
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;

  // Index card
  minDisplay: string;
  faultSystem: "at-fault" | "no-fault";
  creditBanned: boolean;
  indexNote: string;

  // Callout box
  callout: string;

  // Requirements section
  statute: string;
  minCoverage: { label: string; amount: string }[];
  penaltyNote: string;

  // Fault system section
  faultExplain: string;

  // What's not covered (overridable per state)
  notCovered?: string[];

  // Uninsured motorist
  umMandatory: boolean;
  umExplain: string;

  // Credit
  creditExplain: string;

  // Recommended coverage
  recommendedExplain: string;

  // State-specific sections rendered before UM
  extraSections?: { title: string; body: string }[];

  // State-specific sections rendered after recommended coverage
  closingSections?: { title: string; body: string }[];

  // CTA
  ctaHeading: string;
  ctaButton: string;
};
