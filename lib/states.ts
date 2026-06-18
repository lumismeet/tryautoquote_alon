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

  // State-specific extra sections
  extraSections?: { title: string; body: string }[];

  // CTA
  ctaHeading: string;
  ctaButton: string;
};

export const states: StateInsuranceData[] = [
  {
    name: "Texas",
    slug: "texas",
    image: "/states/texas.jpg",
    imageAlt: "Texas highway",
    metaTitle: "Car Insurance in Texas | Minimums, Requirements and Free Quotes",
    metaDescription:
      "Texas requires 30/60/25 liability coverage. Learn what the state minimums cover, why most drivers need more, and compare free personalized quotes in minutes.",
    datePublished: "2026-06-18",

    minDisplay: "30/60/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage must be offered.",

    callout:
      "Texas requires 30/60/25 liability coverage: $30,000 per person for bodily injury, $60,000 per accident, and $25,000 for property damage. Texas is an at-fault state.",

    statute: "Texas Transportation Code § 601.072",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Texas is a Class B misdemeanor for a first offense, carrying fines of up to $350 and potential license suspension.",

    faultExplain:
      "Texas operates under an at-fault system. The driver found responsible for causing an accident is liable for the resulting damages. Injured parties file claims against the at-fault driver's liability insurance rather than their own policy. This means your liability limits directly determine how much protection you carry if you cause a serious accident. If damages exceed your limits, you are personally responsible for the remainder.",

    umMandatory: false,
    umExplain:
      "Texas insurers are required to offer uninsured and underinsured motorist coverage. Drivers may reject it, but only by signing a written waiver. This coverage pays for your injuries and vehicle damage when an at-fault driver has no insurance or insufficient insurance to cover your losses.",

    creditExplain:
      "Texas permits insurers to use a credit-based insurance score as one factor when pricing your policy. The credit check is a soft inquiry and does not affect your score. Drivers with stronger credit histories generally receive lower premiums, all else being equal.",

    recommendedExplain:
      "Most financial advisors recommend carrying at least 100/300/100 liability, which is well above the Texas minimum. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage in addition to liability. If you own your vehicle outright and it is worth less than $5,000, liability only may be sufficient.",

    ctaHeading: "Compare Texas car insurance quotes",
    ctaButton: "Get a Free Texas Quote",
  },
  {
    name: "California",
    slug: "california",
    image: "/states/california.jpg",
    imageAlt: "California freeway",
    metaTitle: "Car Insurance in California | Requirements and Free Quotes",
    metaDescription:
      "California requires 30/60/15 liability coverage and bans credit-based pricing. Learn the state minimums, what they cover, and compare free personalized quotes.",
    datePublished: "2026-06-18",

    minDisplay: "30/60/15 liability",
    faultSystem: "at-fault",
    creditBanned: true,
    indexNote: "Good Driver Discount of at least 20% mandated by law.",

    callout:
      "California requires 30/60/15 liability coverage: $30,000 per person for bodily injury, $60,000 per accident, and $15,000 for property damage. California is an at-fault state and prohibits insurers from using credit scores to price policies.",

    statute: "California Insurance Code § 11580.1b",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "California increased its minimum liability limits effective January 1, 2025 under AB 1107, replacing the previous 15/30/5 minimums that had not been updated since 1967. Driving without insurance can result in fines, vehicle impoundment, and license suspension.",

    faultExplain:
      "California is an at-fault state. The driver responsible for causing an accident is liable for the resulting damages. Injured parties file claims against the at-fault driver's liability coverage rather than their own policy.",

    umMandatory: false,
    umExplain:
      "California insurers must offer uninsured motorist coverage. Drivers may reject it in writing, but doing so removes protection when an at-fault driver cannot pay. Given California's at-fault system, carrying UM coverage ensures you are not left bearing costs when the responsible driver has no insurance.",

    creditExplain:
      "California is one of a small number of states that prohibits insurers from using credit-based insurance scores when pricing auto policies. Under California Insurance Code § 1861.02, insurers must base rates on factors such as driving record, years of experience, and annual mileage. Your credit history has no impact on your California auto insurance rate.",

    recommendedExplain:
      "Given California's high cost of living and medical expenses, most advisors recommend carrying at least 100/300/100 liability. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage as well.",

    extraSections: [
      {
        title: "The Good Driver Discount",
        body: "Under Proposition 103, California insurers are required to offer a minimum 20% discount to drivers who qualify as a \"good driver.\" To qualify, you must have held a license for at least three years and have no more than one point on your driving record during that period. This discount is mandated by law and must be applied automatically if you qualify.",
      },
    ],

    ctaHeading: "Compare California car insurance quotes",
    ctaButton: "Get a Free California Quote",
  },
  {
    name: "Florida",
    slug: "florida",
    image: "/states/florida.jpg",
    imageAlt: "Florida highway",
    metaTitle: "Car Insurance in Florida | PIP Requirements and Free Quotes",
    metaDescription:
      "Florida requires $10,000 PIP and $10,000 property damage coverage. Learn how the no-fault system works, what is required, and compare free quotes for your zip code.",
    datePublished: "2026-06-18",

    minDisplay: "$10k PIP + $10k PDL",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "No mandatory bodily injury liability for most drivers.",

    callout:
      "Florida requires $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability (PDL). Florida does not require Bodily Injury Liability for most drivers. Florida is a no-fault state.",

    statute: "Florida Statute § 627.733",
    minCoverage: [
      { label: "$10,000", amount: "Personal Injury Protection (PIP)" },
      { label: "$10,000", amount: "Property Damage Liability (PDL)" },
    ],
    penaltyNote:
      "Florida is one of a small number of states that does not require Bodily Injury Liability for most drivers. However, drivers who have previously been involved in an at-fault accident causing injury or death may be required to carry BI coverage.",

    faultExplain:
      "Florida operates under a no-fault insurance system. After an accident, each driver files a claim with their own PIP coverage for medical expenses and lost wages, regardless of who caused the accident. PIP covers 80% of necessary medical expenses and 60% of lost wages, up to the $10,000 policy limit. The no-fault system limits your ability to sue the other driver for minor injuries. You can step outside the no-fault system and pursue a liability claim against an at-fault driver only if your injuries meet a defined threshold, such as significant and permanent injury, permanent scarring, or death.",

    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Bodily injury you cause to another driver beyond the no-fault threshold",
      "Losses caused by an uninsured driver hitting you",
    ],

    umMandatory: false,
    umExplain:
      "Florida insurers are required to offer uninsured motorist coverage. Drivers may reject it in writing, but doing so removes protection against drivers who carry no insurance. Florida has historically had one of the higher rates of uninsured drivers among U.S. states, making this coverage worth considering.",

    creditExplain:
      "Florida permits insurers to use a credit-based insurance score as one factor in pricing policies. The check is a soft inquiry and does not affect your credit score.",

    recommendedExplain:
      "At a minimum, consider adding Bodily Injury Liability to your policy even though it is not legally required. A practical coverage package for Florida drivers includes $10,000 PIP, $10,000 PDL, 100/300 BI, and uninsured motorist coverage. If your vehicle is financed or leased, collision and comprehensive are also required by your lender.",

    extraSections: [
      {
        title: "Why Bodily Injury Liability matters in Florida",
        body: "Even though BI is not mandatory for most Florida drivers, carrying it provides critical protection. Without it, if you cause an accident that results in serious injury to another person and they successfully sue you, your personal assets are at risk. Most insurance professionals strongly recommend carrying at least $10,000/$20,000 in BI coverage, and ideally 100/300 for meaningful protection.",
      },
    ],

    ctaHeading: "Compare Florida car insurance quotes",
    ctaButton: "Get a Free Florida Quote",
  },
  {
    name: "New York",
    slug: "new-york",
    image: "/states/new-york.jpg",
    imageAlt: "New York city traffic",
    metaTitle: "Car Insurance in New York | Requirements and Free Quotes",
    metaDescription:
      "New York requires 25/50/10 liability plus $50,000 no-fault PIP coverage. Learn what is required, how no-fault works, and compare free personalized quotes.",
    datePublished: "2026-06-18",

    minDisplay: "25/50/10 + $50k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",

    callout:
      "New York requires 25/50/10 liability coverage, $50,000 in no-fault PIP benefits, and $25,000/$50,000 in uninsured motorist coverage. New York is a no-fault state.",

    statute: "New York Vehicle and Traffic Law § 311",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person ($50,000 for death)" },
      { label: "$50,000", amount: "bodily injury per accident ($100,000 for death)" },
      { label: "$10,000", amount: "property damage per accident" },
      { label: "$50,000", amount: "no-fault Personal Injury Protection (PIP)" },
      { label: "$25,000/$50,000", amount: "uninsured motorist coverage (mandatory)" },
    ],
    penaltyNote:
      "New York has among the more comprehensive minimum requirements in the country, as both PIP and uninsured motorist coverage are mandatory. Allowing your policy to lapse in New York results in automatic license and registration suspension.",

    faultExplain:
      "New York is a no-fault state, meaning your own PIP coverage pays for your medical expenses and a portion of lost wages after an accident regardless of who caused it. The mandatory $50,000 PIP benefit is among the highest required minimums in the country. Like Florida, New York's no-fault system restricts your ability to sue another driver for minor injuries. You may step outside the no-fault system and bring a liability claim only if your injuries meet the \"serious injury\" threshold defined under New York Insurance Law § 5102(d), which includes fractures, significant disfigurement, permanent limitation of a body organ, and similar criteria.",

    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, fire, or vandalism to your vehicle",
      "Medical costs beyond $50,000 in a serious accident",
      "Liability damages that exceed the 25/50 limits",
    ],

    umMandatory: true,
    umExplain:
      "Unlike most states where uninsured motorist coverage must only be offered, New York requires all policies to include it at a minimum of $25,000 per person and $50,000 per accident. This covers your injuries if you are hit by a driver who has no insurance.",

    creditExplain:
      "New York permits insurers to use credit-based insurance scores as one factor in pricing policies. The check is a soft inquiry with no impact on your credit score. Drivers with stronger credit typically pay lower premiums, all else being equal.",

    recommendedExplain:
      "New York's mandatory minimums are a reasonable starting point but still leave gaps. Consider increasing liability limits to at least 100/300/100 and adding collision and comprehensive if your vehicle is worth more than $5,000. If your vehicle is financed or leased, your lender will require collision and comprehensive in any case.",

    ctaHeading: "Compare New York car insurance quotes",
    ctaButton: "Get a Free New York Quote",
  },
  {
    name: "Georgia",
    slug: "georgia",
    image: "/states/georgia.jpg",
    imageAlt: "Georgia highway",
    metaTitle: "Car Insurance in Georgia | State Minimums and Free Quotes",
    metaDescription:
      "Georgia requires 25/50/25 liability coverage. Learn what the state minimums cover, when to consider more protection, and compare free quotes for your Georgia zip code.",
    datePublished: "2026-06-18",

    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Compliance verified via the AIVS system.",

    callout:
      "Georgia requires 25/50/25 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage. Georgia is an at-fault state.",

    statute: "O.C.G.A. § 40-9-37",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Georgia enforces compliance through the Automobile Insurance Verification System (AIVS), which cross-references vehicle registrations with active insurance policies. Driving without insurance can result in fines, license suspension, and registration cancellation.",

    faultExplain:
      "Georgia is an at-fault state. The driver found responsible for causing an accident is liable for the damages. Injured parties file claims against the at-fault driver's liability insurance. If you are at fault and your coverage limits are insufficient to pay all damages, you are personally liable for the remainder.",

    umMandatory: false,
    umExplain:
      "Georgia insurers are required to offer uninsured motorist coverage, but drivers may reject it by signing a written waiver. This coverage pays for your injuries and vehicle damage when an at-fault driver has no insurance or insufficient insurance. Given Georgia's at-fault system, carrying UM coverage ensures you are not left bearing costs when the responsible driver cannot pay.",

    creditExplain:
      "Georgia permits insurers to use a credit-based insurance score as one factor in pricing policies. The check is a soft inquiry and does not affect your credit score. Drivers with stronger credit histories generally receive lower premiums, all else being equal.",

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability, which significantly exceeds Georgia's minimums and provides meaningful protection if you cause a serious accident. If your vehicle is financed or leased, your lender will require collision and comprehensive as well. For an older vehicle you own outright, consider whether the cost of those add-ons is justified by the vehicle's current value.",

    ctaHeading: "Compare Georgia car insurance quotes",
    ctaButton: "Get a Free Georgia Quote",
  },
];

export function getStateBySlug(slug: string): StateInsuranceData | undefined {
  return states.find((s) => s.slug === slug);
}
