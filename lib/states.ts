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

    statute: "Texas Transportation Code Section 601.072",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Texas is a Class B misdemeanor for a first offense, carrying fines up to $350 and potential license suspension. A second offense can result in fines up to $1,000, and your vehicle may be impounded. Texas law requires you to carry proof of financial responsibility at all times and present it during a traffic stop or after any accident. If you cause an accident while uninsured, the state can suspend your license and registration for up to two years, and you may be required to file an SR-22 certificate with the Texas Department of Public Safety before your driving privileges are reinstated.",

    faultExplain:
      "The driver found responsible for causing an accident is liable for the resulting damages, and injured parties file claims against the at-fault driver's liability insurance rather than their own policy. Your liability limits directly determine how much financial exposure you carry if you cause a serious accident. Consider a situation where you cause a collision and the other driver sustains injuries requiring $80,000 in medical treatment. If your policy carries the state minimum of $30,000 per person, the remaining $50,000 becomes your personal responsibility. Texas courts can garnish wages and place liens on property to collect unpaid civil judgments. The state minimum has not kept pace with the actual cost of medical care or vehicle repairs, which is why most insurance professionals recommend limits well above what the law requires. Texas also follows a modified comparative fault rule. If you are found partially at fault for an accident, any compensation you receive from the other driver's insurer is reduced by your percentage of fault. If you are more than 50 percent at fault, you cannot recover anything from the other party.",

    umMandatory: false,
    umExplain:
      "Texas insurers are required to offer uninsured and underinsured motorist coverage, and drivers may only reject it by signing a written waiver. This coverage pays for your injuries and vehicle damage when an at-fault driver carries no insurance or not enough insurance to cover your losses. Texas has a significant number of uninsured drivers on its roads. If one causes a serious accident that injures you, your options without UM coverage are limited to suing the at-fault driver personally, which is often not practical when that person has no assets. UM coverage steps in and pays your medical bills and vehicle repairs up to your policy limits as if the other driver had adequate insurance. Underinsured motorist coverage is equally important. If a driver with the $30,000 state minimum causes an accident that results in $80,000 of your medical expenses, their policy covers only $30,000. Your UIM coverage pays the remaining $50,000 up to your own UIM limit. Carrying UM and UIM at the same limits as your liability coverage is a widely recommended baseline for Texas drivers.",

    creditExplain:
      "Texas permits insurers to use a credit-based insurance score as one factor when pricing your policy. This score is calculated differently from the standard credit score that lenders use for loan applications. It weighs factors such as your payment history, outstanding balances, length of credit history, and types of credit in use, but the check is a soft inquiry and has no effect on your credit report or score. Research conducted by insurers and regulators has consistently found a statistical correlation between credit-based insurance scores and the likelihood of filing a claim, which is why the practice is permitted in Texas and most other states. Drivers with stronger credit histories tend to pay lower premiums, all else being equal. If your credit has improved significantly since you last shopped for coverage, running new quotes from multiple carriers can produce meaningful savings even without any change in your driving record.",

    recommendedExplain:
      "Most financial advisors and insurance professionals recommend carrying at least 100/300/100 liability, which is well above the Texas minimum. At this level you have $100,000 per person and $300,000 per accident in bodily injury coverage, plus $100,000 for property damage you cause. These limits provide meaningful protection without a dramatic increase in premium compared to the state minimum. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage in addition to liability, and they may also specify a maximum deductible. If you own your vehicle outright, consider its current market value before adding collision and comprehensive. A practical rule is that if the annual cost of those coverages exceeds ten percent of the vehicle's value, they may not be cost-effective. For most Texas drivers, a solid baseline policy includes 100/300/100 liability, uninsured and underinsured motorist coverage at matching limits, collision with a $500 deductible, comprehensive with a $500 deductible, and medical payments coverage for additional protection for your own injuries regardless of fault.",

    closingSections: [
      {
        title: "How insurers determine your rate in Texas",
        body: "Texas insurers consider several factors when calculating your premium. Your driving record carries the most weight: at-fault accidents and moving violations typically affect your rate for three to five years depending on severity. Your zip code matters significantly in Texas because urban areas like Houston, Dallas, and San Antonio have higher accident frequency and vehicle theft rates than rural areas, which directly affects what carriers charge. The vehicle you drive affects the cost of collision and comprehensive coverage based on repair cost, theft frequency, and safety ratings. Your annual mileage, age, years of licensed experience, and the coverage limits you choose all factor into the final premium as well. Because each insurer weights these variables differently, the same driver can receive quotes that vary by hundreds of dollars annually across carriers. Shopping at least three carriers whenever your policy renews is a reliable way to ensure you are not overpaying.",
      },
      {
        title: "SR-22 requirements in Texas",
        body: "An SR-22 is not a type of insurance. It is a certificate your insurer files with the Texas Department of Public Safety confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI or DWI conviction, after being caught driving without insurance, or after accumulating too many points on your driving record. The requirement typically remains in place for two years from the triggering event, and your license stays suspended until the SR-22 is on file. Not every insurer offers SR-22 filing, so if you need one you may have to search specifically for carriers that work with higher-risk drivers. Allowing your policy to lapse during the SR-22 period restarts the suspension and can extend the overall requirement.",
      },
    ],

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
      "California requires 30/60/15 liability coverage: $30,000 per person for bodily injury, $60,000 per accident, and $15,000 for property damage. California is an at-fault state and prohibits insurers from using credit scores to price auto policies.",

    statute: "California Insurance Code Section 11580.1b",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "California increased its minimum liability limits effective January 1, 2025, under AB 1107, replacing the previous 15/30/5 minimums that had not been updated since 1967. The law also schedules a further increase in 2035. Driving without insurance in California can result in fines starting at $100 for a first offense and climbing to $200 to $500 for subsequent violations, plus penalty assessments that can significantly increase the base fine. Your vehicle may be impounded, and your registration can be suspended. Proof of insurance must be carried in your vehicle at all times and presented to law enforcement upon request.",

    faultExplain:
      "The driver who caused an accident is responsible for the resulting damages, and injured parties file claims against the at-fault driver's liability coverage rather than their own policy. California applies a pure comparative negligence rule, which differs from the modified fault rules used in states like Texas. Under pure comparative negligence, you can recover compensation even if you were 99 percent at fault in an accident, but your recovery is reduced proportionally by your percentage of fault. If you were 40 percent responsible for an accident that caused you $100,000 in damages, you could still recover $60,000 from the other party's insurer. This rule also has practical implications for at-fault drivers. If another driver sues you after an accident in which you were partially at fault, your insurer may still have to pay a portion of the judgment. Adequate liability limits are important because partial fault does not eliminate your financial exposure, it only reduces the other party's recovery proportionally.",

    umMandatory: false,
    umExplain:
      "California insurers must offer uninsured motorist coverage, and drivers may reject it in writing. Given California's at-fault system and the volume of drivers on state roads, carrying UM coverage is a practical choice for most policyholders. If an uninsured driver causes an accident that injures you or damages your vehicle, your UM bodily injury coverage pays your medical expenses and lost wages up to your policy limits, and your UM property damage coverage pays for repairs or replacement of your vehicle. California also allows stacking of uninsured motorist coverage across multiple vehicles on the same policy, which increases the total pool of coverage available in a serious accident. Because California's roads are heavily traveled and the consequences of being hit by an uninsured driver can be financially devastating, rejecting UM coverage should be a deliberate decision rather than a default.",

    creditExplain:
      "California is one of a small number of states that prohibits insurers from using credit-based insurance scores when pricing auto policies. Under California Insurance Code Section 1861.02, insurers must base rates on three primary factors: your driving record, the number of years you have been licensed, and your annual mileage driven. Secondary factors such as vehicle type and garaging location may also be considered, but your credit history is explicitly excluded from the calculation. This prohibition has a meaningful effect on rate equity. Drivers in California who have poor credit due to medical debt, job loss, or other circumstances unrelated to their driving behavior are not penalized on their auto insurance. If you have moved to California from a state where credit was used to price your policy, your rate may differ from what you paid previously even if your driving record is the same, simply because that one pricing factor is no longer in play.",

    extraSections: [
      {
        title: "The Good Driver Discount",
        body: "Under Proposition 103, California insurers are required to offer a minimum 20 percent discount to drivers who qualify as a good driver. To qualify, you must have held a California license for at least three years and have no more than one point on your driving record during that period. A single minor moving violation typically adds one point, while a DUI conviction or an at-fault accident causing injury or death can add two points. The good driver discount is not a promotional offer that carriers can choose to withhold. It is mandated by state law and must be applied automatically if you qualify. Because the discount is tied to your record rather than your loyalty to a particular carrier, switching insurers does not affect your eligibility. If you believe you qualify and your current insurer has not applied the discount, you have the right to request it and to receive a written explanation if it is denied.",
      },
    ],

    recommendedExplain:
      "Given California's high cost of living, medical expenses, and vehicle repair costs, most advisors recommend carrying at least 100/300/100 liability. The state minimum property damage limit of $15,000 is particularly low relative to the cost of newer vehicles in California, where a single accident involving a newer SUV or truck can easily result in repair costs that exceed the minimum. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage in addition to liability, and they may specify a maximum allowable deductible. For vehicles you own outright, compare the current market value of your car against the annual cost of collision and comprehensive coverage. Adding gap coverage is worth considering if you recently purchased a new vehicle, as it pays the difference between what you owe on the loan and what the car is actually worth if it is totaled before the loan is paid down.",

    closingSections: [
      {
        title: "How insurers determine your rate in California",
        body: "Because California prohibits credit-based pricing, insurers rely heavily on your driving record, years of licensed experience, and annual mileage when calculating your premium. A clean driving record is the single most effective way to keep your California auto insurance costs low. At-fault accidents and moving violations typically affect your rate for three years. Your zip code is a significant factor as well: urban areas such as Los Angeles and San Francisco have higher accident rates, medical costs, and vehicle theft rates than less dense parts of the state. The vehicle you drive affects the cost of collision and comprehensive coverage based on repair cost, parts availability, and theft frequency. Because California law restricts which factors insurers can use, the price difference between the best and worst available quote for the same driver is often smaller than in states with more pricing flexibility, but comparison shopping still regularly produces meaningful savings.",
      },
      {
        title: "California Low Cost Auto Insurance Program",
        body: "California operates the California Low Cost Auto Insurance Program, known as CLCA, for income-eligible drivers who have difficulty affording standard market coverage. The program provides liability coverage that meets the state minimum at a subsidized premium, typically well under $300 per year. To qualify, you must meet income guidelines based on household size and federal poverty level, have a clean driving record for the past three years, own a vehicle valued at $25,000 or less, and hold a valid California driver license. The program is available in all California counties and is administered through the California Department of Insurance. If you are unsure whether you qualify, the Department of Insurance website has an eligibility screening tool that can confirm your status before you apply.",
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
      "Florida requires $10,000 in Personal Injury Protection and $10,000 in Property Damage Liability. Florida does not require Bodily Injury Liability for most drivers. Florida is a no-fault state.",

    statute: "Florida Statute Section 627.733",
    minCoverage: [
      { label: "$10,000", amount: "Personal Injury Protection (PIP)" },
      { label: "$10,000", amount: "Property Damage Liability (PDL)" },
    ],
    penaltyNote:
      "Florida is one of a small number of states that does not require Bodily Injury Liability for most drivers. However, drivers previously involved in an at-fault accident causing injury or death may be required to carry BI as a condition of license reinstatement. Driving without the required PIP and PDL coverage results in a license and registration suspension until you provide proof of insurance and pay a reinstatement fee. The fee starts at $150 for a first offense, $250 for a second, and $500 for a third offense within a three-year period. Florida also has one of the highest rates of uninsured drivers in the country, which pushes overall insurance costs up for all policyholders in the state.",

    faultExplain:
      "Florida operates under a no-fault insurance system. After an accident, each driver files a claim with their own Personal Injury Protection coverage for medical expenses and a portion of lost wages, regardless of who caused the accident. PIP covers 80 percent of necessary medical expenses and 60 percent of lost wages up to the $10,000 policy limit. If your medical expenses exceed $10,000, you are responsible for the remainder unless you carry additional medical coverage. The no-fault system was designed to speed up claim payments and reduce litigation after minor accidents, but it comes with restrictions. You can step outside the no-fault system and pursue a liability claim against an at-fault driver only if your injuries meet a defined threshold under Florida law, which includes significant and permanent loss of an important bodily function, permanent injury within a reasonable degree of medical probability, significant and permanent scarring or disfigurement, or death. One nuance worth knowing: PIP covers you and certain family members who live in your household, as well as passengers who do not own a car. It does not cover damage to your vehicle, which is handled separately through PDL and collision coverage.",

    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Bodily injury you cause to another driver beyond the no-fault threshold",
      "Losses caused by an uninsured driver hitting you",
    ],

    extraSections: [
      {
        title: "Why Bodily Injury Liability matters in Florida",
        body: "Even though BI is not mandatory for most Florida drivers, it provides critical protection that the state minimum entirely omits. Without it, if you cause an accident that results in serious injury to another person and they successfully sue you, your personal assets are at risk. Florida has a limited homestead exemption that protects your primary residence from certain judgment creditors, but savings accounts, investment accounts, and a portion of wages can be subject to garnishment. Most insurance professionals strongly recommend carrying at least $10,000 per person and $20,000 per accident in BI coverage, with 100/300 being a more robust choice. Adding BI to a Florida policy costs relatively little compared to the financial exposure of driving without it.",
      },
      {
        title: "How PIP benefits apply in practice",
        body: "Florida's PIP benefit covers 80 percent of medical expenses and 60 percent of lost wages up to the $10,000 limit, but there is an important distinction based on the nature of your injury. If your injuries do not qualify as an emergency medical condition under Florida law, your PIP benefit is capped at $2,500 rather than the full $10,000. An emergency medical condition is defined as one that manifests acute symptoms of sufficient severity such that the absence of immediate medical attention could reasonably result in serious jeopardy to patient health. This distinction matters because non-emergency treatment after a minor accident may exhaust the $2,500 sub-limit quickly, leaving you responsible for additional costs. Understanding this threshold before an accident helps you make better decisions about seeking care.",
      },
    ],

    umMandatory: false,
    umExplain:
      "Florida insurers are required to offer uninsured motorist coverage, and drivers may reject it in writing. Florida consistently ranks among the states with the highest percentage of uninsured drivers, which makes this coverage an important consideration. If an uninsured driver causes a serious accident resulting in injuries that exceed your own PIP limit of $10,000, and you do not carry UM coverage, your remaining option is to sue the at-fault driver personally to recover excess costs. UM coverage in Florida pays for your injuries above and beyond what PIP covers, up to your UM policy limit. It also covers you in a hit-and-run accident where the at-fault driver cannot be identified. Given Florida's traffic volume, urban density in major metro areas, and the rate of uninsured drivers, UM coverage provides meaningful protection that the state minimum does not.",

    creditExplain:
      "Florida permits insurers to use a credit-based insurance score as one factor when pricing auto policies. The check is a soft inquiry and does not affect your credit report or credit score. Florida law requires insurers to notify you if your credit information results in a rate that is higher than what you would otherwise receive, which gives you an opportunity to dispute inaccurate information on your credit report. If your credit score has improved significantly since your last policy renewal, shopping new quotes across multiple carriers can result in meaningful savings even if your driving record has not changed.",

    recommendedExplain:
      "At a minimum, consider adding Bodily Injury Liability to your Florida policy even though it is not legally required. A practical coverage package for most Florida drivers includes the mandatory $10,000 PIP and $10,000 PDL, plus 100/300 BI and matching uninsured motorist coverage. If your vehicle is financed or leased, your lender will require collision and comprehensive in addition to liability. Florida also allows you to add a PIP deductible of $250, $500, or $1,000 in exchange for a lower premium if you are comfortable absorbing some out-of-pocket medical costs. For drivers who use their vehicle frequently in high-traffic areas like Miami, Orlando, or Tampa, the risk of an accident is meaningfully higher than the state average, making robust coverage especially worth the additional cost.",

    closingSections: [
      {
        title: "How insurers determine your rate in Florida",
        body: "Florida insurers consider your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score when calculating your premium. Zip code has an unusually large impact on Florida rates: Miami-Dade, Broward, and Palm Beach counties consistently produce some of the highest auto insurance premiums in the country due to accident frequency, medical treatment costs, and litigation rates, while rural counties in northern Florida are priced considerably lower. Your vehicle's theft rate also matters more in Florida than in many other states due to the state's above-average vehicle theft statistics. Florida's overall insurance costs tend to be elevated relative to the national average, driven by the combination of a high uninsured driver rate, no-fault fraud activity, and the frequency of weather-related claims from hurricanes and flooding.",
      },
      {
        title: "FR-44 requirements in Florida",
        body: "Florida uses an FR-44 certificate for the most serious traffic offenses, such as DUI and DWI, which is similar to an SR-22 but requires significantly higher liability limits. After a DUI conviction in Florida, you must carry at least $100,000 per person and $300,000 per accident in bodily injury coverage, and $50,000 in property damage, which is far above the state minimum. The FR-44 requirement typically lasts three years from the date your license is reinstated. For less serious offenses that do not trigger an FR-44, Florida may require a standard SR-22 certificate at ordinary minimum limits. Not all insurers file FR-44 or SR-22 certificates, so drivers who need one should look specifically for carriers that serve the non-standard auto insurance market.",
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
      "New York requires 25/50/10 liability coverage, $50,000 in no-fault PIP benefits, and $25,000 per person in uninsured motorist coverage. New York is a no-fault state and mandates UM coverage for all registered vehicles.",

    statute: "New York Vehicle and Traffic Law Section 311",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person ($50,000 for death)" },
      { label: "$50,000", amount: "bodily injury per accident ($100,000 for death)" },
      { label: "$10,000", amount: "property damage per accident" },
      { label: "$50,000", amount: "no-fault Personal Injury Protection (PIP)" },
      { label: "$25,000/$50,000", amount: "uninsured motorist coverage (mandatory)" },
    ],
    penaltyNote:
      "New York has a continuous coverage requirement, meaning you cannot cancel your insurance while your vehicle remains registered. If you are not driving a vehicle and want to cancel your policy, you must first surrender the license plates to the DMV. Allowing your policy to lapse results in automatic license and registration suspension the day coverage ends. Penalties for driving without insurance include fines of $150 to $1,500, a civil penalty of $8 per day for every day you drove uninsured up to $900, and license and registration revocation. Reinstating your driving privileges requires proof of a new policy, payment of fees, and resolution of any outstanding suspension period.",

    faultExplain:
      "New York is a no-fault state, meaning your own PIP coverage pays for your medical expenses and a portion of lost wages after an accident regardless of who caused it. The mandatory $50,000 no-fault benefit in New York is among the highest required minimums in the country. PIP covers 80 percent of medical expenses and lost earnings up to the policy limit. New York's no-fault system restricts your ability to sue the other driver for minor injuries. To step outside the no-fault system and bring a liability claim against an at-fault driver, your injuries must meet the serious injury threshold defined under New York Insurance Law Section 5102(d). Qualifying injuries include fractures, significant disfigurement, permanent consequential limitation of a body organ or member, significant limitation of use of a body function or system, or a medically determined injury that prevents you from performing substantially all of your usual daily activities for at least 90 of the 180 days following the accident. New York also applies a pure comparative negligence rule, which means even if you were partially at fault for an accident, you can recover compensation from the other driver reduced proportionally by your share of fault. This applies to claims that qualify under the serious injury threshold.",

    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, fire, or vandalism to your vehicle",
      "Medical costs beyond $50,000 in a serious accident",
      "Liability damages that exceed the 25/50 limits",
    ],

    umMandatory: true,
    umExplain:
      "Unlike most states where uninsured motorist coverage must only be offered to drivers who can then choose to reject it, New York requires all auto insurance policies to include UM coverage at a minimum of $25,000 per person and $50,000 per accident. This mandatory inclusion reflects the state legislature's recognition that uninsured drivers create real financial harm for other road users who may have no practical way to recover damages from someone with no assets or insurance. Your UM coverage in New York also applies in hit-and-run accidents where the responsible driver cannot be identified, which is an important protection given the volume of traffic in New York City and surrounding areas. You may purchase UM coverage above the mandatory minimum for additional protection. If you carry liability limits higher than $25,000/$50,000, which is advisable for most drivers, raising your UM limits to match your liability limits provides a more complete and balanced policy.",

    creditExplain:
      "New York permits insurers to use credit-based insurance scores as one factor in pricing auto policies. The check is a soft inquiry with no impact on your credit report or score. Drivers with stronger credit histories typically pay lower premiums, all else being equal. New York law requires insurers to notify you if your credit information results in an adverse action on your policy, giving you the opportunity to review your credit report for errors. If your financial situation has improved since your last renewal and your credit score has risen as a result, shopping new quotes from multiple carriers is worth doing at your next renewal.",

    recommendedExplain:
      "New York's mandatory minimums are more comprehensive than most states but still leave meaningful gaps. The $25,000 per person bodily injury limit can be consumed quickly in a serious accident involving significant injuries, and the $10,000 property damage limit does not reflect the cost of repairing or replacing a newer vehicle. Most advisors recommend increasing liability to at least 100/300/100 and adding collision and comprehensive if your vehicle is worth more than a few thousand dollars. If your vehicle is financed or leased, your lender will require collision and comprehensive regardless. New York City residents specifically may want to compare the annual collision premium against their vehicle's current value, as the cost of collision coverage in high-density urban zip codes can be substantial relative to the benefit it provides on an older vehicle.",

    closingSections: [
      {
        title: "How insurers determine your rate in New York",
        body: "New York insurers use your driving record, zip code, vehicle type, years of licensed experience, annual mileage, and credit-based insurance score to calculate your premium. Zip code is an exceptionally significant factor in New York due to the wide differences in claim frequency and cost between New York City and upstate areas. Rates in parts of Brooklyn, Queens, and the Bronx are among the highest in the country for any urban area. At-fault accidents and moving violations typically affect your rate for three years. New York uses territory-based rating filed with the Department of Financial Services, which means carriers price specific zip codes based on historical claims data from those areas. Because of this, two drivers with identical records, vehicles, and coverage can pay very different premiums if they live in different parts of the state.",
      },
      {
        title: "No-fault fraud and its effect on premiums",
        body: "New York has a documented history of no-fault insurance fraud, particularly in the New York City metro area. Staged accidents, inflated medical billing on PIP claims, and treatment at clinics operating specifically to exploit the no-fault system have historically increased the cost of insurance across the state. The New York State Insurance Frauds Bureau investigates these cases, and the state legislature has passed several laws aimed at tightening which medical providers can bill no-fault claims and how quickly they must submit treatment. These fraud-related costs are distributed across all policyholders in the state as higher base rates, which is one reason New York premiums tend to be elevated even for drivers with clean records and no prior claims.",
      },
    ],

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
      "Georgia requires 25/50/25 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage. Georgia is an at-fault state and enforces insurance compliance through the real-time AIVS system.",

    statute: "O.C.G.A. Section 40-9-37",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Georgia enforces insurance compliance through the Automobile Insurance Verification System, which cross-references vehicle registrations with active insurance policies in real time. When a policy is canceled, the insurer is required to report it to AIVS, which automatically flags the lapse and triggers a suspension notice. A first offense for driving without insurance carries a $200 fine and a license and registration suspension. A second offense within five years raises the fine to $400 and requires SR-22 filing for three years. A third offense within five years carries a $700 fine and can result in classification as a high-risk driver, which significantly affects the cost of future coverage.",

    faultExplain:
      "The driver found responsible for causing an accident is liable for the resulting damages, and injured parties file claims against the at-fault driver's liability insurance rather than their own policy. If you are at fault and your coverage limits are insufficient to cover all damages, you are personally responsible for the remainder, and the injured party may pursue a civil judgment against you. Georgia applies a modified comparative fault rule with a 50 percent threshold. If you are found 49 percent or less at fault, you can recover compensation from the other party reduced by your share of fault. If you are 50 percent or more at fault, you cannot recover anything from the other driver. Georgia's tort system also allows injured parties to claim non-economic damages such as pain and suffering, lost future income, and diminished quality of life, which can substantially exceed the cost of immediate medical treatment. The $25,000 per person state minimum is easily exhausted in an accident involving serious injuries, leaving the at-fault driver personally exposed for the balance.",

    extraSections: [
      {
        title: "How the AIVS system works in practice",
        body: "The Automobile Insurance Verification System is a state-run database that allows Georgia law enforcement, the Department of Revenue, and the DMV to verify active insurance coverage in real time during a traffic stop or registration check. When you purchase a policy, your insurer reports it to AIVS. When a policy cancels or lapses, the insurer is required to report that as well, automatically triggering a suspension notice to the registered owner. Purchasing a new policy after a lapse does not retroactively eliminate the suspension. You must resolve any outstanding suspension, pay applicable reinstatement fees, and provide proof of the new policy before your driving privileges are restored. Because AIVS is automated and operates continuously, there is no grace period when a policy lapses in Georgia.",
      },
    ],

    umMandatory: false,
    umExplain:
      "Georgia insurers are required to offer uninsured motorist coverage, but drivers may reject it by signing a written waiver. Under Georgia law, insurers must offer UM coverage in the same amounts as your liability limits unless you specifically request lower limits or sign a written rejection. Georgia also provides an important option in how UM coverage applies when the at-fault driver has some insurance but not enough: you can choose add-on UM coverage, which pays your losses above and beyond what the at-fault driver's policy pays without any offset, or the standard option where UM is reduced by whatever the at-fault driver's insurer pays. Add-on UM coverage provides broader protection and is generally the stronger choice when available. Given Georgia's at-fault system, the high volume of traffic in the Atlanta area, and the financial consequences of being hit by a driver who carries only the minimum, UM coverage is a practical and often-recommended addition.",

    creditExplain:
      "Georgia permits insurers to use a credit-based insurance score as one factor when pricing auto policies. The check is a soft inquiry and does not appear on your credit report or affect your credit score. Georgia law requires insurers to notify you if an adverse action is taken on your policy based on your credit information, such as a rate increase or denial of coverage, giving you the opportunity to review your credit report for errors and dispute inaccurate information with the credit bureau. If your credit profile has improved since your last renewal, shopping new quotes across multiple carriers is worthwhile, because credit is weighed differently by different insurers and improvements in your score can reduce your premium even without any change in your driving record.",

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Georgia, which significantly exceeds the state minimum and provides meaningful protection if you cause a serious accident. The 25/50/25 state minimum is easily insufficient in a highway accident involving multiple vehicles or significant injuries. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage, and they may specify a maximum allowable deductible. For vehicles you own outright, weigh the current market value of the car against the annual cost of collision and comprehensive. Adding UM coverage under the add-on option rather than the standard offset option gives you the broadest protection in the situations most likely to leave you with uncompensated losses in Georgia.",

    closingSections: [
      {
        title: "How insurers determine your rate in Georgia",
        body: "Georgia insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score when calculating your premium. The Atlanta metropolitan area consistently produces higher premiums than rural Georgia because of traffic density, accident frequency, and repair costs in urban markets. Your driving record is the most controllable factor available to you: at-fault accidents and moving violations typically affect your rate for three to five years depending on the severity of the offense. Georgia uses a points system for traffic violations, and accumulating too many points within a 24-month period can result in a license suspension in addition to a rate increase. Shopping quotes from multiple carriers at renewal is one of the most reliable ways to confirm your rate reflects your current risk profile rather than automatic renewal pricing from a carrier you may have outgrown.",
      },
      {
        title: "SR-22 requirements in Georgia",
        body: "An SR-22 in Georgia is a certificate filed by your insurer with the Georgia Department of Driver Services confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI conviction, after a second or subsequent offense for driving without insurance, or after certain serious traffic violations. Georgia generally requires the SR-22 to remain on file for three years from the triggering event. During that period, if your policy lapses for any reason your insurer must notify the state immediately, which reinstates the suspension. Not all insurers offer SR-22 filing, so drivers who need one should specifically look for carriers that serve the non-standard auto insurance market in Georgia.",
      },
    ],

    ctaHeading: "Compare Georgia car insurance quotes",
    ctaButton: "Get a Free Georgia Quote",
  },
];

export function getStateBySlug(slug: string): StateInsuranceData | undefined {
  return states.find((s) => s.slug === slug);
}
