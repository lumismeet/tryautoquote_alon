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

  {
    name: "Illinois",
    slug: "illinois",
    image: "/states/illinois.jpg",
    imageAlt: "Illinois highway",
    metaTitle: "Car Insurance in Illinois | State Minimums and Free Quotes",
    metaDescription:
      "Illinois requires 25/50/20 liability coverage. Learn what the state minimums cover, why most drivers need more, and compare free personalized quotes for your Illinois zip code.",
    datePublished: "2026-06-19",

    minDisplay: "25/50/20 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage must be offered.",

    callout:
      "Illinois requires 25/50/20 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $20,000 for property damage. Illinois is an at-fault state.",

    statute: "Illinois Insurance Code 625 ILCS 5/7-601",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$20,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Illinois results in a minimum fine of $500 for a first offense and $1,000 for a second offense within five years. Your vehicle registration will be suspended, and you must pay a $100 reinstatement fee plus provide proof of current insurance to have it restored. SR-22 filing is not automatically required for a first offense conviction but may be required if you receive court supervision rather than a conviction, or for a third or subsequent offense. If you cause an accident while uninsured, your license can be suspended for a minimum of three months, and reinstatement requires additional fees and proof of coverage. Illinois operates an electronic insurance verification system that allows law enforcement and the Secretary of State to confirm coverage status at traffic stops and registration renewals.",

    faultExplain:
      "The driver determined to be at fault for causing an accident bears financial responsibility for the resulting damages. Injured parties file claims against the at-fault driver's liability coverage rather than their own policy. Illinois applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault, you can recover compensation from the other driver reduced by your share of fault. If you are 51 percent or more at fault, you cannot recover anything from the other party. This rule has a practical consequence for everyday driving: even a minor degree of shared fault reduces your compensation proportionally. If you cause an accident that exceeds your liability limits, you are personally responsible for the gap, and Illinois courts can enforce civil judgments through wage garnishment and liens on property. The $25,000 per person bodily injury minimum can be consumed quickly in a serious accident, which is why carrying limits above the state minimum is strongly recommended.",

    umMandatory: false,
    umExplain:
      "Illinois insurers are required to offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays for your medical expenses and vehicle damage when an at-fault driver has no insurance, while UIM coverage covers the gap when an at-fault driver has insurance but not enough to pay all of your losses. Illinois has a meaningful percentage of uninsured drivers on its roads, particularly in the Chicago metro area where traffic volume and accident rates are elevated. Without UM coverage, your only option after being hit by an uninsured driver is pursuing a personal lawsuit against someone who, by definition, does not carry assets backing their driving. Carrying UM and UIM at matching limits to your liability coverage is a widely recommended baseline for Illinois drivers.",

    creditExplain:
      "Illinois permits insurers to use a credit-based insurance score as one factor when calculating your premium. The check is a soft inquiry and does not affect your credit report or credit score. Drivers with stronger credit profiles tend to receive lower premiums, all else being equal. Illinois law requires insurers to notify you if your credit information results in an adverse action on your policy, which gives you the opportunity to review your credit report for inaccuracies and dispute any errors with the credit bureau. If your credit has improved since your last renewal, shopping new quotes across multiple carriers is worthwhile because carriers weight credit differently and your savings can be meaningful.",

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Illinois, which provides $100,000 per person and $300,000 per accident in bodily injury coverage along with $100,000 for property damage. The state minimum property damage limit of $20,000 does not reflect the replacement cost of many newer vehicles. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage in addition to liability. For vehicles you own outright, compare the annual cost of collision and comprehensive against ten percent of your car's current market value. Adding uninsured motorist coverage at matching limits to your liability policy provides important protection given Illinois's at-fault system and the number of uninsured drivers on state roads.",

    closingSections: [
      {
        title: "How insurers determine your rate in Illinois",
        body: "Illinois insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score to calculate your premium. The Chicago metropolitan area consistently produces some of the highest auto insurance premiums in the state due to accident frequency, vehicle theft rates, and medical costs in urban markets. Downstate Illinois and rural areas carry considerably lower base rates. Your driving record is the most controllable factor: at-fault accidents and moving violations typically affect your rate for three to five years. Because each insurer weights these factors differently, the same driver can receive quotes that vary by hundreds of dollars annually across carriers. Shopping at least three carriers at renewal ensures you are not overpaying based on your current risk profile.",
      },
      {
        title: "SR-22 requirements in Illinois",
        body: "An SR-22 in Illinois is a certificate filed by your insurer with the Secretary of State confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI conviction, after being caught driving without insurance, or after accumulating serious traffic violations. The requirement typically lasts three years from the triggering event, and your license remains suspended until the SR-22 is on file. If your policy lapses during the SR-22 period, your insurer must notify the state immediately, which reinstates your suspension. Not all insurers offer SR-22 filing, so drivers who need one should specifically search for carriers that serve the non-standard auto insurance market in Illinois.",
      },
    ],

    ctaHeading: "Compare Illinois car insurance quotes",
    ctaButton: "Get a Free Illinois Quote",
  },

  {
    name: "Ohio",
    slug: "ohio",
    image: "/states/ohio.jpg",
    imageAlt: "Ohio highway",
    metaTitle: "Car Insurance in Ohio | State Minimums and Free Quotes",
    metaDescription:
      "Ohio requires 25/50/25 liability coverage. Learn what the minimums cover, what most drivers actually need, and compare free personalized quotes for your Ohio zip code.",
    datePublished: "2026-06-19",

    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "One of the more affordable states for auto insurance nationally.",

    callout:
      "Ohio requires 25/50/25 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage. Ohio is an at-fault state.",

    statute: "Ohio Revised Code Section 4509.101",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Ohio requires all drivers to carry proof of insurance at all times and present it upon request by law enforcement. Driving without the minimum required coverage results in a license and registration suspension on a first offense. Reinstating your driving privileges requires payment of a $40 reinstatement fee for a first offense, $300 for a second offense, and $600 for a third or subsequent offense, plus a $10 service fee. A second offense within one year increases the suspension to one year. Ohio also requires SR-22 filing after certain violations, and under House Bill 29 which took effect April 2025, the SR-22 requirement for driving without insurance is now one year rather than the previous three to five years. Ohio operates a continuous monitoring system that notifies the BMV when a policy is canceled, which can trigger a suspension notice even before a traffic stop occurs.",

    faultExplain:
      "Ohio is an at-fault state, meaning the driver who caused an accident is responsible for paying the resulting damages through their liability coverage. Injured parties file claims against the at-fault driver's insurer rather than their own policy. Ohio applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other party reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you recover nothing from the other driver. This system creates real financial exposure for at-fault drivers when their coverage limits are too low. Medical bills from a serious accident can easily exceed $50,000 for a single injured person, and the $25,000 per person minimum leaves that driver personally liable for anything above that limit. Ohio courts can collect civil judgments through wage garnishment, making adequate liability coverage a financial protection as much as a legal one.",

    umMandatory: false,
    umExplain:
      "Ohio insurers are required to offer uninsured and underinsured motorist coverage, and drivers may decline it in writing. UM coverage protects you when an at-fault driver has no insurance, and UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your losses. Ohio maintains a meaningful population of uninsured drivers, and a serious accident with an uninsured motorist can result in significant out-of-pocket medical expenses and vehicle repair costs if you do not carry UM protection. Carrying UM and UIM at limits matching your liability coverage is the standard recommendation for Ohio drivers who want a balanced policy that protects them in both directions.",

    creditExplain:
      "Ohio permits insurers to use a credit-based insurance score as one factor in pricing auto policies. The inquiry is a soft pull and has no impact on your credit score or credit report. Drivers with stronger credit profiles generally receive lower premiums, and the effect of credit on pricing can be meaningful depending on the carrier. Ohio law requires insurers to notify you if adverse action is taken on your policy based on credit information, giving you the opportunity to check your credit report for errors. If your credit has improved over the past year or two, re-shopping your policy at renewal can produce savings even if your driving record has not changed.",

    recommendedExplain:
      "Ohio is generally considered one of the more affordable states for auto insurance nationally, but the state minimum of 25/50/25 still falls short of what most drivers need in a serious accident. Most advisors recommend at least 100/300/100 liability for Ohio drivers. If your vehicle is financed or leased, collision and comprehensive are required by your lender regardless. For vehicles you own outright, Ohio's lower average premiums make it more cost-effective to carry collision and comprehensive on vehicles that would cost more than a few thousand dollars to repair. Adding UM and UIM coverage at matching limits is a straightforward way to fill the most significant gap in the minimum coverage package.",

    closingSections: [
      {
        title: "How insurers determine your rate in Ohio",
        body: "Ohio insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score to calculate your premium. Ohio is generally priced below the national average for auto insurance, and rates between urban areas like Columbus, Cleveland, and Cincinnati and rural Ohio are somewhat less extreme than in higher-cost states. Your driving record is the most significant variable under your control: at-fault accidents and moving violations typically stay on your record for three to five years. Because carriers weight individual factors differently, comparing quotes across multiple insurers at renewal is the most reliable way to confirm you have the most competitive rate available for your specific profile.",
      },
      {
        title: "SR-22 requirements in Ohio",
        body: "An SR-22 in Ohio is a certificate filed by your insurer with the Bureau of Motor Vehicles confirming you carry at least the state minimum liability coverage. You may be required to file an SR-22 after a DUI conviction, after a second or subsequent offense for driving without insurance, or after certain serious traffic violations. Under House Bill 29 which took effect April 2025, the SR-22 requirement for driving without insurance is one year. For DUI and other serious violations the requirement is typically three years. Your license remains suspended until the certificate is on file, and any policy lapse during the SR-22 period requires your insurer to notify the BMV immediately, which reinstates your suspension. Not every insurer handles SR-22 filings, so drivers who need one should look specifically for carriers experienced with non-standard auto policies in Ohio.",
      },
    ],

    ctaHeading: "Compare Ohio car insurance quotes",
    ctaButton: "Get a Free Ohio Quote",
  },

  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    image: "/states/pennsylvania.jpg",
    imageAlt: "Pennsylvania highway",
    metaTitle: "Car Insurance in Pennsylvania | Requirements and Free Quotes",
    metaDescription:
      "Pennsylvania is a choice no-fault state with 15/30/5 minimums. Learn how full tort vs. limited tort affects your rights, and compare free personalized quotes for your zip code.",
    datePublished: "2026-06-19",

    minDisplay: "15/30/5 + $5k medical",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "Drivers choose full tort or limited tort at purchase.",

    callout:
      "Pennsylvania is a choice no-fault state. Drivers must carry 15/30/5 liability plus $5,000 in first-party medical benefits, and must choose between full tort and limited tort options that determine their right to sue after an accident.",

    statute: "Pennsylvania Motor Vehicle Financial Responsibility Law, 75 Pa.C.S. Section 1702",
    minCoverage: [
      { label: "$15,000", amount: "bodily injury per person" },
      { label: "$30,000", amount: "bodily injury per accident" },
      { label: "$5,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Pennsylvania's property damage minimum of $5,000 is among the lowest in the country and has not kept pace with the cost of vehicle repairs. Driving without the required minimum coverage results in a three-month license and registration suspension for a first offense and a six-month suspension for subsequent offenses. Reinstatement requires a $94 fee plus proof of current insurance. Drivers who cause accidents while uninsured can be held personally liable for all damages and may face additional civil penalties. Pennsylvania also has an uninsured vehicle fee program that collects a surcharge from vehicles that cannot demonstrate continuous insurance coverage.",

    faultExplain:
      "Pennsylvania's choice no-fault system is unique among states. When you purchase an auto policy in Pennsylvania, you must choose between two tort options that determine your rights after an accident. Under full tort, you retain the unlimited right to sue the at-fault driver for medical expenses, lost wages, and non-economic damages such as pain and suffering regardless of the severity of your injuries. Under limited tort, your premium is typically lower, but you can only sue for non-economic damages if your injuries meet a serious injury threshold defined by state law. Serious injury under Pennsylvania law includes death, serious impairment of a body function, or permanent serious disfigurement. For injuries that fall below this threshold, you are limited to recovering medical expenses and lost wages through your own first-party benefits. Many drivers choose limited tort to save money without fully understanding that a soft tissue injury from a rear-end collision, for example, might not meet the serious injury threshold, leaving them with no pain and suffering recovery even when the other driver was entirely at fault.",

    umMandatory: false,
    umExplain:
      "Pennsylvania insurers are required to offer uninsured motorist coverage, but drivers may reject it. Given Pennsylvania's choice no-fault framework, UM coverage plays an important role in ensuring you have access to compensation when the at-fault driver has no insurance and you cannot recover through your own first-party benefits alone. UM bodily injury coverage pays for your medical expenses and lost wages above what your first-party medical benefits cover, up to your UM limit. UIM coverage fills the gap when an at-fault driver's liability policy is insufficient to cover your full losses. Carrying UM and UIM at levels matching your liability limits is the standard recommendation for Pennsylvania drivers who want comprehensive protection.",

    creditExplain:
      "Pennsylvania permits insurers to use a credit-based insurance score as one factor in pricing auto policies. The check is a soft inquiry and does not affect your credit report or credit score. Pennsylvania law requires insurers to disclose the use of credit information and to notify you if it results in an adverse action on your policy. Drivers who have improved their credit since their last renewal should consider shopping new quotes at their next renewal, as the credit factor can meaningfully affect pricing and different carriers weight it differently.",

    recommendedExplain:
      "Pennsylvania's $5,000 property damage minimum is particularly low and can be exhausted in a single moderate collision involving a newer vehicle. Most advisors recommend carrying at least 100/300/100 liability along with a meaningful first-party medical benefits limit above the $5,000 minimum. Choosing full tort over limited tort is worth the premium difference for most drivers because it preserves your right to seek compensation for pain and suffering without needing to prove your injuries meet a legal threshold. If your vehicle is financed or leased, your lender will require collision and comprehensive in addition to liability. Adding UM and UIM coverage at matching limits provides the most complete protection available under a Pennsylvania policy.",

    closingSections: [
      {
        title: "Full tort vs. limited tort: which should you choose?",
        body: "The tort election is the most consequential decision you make when buying auto insurance in Pennsylvania, and it is one that most drivers make without fully understanding the trade-off. Limited tort saves you money upfront, typically between 10 and 15 percent on your premium, but it limits your legal rights after an accident. If you sustain a soft tissue injury that does not qualify as serious under Pennsylvania law, you cannot sue for pain and suffering even if the accident was entirely the other driver's fault. Full tort costs slightly more but preserves your right to sue for the full range of damages from any accident. For most drivers, the financial protection that comes with full tort outweighs the premium savings of limited tort, particularly because the situations where tort election matters most are the ones that tend to be the most costly.",
      },
      {
        title: "How insurers determine your rate in Pennsylvania",
        body: "Pennsylvania insurers use your driving record, zip code, vehicle type, age, annual mileage, tort election, and credit-based insurance score to calculate your premium. Philadelphia consistently produces some of the highest auto insurance premiums in the state and in the country, driven by accident frequency, vehicle theft rates, and litigation activity. Pittsburgh and surrounding areas are priced lower than Philadelphia but higher than rural Pennsylvania. Your tort election affects your premium directly: limited tort policies are priced lower because they limit the insurer's potential liability on pain and suffering claims. At-fault accidents and moving violations typically affect your rate for three to five years. Shopping multiple carriers at renewal is especially valuable in Pennsylvania because the price spread between carriers can be substantial, particularly for Philadelphia-area drivers.",
      },
    ],

    ctaHeading: "Compare Pennsylvania car insurance quotes",
    ctaButton: "Get a Free Pennsylvania Quote",
  },

  {
    name: "Arizona",
    slug: "arizona",
    image: "/states/arizona.jpg",
    imageAlt: "Arizona desert highway",
    metaTitle: "Car Insurance in Arizona | State Minimums and Free Quotes",
    metaDescription:
      "Arizona requires 25/50/15 liability coverage. Learn what the state minimums cover, what most drivers actually need, and compare free personalized quotes for your Arizona zip code.",
    datePublished: "2026-06-19",

    minDisplay: "25/50/15 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Pure comparative fault state with no recovery bar.",

    callout:
      "Arizona requires 25/50/15 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $15,000 for property damage. Arizona is an at-fault state that applies pure comparative fault rules.",

    statute: "Arizona Revised Statutes Section 28-4135",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Arizona results in a license suspension for three months on a first offense. To reinstate your license, you must pay a $50 fee, provide proof of current insurance, and in some cases file an SR-22 certificate for three years. A second offense within 36 months results in a six-month suspension and a $100 reinstatement fee. A third or subsequent offense within 36 months leads to a one-year suspension. Arizona also requires a motor vehicle record check when reinstating a suspended license, and the suspension may be extended if additional violations appear on your record. The property damage minimum of $15,000 has not been updated in decades and is easily exceeded in an accident involving a newer vehicle.",

    faultExplain:
      "Arizona is an at-fault state that applies a pure comparative fault rule, which differs from the modified comparative fault rules used in states like Texas and Georgia. Under pure comparative fault, you can recover compensation from another driver even if you were predominantly at fault for the accident, though your recovery is reduced proportionally by your percentage of fault. If you were 80 percent at fault for an accident that caused you $50,000 in damages, you could still theoretically recover $10,000 from the other driver. This rule also means that if you cause an accident and the other driver was partially at fault, they can still recover the portion of their damages that corresponds to your share of fault, which your liability coverage would need to pay. The $15,000 property damage minimum is particularly low relative to the cost of many vehicles on Arizona roads, and the bodily injury minimum of $25,000 per person can be quickly exhausted in a serious injury accident. Carrying limits above the state minimum meaningfully reduces your personal financial exposure.",

    umMandatory: false,
    umExplain:
      "Arizona insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Arizona has historically had a significant percentage of uninsured drivers on its roads, which makes UM coverage a practical protection for most policyholders. UM coverage pays for your medical expenses and vehicle damage when an at-fault driver carries no insurance. UIM coverage pays the gap between an at-fault driver's policy limit and your actual losses when that driver is underinsured. Arizona also allows coverage for hit-and-run accidents under the UM provision. Given the at-fault system and the risk of encountering uninsured drivers, carrying UM and UIM at matching limits to your liability coverage provides the most complete protection.",

    creditExplain:
      "Arizona permits insurers to use a credit-based insurance score as one factor in pricing auto policies. The check is a soft inquiry and does not affect your credit score or report. Arizona law requires insurers to notify you if credit information contributes to an adverse action on your policy, such as a rate increase or a refusal to renew. Drivers who have seen improvement in their credit profile since their last renewal should re-shop their coverage, as a better credit-based insurance score can reduce your premium across multiple carriers even without any change in your driving record.",

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Arizona, which is significantly above the state minimum and provides meaningful coverage in a serious accident. The $15,000 property damage minimum is especially insufficient given the cost of newer vehicles and trucks common on Arizona roads. If your vehicle is financed or leased, your lender will require collision and comprehensive in addition to liability, often with a maximum allowable deductible written into the loan terms. For vehicles you own outright, consider the current market value and the annual cost of collision and comprehensive. Arizona's relatively dry climate reduces weather-related claims compared to some states, but the state's high vehicle theft rates make comprehensive coverage worth carrying on higher-value vehicles.",

    closingSections: [
      {
        title: "How insurers determine your rate in Arizona",
        body: "Arizona insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score when calculating your premium. Phoenix and Tucson metro areas produce higher premiums than rural Arizona because of higher accident frequency, vehicle theft rates, and repair costs in urban markets. Arizona's vehicle theft rate is above the national average, which makes comprehensive coverage more relevant here than in some other states. Your driving record is the most controllable factor: at-fault accidents and moving violations typically affect your rate for three to five years. Because insurers weight these factors differently, comparing quotes across multiple carriers at renewal regularly reveals meaningful price differences for the same coverage.",
      },
      {
        title: "SR-22 requirements in Arizona",
        body: "An SR-22 in Arizona is a certificate your insurer files with the Motor Vehicle Division confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI conviction, after driving without insurance, or after certain serious traffic violations. The SR-22 requirement typically lasts three years from the triggering event. During that period, if your policy lapses for any reason, your insurer must notify the MVD immediately, which reinstates your license suspension. Arizona also uses an SR-22 requirement after certain civil judgments, such as when an uninsured at-fault driver is ordered by a court to demonstrate future financial responsibility. Not all insurers handle SR-22 filings, so drivers who need one should look for carriers that specifically serve higher-risk drivers in Arizona.",
      },
    ],

    ctaHeading: "Compare Arizona car insurance quotes",
    ctaButton: "Get a Free Arizona Quote",
  },

  {
    name: "North Carolina",
    slug: "north-carolina",
    image: "/states/north-carolina.jpg",
    imageAlt: "North Carolina highway",
    metaTitle: "Car Insurance in North Carolina | Requirements and Free Quotes",
    metaDescription:
      "North Carolina requires 30/60/25 liability plus mandatory uninsured motorist coverage. Learn the requirements, how pricing works, and compare free quotes for your NC zip code.",
    datePublished: "2026-06-19",

    minDisplay: "30/60/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",

    callout:
      "North Carolina requires 30/60/25 liability coverage and mandatory uninsured motorist coverage at matching limits. North Carolina is an at-fault state and applies a contributory negligence rule that is stricter than most other states.",

    statute: "North Carolina General Statutes Section 20-309",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "North Carolina enforces insurance compliance through the Division of Motor Vehicles, which receives electronic notification when a policy is canceled. A lapse of more than 10 days triggers an automatic $50 fee for a first offense, $100 for a second, and $150 for a third and subsequent offense. More significantly, a lapse of more than 30 days can result in license plate revocation. To reinstate your registration, you must pay all applicable fees and provide proof of a new policy. North Carolina also uses a Safe Driver Incentive Plan that assigns points for at-fault accidents and moving violations, which directly affects the surcharge applied to your premium by all insurers operating in the state.",

    faultExplain:
      "North Carolina is an at-fault state but applies a contributory negligence rule rather than the comparative fault rules used in most other states. Under contributory negligence, if you are found even one percent at fault for an accident, you are completely barred from recovering any compensation from the other driver. This is one of the strictest fault rules in the country and is used in only a handful of states. In practical terms, this means that if you are involved in an accident and a court finds you had even a minor contribution to the collision, you cannot recover medical expenses, vehicle repair costs, or other damages from the other driver regardless of how much more at fault they were. The contributory negligence rule makes accurate accident documentation and a thorough understanding of what happened especially important in North Carolina. Your own medical payments coverage and uninsured motorist protection become more critical because the at-fault system may not deliver compensation even in accidents where you believe the other driver was primarily responsible.",

    umMandatory: true,
    umExplain:
      "Unlike most states where UM coverage must only be offered and can be rejected, North Carolina requires all auto policies to include uninsured and underinsured motorist coverage at limits matching your liability coverage. This mandatory inclusion reflects both the contributory negligence environment and the recognition that uninsured drivers create financial harm that policyholders may not be able to recover through the tort system. UM coverage in North Carolina pays for your injuries and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your losses. Because North Carolina's contributory negligence rule can bar your recovery even in accidents you did not primarily cause, having robust UM and UIM coverage is especially important.",

    creditExplain:
      "North Carolina permits insurers to use a credit-based insurance score as one factor when pricing auto policies. The check is a soft inquiry and does not affect your credit score or report. North Carolina law requires insurers to notify you if adverse action is taken on your policy based on credit information. One distinctive feature of North Carolina's insurance market is the use of the Safe Driver Incentive Plan, which means surcharges for accidents and violations are applied consistently across all carriers under a state-administered schedule. This limits how much pricing variability exists between carriers on the surcharge side, making credit and other rating factors relatively more influential in distinguishing quotes from different carriers.",

    recommendedExplain:
      "Because North Carolina's mandatory UM coverage must match your liability limits, increasing your liability coverage automatically increases your UM protection as well. Most advisors recommend carrying at least 100/300/100 liability in North Carolina. The mandatory minimum of 30/60/25 is above the floor in many states but still falls short of what a serious accident can cost. If your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, compare the annual cost of those coverages against your vehicle's current market value. Given the contributory negligence rule, adding medical payments coverage provides an important safety net if you are injured in an accident but cannot recover from the other driver due to a finding of even minor shared fault.",

    closingSections: [
      {
        title: "How insurers determine your rate in North Carolina",
        body: "North Carolina uses the Safe Driver Incentive Plan, which is a state-administered system that assigns surcharge points for at-fault accidents and moving violations and requires all licensed insurers to apply those surcharges in a consistent manner. This means the surcharge you pay for an at-fault accident is less variable across carriers in North Carolina than in states with purely market-driven pricing. Base rates, discounts, and the weighting of other factors like credit and vehicle type still vary across carriers, which is why comparison shopping remains valuable. Charlotte, Raleigh, Durham, and other urban areas in the Piedmont Triad carry higher base rates than rural parts of the state. Your driving record, under North Carolina's SDIP, is the most consequential factor in determining your long-term premium trajectory.",
      },
      {
        title: "Proof of financial responsibility in North Carolina",
        body: "North Carolina does not use the SR-22 certificate that most other states require after serious violations. Instead, the state uses a form called the DL-123, which your insurer files with the DMV to confirm you carry at least the state minimum liability coverage. You may be required to maintain a DL-123 on file after a DWI conviction, after driving without insurance, or after certain other serious traffic violations. The DL-123 requirement typically lasts three years from the triggering event. During that period, any lapse in coverage requires your insurer to notify the DMV, which reinstates your suspension. Not all insurers handle DL-123 filings, so drivers who need one should specifically look for carriers that serve higher-risk drivers in North Carolina.",
      },
    ],

    ctaHeading: "Compare North Carolina car insurance quotes",
    ctaButton: "Get a Free North Carolina Quote",
  },

  {
    name: "Michigan",
    slug: "michigan",
    image: "/states/michigan.jpg",
    imageAlt: "Michigan highway",
    metaTitle: "Car Insurance in Michigan | PIP Levels, Requirements and Free Quotes",
    metaDescription:
      "Michigan is a no-fault state that bans credit-based pricing and lets drivers choose their PIP level. Learn the requirements and compare free personalized quotes.",
    datePublished: "2026-06-19",

    minDisplay: "50/100/10 + choice PIP",
    faultSystem: "no-fault",
    creditBanned: true,
    indexNote: "Drivers choose their own PIP benefit level since 2020.",

    callout:
      "Michigan requires 50/100/10 liability coverage plus Personal Injury Protection at a level you choose. Michigan is a no-fault state and prohibits insurers from using credit scores to price auto policies.",

    statute: "Michigan Compiled Laws Section 500.3101",
    minCoverage: [
      { label: "$50,000", amount: "bodily injury per person" },
      { label: "$100,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
      { label: "Choice", amount: "PIP level: unlimited, $500k, $250k (general options), or $50k (Medicaid enrollees only)" },
    ],
    penaltyNote:
      "Driving without the required coverage in Michigan results in a misdemeanor charge, fines up to $500, up to one year in jail, and license and registration suspension. Michigan also imposes a civil infraction fine for operating an uninsured vehicle. Reinstatement requires proof of insurance and payment of applicable fees. Michigan's no-fault law previously required unlimited PIP, making it one of the most expensive states for auto insurance in the country. The 2020 reform allowing drivers to choose their PIP level was specifically designed to bring those costs down, and average premiums have declined in some markets since the change took effect.",

    faultExplain:
      "Michigan is a no-fault state, meaning your own Personal Injury Protection coverage pays for your medical expenses and a portion of lost wages after an accident regardless of who caused it. The 2020 reform restructured how PIP benefits work by allowing drivers to choose from several coverage levels rather than being required to carry unlimited lifetime medical benefits. Drivers may choose unlimited PIP, $500,000, or $250,000 in coverage. A $50,000 option also exists but is only available to drivers enrolled in Medicaid. Drivers with qualifying health coverage may also elect a coordinated benefit that reduces their PIP level in exchange for their health plan covering accident-related injuries first. The lower the PIP level you choose, the lower your premium, but you bear greater out-of-pocket risk in a catastrophic accident. To step outside the no-fault system and bring a lawsuit against an at-fault driver for pain and suffering, your injuries must meet Michigan's serious impairment of body function threshold or result in death or permanent serious disfigurement.",

    umMandatory: false,
    umExplain:
      "Michigan insurers must offer uninsured motorist coverage, and drivers may decline it. Because Michigan's no-fault system handles medical expenses through your own PIP coverage, UM coverage in Michigan primarily protects you in situations where you exceed your PIP limit or need to recover non-economic damages from an uninsured driver who meets the serious injury threshold. Given that Michigan's minimum PIP options now include levels as low as $50,000, carrying UM coverage provides an important backstop if your injuries exceed what your PIP benefit will pay. Underinsured motorist coverage fills a similar gap when the at-fault driver's liability policy is not enough to cover your losses above your PIP limit.",

    creditExplain:
      "Michigan is one of only a few states that prohibits insurers from using credit-based insurance scores to price auto policies. Under Michigan law, your driving record, years of licensed experience, and other driving-related factors determine your rate, but your credit history cannot be used as a pricing input. This prohibition was part of broader no-fault reform efforts in the state and means that Michigan drivers with poor credit due to medical bills, job loss, or other non-driving circumstances are not penalized on their auto insurance. If you have moved to Michigan from another state where credit affected your rate, your premium may differ from what you paid previously even with an identical driving record.",

    recommendedExplain:
      "Michigan's 2020 reform introduced real trade-offs in PIP selection. Choosing a lower PIP level saves money but increases your personal financial exposure in a serious accident. For most drivers without comprehensive health insurance, carrying the $250,000 or $500,000 PIP level provides a meaningful safety net without the full cost of unlimited coverage. The $10,000 property damage minimum is extremely low and covers only damage to other people's property, not your own vehicle. Carrying collision and comprehensive coverage protects your own car. Most advisors recommend at least 100/300 liability above the 50/100 minimum, uninsured motorist coverage, and collision and comprehensive if your vehicle has meaningful value.",

    closingSections: [
      {
        title: "How insurers determine your rate in Michigan",
        body: "Michigan prohibits credit-based pricing, so insurers rely on your driving record, years of licensed experience, annual mileage, vehicle type, zip code, and PIP level selection to calculate your premium. Detroit and surrounding areas in Wayne, Oakland, and Macomb counties have historically produced some of the highest auto insurance premiums in the country, driven by accident frequency, theft rates, and litigation activity. The 2020 no-fault reform was intended to bring those costs down by allowing PIP choice and introducing other market changes. Rural Michigan is priced considerably lower. Your PIP level election directly affects your premium: choosing a lower PIP tier reduces your cost but shifts more risk to you personally. Comparing quotes across multiple carriers remains important because base rates, discounts, and surcharge handling still vary across insurers even within Michigan's more regulated pricing environment.",
      },
      {
        title: "Michigan's catastrophic claims fund",
        body: "Michigan maintains the Michigan Catastrophic Claims Association, which is a nonprofit that pays for accident-related medical claims above a certain threshold for policies that include unlimited PIP coverage. Drivers who elect unlimited PIP pay a per-vehicle assessment into the MCCA each year, which funds this backstop. The MCCA was originally designed to make unlimited lifetime medical benefits financially sustainable for insurers by reinsuring their most expensive claims. Since the 2020 reform, only drivers who elect unlimited PIP still pay the MCCA assessment. If you choose a lower PIP level, you do not pay into the fund but also do not benefit from its unlimited backstop in a catastrophic accident.",
      },
    ],

    ctaHeading: "Compare Michigan car insurance quotes",
    ctaButton: "Get a Free Michigan Quote",
  },

  {
    name: "New Jersey",
    slug: "new-jersey",
    image: "/states/new-jersey.jpg",
    imageAlt: "New Jersey highway",
    metaTitle: "Car Insurance in New Jersey | Requirements and Free Quotes",
    metaDescription:
      "New Jersey is a choice no-fault state where drivers pick their tort option and PIP level. Learn how the basic and standard policies differ and compare free quotes.",
    datePublished: "2026-06-19",

    minDisplay: "15/30/5 + $15k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "Drivers choose between basic and standard policy types.",

    callout:
      "New Jersey is a choice no-fault state. The standard policy requires 15/30/5 liability plus $15,000 PIP. Drivers must also choose between the lawsuit threshold and verbal threshold tort options, which determine when they can sue after an accident.",

    statute: "New Jersey Statutes Annotated 39:6A-3",
    minCoverage: [
      { label: "$15,000", amount: "bodily injury per person" },
      { label: "$30,000", amount: "bodily injury per accident" },
      { label: "$5,000", amount: "property damage per accident" },
      { label: "$15,000", amount: "Personal Injury Protection (PIP)" },
    ],
    penaltyNote:
      "New Jersey requires continuous coverage for any registered vehicle. Driving without insurance results in fines of $300 to $1,000 for a first offense, a one-year license suspension, and a community service requirement. A second offense raises fines to $5,000, a two-year suspension, and a possible 14-day jail sentence. New Jersey also imposes a surcharge through the Motor Vehicle Surcharge system for insurance violations that persists for several years and adds cost to any future policy. The $5,000 property damage minimum is among the lowest in the country and has not kept pace with vehicle repair costs.",

    faultExplain:
      "New Jersey's choice no-fault system gives drivers two tort options at the time of purchase. Under the lawsuit threshold, also called the verbal threshold, you can only sue an at-fault driver for non-economic damages like pain and suffering if your injuries meet a defined list of serious injury categories such as death, dismemberment, significant disfigurement, a displaced fracture, loss of a fetus, or permanent injury within a reasonable degree of medical probability. In exchange for accepting this restriction, you pay a lower premium. Under the unlimited right to sue option, you retain the full right to bring a lawsuit against an at-fault driver for any injury regardless of severity. This option costs more but preserves more legal flexibility. Regardless of which option you choose, your own PIP coverage handles your immediate medical expenses and lost wages after any accident, and the tort option only becomes relevant if you decide to pursue a claim against the at-fault driver for damages beyond what PIP covers.",

    umMandatory: false,
    umExplain:
      "New Jersey insurers must offer uninsured and underinsured motorist coverage, and drivers can reject it in writing. Given New Jersey's dense traffic, high accident frequency, and the financial stakes involved in urban accidents near New York City and Philadelphia, UM coverage provides important protection when an at-fault driver has no insurance. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your losses. Because New Jersey's standard policy minimums are relatively low, a driver who causes a serious accident with only the state minimum 15/30 liability can leave you significantly undercompensated even with the tort system available. Carrying UM and UIM at meaningful limits provides a more complete safety net.",

    creditExplain:
      "New Jersey permits insurers to use credit-based insurance scores as one factor in pricing auto policies. The check is a soft inquiry and has no effect on your credit report or score. New Jersey law requires insurers to notify you if credit information contributes to an adverse action on your policy. The state also maintains the New Jersey Personal Automobile Insurance Plan for drivers who are unable to obtain coverage in the standard market, which provides coverage as a last resort. If your credit has improved since your last renewal, shopping across multiple carriers at your next renewal is worthwhile because carriers weight credit differently.",

    recommendedExplain:
      "New Jersey's minimum limits are low relative to the cost of serious accidents in one of the most densely populated states in the country. Most advisors recommend carrying at least 100/300/100 liability on a standard policy and selecting PIP coverage above the $15,000 minimum if your health insurance does not comprehensively cover accident-related injuries. The unlimited right to sue option is worth the premium difference for most drivers because it preserves your legal options without requiring your injuries to meet a defined threshold. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Adding UM and UIM at matching limits to your liability coverage provides the most complete protection available.",

    closingSections: [
      {
        title: "Basic policy vs. standard policy in New Jersey",
        body: "New Jersey offers two distinct policy structures. The basic policy is designed for cost-sensitive drivers and provides $15,000 in PIP coverage with no bodily injury liability coverage by default, though a $10,000 BI option can be added. The basic policy also includes the lawsuit threshold by default, limiting your ability to sue. The standard policy provides the full range of liability and coverage options and allows you to choose between the two tort options. Most drivers who own assets or carry meaningful financial responsibility are better served by a standard policy, because the basic policy's omission of bodily injury liability leaves you personally exposed if you cause an accident that injures someone. The premium savings of a basic policy are generally not worth the coverage gap for drivers with anything to protect.",
      },
      {
        title: "How insurers determine your rate in New Jersey",
        body: "New Jersey insurers use your driving record, zip code, vehicle type, age, annual mileage, tort option selection, PIP level, and credit-based insurance score to calculate your premium. New Jersey is one of the more expensive states for auto insurance nationally, driven by high population density, frequent accidents, vehicle theft rates in certain markets, and historically elevated PIP fraud activity in the Newark and Jersey City areas. Your tort selection and PIP level both directly affect your premium. At-fault accidents and moving violations typically affect your rate for three to five years. New Jersey's Department of Banking and Insurance regulates insurer rate filings, which limits how aggressively carriers can deviate from approved rating plans but still leaves meaningful variation between carriers on discounts and base rates. Comparison shopping at renewal remains the most reliable way to find the most competitive rate for your profile.",
      },
    ],

    ctaHeading: "Compare New Jersey car insurance quotes",
    ctaButton: "Get a Free New Jersey Quote",
  },

  {
    name: "Colorado",
    slug: "colorado",
    image: "/states/colorado.jpg",
    imageAlt: "Colorado mountain highway",
    metaTitle: "Car Insurance in Colorado | State Minimums and Free Quotes",
    metaDescription:
      "Colorado requires 25/50/15 liability plus $5,000 in mandatory medical payments coverage. Learn the requirements and compare free personalized quotes for your Colorado zip code.",
    datePublished: "2026-06-19",

    minDisplay: "25/50/15 + $5k MedPay",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Medical payments coverage is mandatory in Colorado.",

    callout:
      "Colorado requires 25/50/15 liability coverage plus $5,000 in medical payments coverage. Colorado is an at-fault state. MedPay is included in all Colorado policies by default but can be waived in writing. It pays your own medical expenses regardless of fault.",

    statute: "Colorado Revised Statutes Section 10-4-619",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
      { label: "$5,000", amount: "medical payments (default, waivable in writing)" },
    ],
    penaltyNote:
      "Driving without the required minimum coverage in Colorado results in a fine of $500 for a first offense and $1,000 for a second offense within five years. Your license and registration will be suspended, and you must pay a $40 reinstatement fee and provide proof of insurance before driving privileges are restored. Colorado also requires SR-22 filing after certain violations, including driving uninsured and DUI convictions. The state uses an electronic verification system to monitor active coverage status, and insurers are required to report policy cancellations to the Division of Motor Vehicles.",

    faultExplain:
      "Colorado is an at-fault state, meaning the driver who caused an accident is financially responsible for the resulting damages. Injured parties file claims against the at-fault driver's liability coverage rather than their own policy. Colorado applies a modified comparative fault rule with a 50 percent threshold. If you are found 49 percent or less at fault, you can recover compensation from the other driver reduced proportionally by your share of fault. If you are 50 percent or more at fault, you cannot recover from the other party. Colorado's at-fault system combined with mandatory MedPay creates a hybrid structure where your immediate medical bills are covered by your own MedPay regardless of fault, while liability claims and pain and suffering damages are resolved through the at-fault framework. If your medical expenses exceed your $5,000 MedPay limit and you were not at fault, you can pursue the balance through a liability claim against the other driver.",

    umMandatory: false,
    umExplain:
      "Colorado insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Colorado has a meaningful population of uninsured drivers, and the consequences of being hit by one can be financially significant if your own MedPay limit is exhausted and you have no UM coverage to fall back on. UM coverage in Colorado pays for your injuries and vehicle damage above what MedPay covers when an at-fault driver has no insurance. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your total losses. Carrying UM and UIM at matching limits to your liability coverage is the standard recommendation for most Colorado drivers.",

    creditExplain:
      "Colorado permits insurers to use credit-based insurance scores as one factor in pricing auto policies. The check is a soft inquiry and has no effect on your credit report or credit score. Colorado law requires insurers to notify you if credit information results in an adverse action on your policy. If your credit has improved since your last renewal, shopping new quotes across multiple carriers is worthwhile because credit is weighed differently by each insurer and improvements in your score can reduce your premium even if your driving record has not changed.",

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Colorado and increasing your MedPay above the mandatory $5,000 minimum to $25,000 or more if your health insurance does not comprehensively cover accident-related injuries. Colorado's $15,000 property damage minimum is easily exceeded in an accident involving a newer vehicle. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Colorado's mountain roads and winter driving conditions make comprehensive coverage especially relevant for weather-related damage. Adding UM and UIM coverage at meaningful limits provides protection in the situations where the at-fault system is most likely to leave you with uncompensated losses.",

    closingSections: [
      {
        title: "How insurers determine your rate in Colorado",
        body: "Colorado insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score to calculate your premium. Denver and the Front Range metro area produce higher premiums than rural Colorado because of accident frequency, vehicle theft rates, and repair costs in urban markets. Hail is an unusually significant factor in Colorado comprehensive claims, with the Denver metro area experiencing some of the highest hail claim frequency in the country. If you park your car outside and live along the Front Range, your comprehensive premium reflects this elevated risk. At-fault accidents and moving violations typically affect your rate for three to five years. Comparing quotes across multiple carriers at renewal is the most reliable way to ensure your premium reflects your current profile.",
      },
      {
        title: "SR-22 requirements in Colorado",
        body: "An SR-22 in Colorado is a certificate filed by your insurer with the Division of Motor Vehicles confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI conviction, after driving without insurance, or after certain other serious violations. The SR-22 requirement typically lasts three years from the triggering event. During that period, if your policy lapses your insurer must notify the DMV immediately, which reinstates your suspension. Not all insurers file SR-22 certificates, so drivers who need one should specifically look for carriers that serve the non-standard market in Colorado.",
      },
    ],

    ctaHeading: "Compare Colorado car insurance quotes",
    ctaButton: "Get a Free Colorado Quote",
  },

  {
    name: "Nevada",
    slug: "nevada",
    image: "/states/nevada.jpg",
    imageAlt: "Nevada desert highway",
    metaTitle: "Car Insurance in Nevada | State Minimums and Free Quotes",
    metaDescription:
      "Nevada requires 25/50/20 liability coverage. Learn what the state minimums cover, how Nevada enforces compliance, and compare free personalized quotes for your zip code.",
    datePublished: "2026-06-19",

    minDisplay: "25/50/20 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Real-time electronic verification system in use.",

    callout:
      "Nevada requires 25/50/20 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $20,000 for property damage. Nevada is an at-fault state and enforces insurance compliance through a real-time electronic verification system.",

    statute: "Nevada Revised Statutes Section 485.185",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$20,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Nevada enforces insurance compliance through an electronic verification system that allows law enforcement to confirm active coverage during a traffic stop without requiring you to produce a paper card. Penalties for driving without insurance in Nevada are based on how long your coverage has lapsed. A lapse of 30 days or less results in a license suspension with no fine. A lapse of 31 to 90 days carries a $250 fine. A lapse of 91 to 180 days carries a $500 fine, and a lapse beyond 180 days carries a $1,000 fine. In addition to any fines, you must pay a reinstatement fee of up to $750 and provide proof of current insurance before your license is restored. A lapse beyond 91 days also triggers an SR-22 requirement that must remain on file for three years. The Las Vegas and Reno metro areas have above-average accident rates that contribute to Nevada's relatively high average insurance premiums.",

    faultExplain:
      "Nevada is an at-fault state, meaning the driver responsible for causing an accident is liable for the resulting damages. Injured parties file claims against the at-fault driver's liability coverage rather than their own policy. Nevada applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault, you can recover compensation from the other driver reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover from the other party. Nevada's high-traffic corridors, particularly around Las Vegas, result in a meaningful number of accidents involving visitors who are unfamiliar with local roads. If you cause an accident that exceeds your liability limits, you are personally responsible for the excess, and Nevada courts can enforce civil judgments through wage garnishment and liens on property.",

    umMandatory: false,
    umExplain:
      "Nevada insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Nevada has a notable percentage of uninsured drivers, particularly in the Las Vegas area, which has a transient population and a high volume of out-of-state visitors who may not carry adequate coverage. UM coverage pays for your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your losses. Carrying both at meaningful limits provides important protection in a state where encountering an uninsured or underinsured driver is a real possibility.",

    creditExplain:
      "Nevada permits insurers to use credit-based insurance scores as one factor when pricing auto policies. The check is a soft inquiry and has no effect on your credit report or score. Nevada law requires insurers to disclose the use of credit information and to notify you if it results in an adverse action on your policy. If your credit has improved since your last renewal, shopping new quotes at renewal is worthwhile because carriers weight credit differently and a better credit profile can reduce your premium meaningfully even without any change in your driving record.",

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Nevada. The state minimum of 25/50/20 is easily exhausted in a serious accident involving a newer vehicle or significant injuries. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Nevada's desert climate and high temperatures can accelerate mechanical wear, but comprehensive claims in Nevada are more often related to vehicle theft than to weather. The Las Vegas metro area has an elevated vehicle theft rate, which makes comprehensive coverage more relevant there than in other parts of the state. Adding UM and UIM coverage at matching limits provides the most complete protection for Nevada drivers.",

    closingSections: [
      {
        title: "How insurers determine your rate in Nevada",
        body: "Nevada insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score to calculate your premium. Las Vegas and surrounding Clark County produce some of the highest premiums in the state due to accident frequency, vehicle theft rates, and the volume of high-risk driving behavior in and around the Strip and other entertainment corridors. Reno and Sparks produce moderate premiums, while rural Nevada is considerably cheaper. At-fault accidents and moving violations typically affect your rate for three to five years. Nevada's tourism economy means local drivers share roads with a disproportionate number of unfamiliar and sometimes impaired drivers, which contributes to the elevated base rates in the Las Vegas market. Comparison shopping at renewal remains the most effective way to manage your premium.",
      },
      {
        title: "SR-22 requirements in Nevada",
        body: "An SR-22 in Nevada is a certificate filed by your insurer with the Department of Motor Vehicles confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI or DWI conviction, after being caught driving without insurance, or after certain serious traffic violations. The requirement typically lasts three years from the triggering event. During the SR-22 period, any lapse in your coverage requires your insurer to notify the DMV immediately, which reinstates your license suspension. Nevada also uses an SR-22 requirement after civil judgments for uninsured accidents. Not all insurers handle SR-22 filings, so drivers who need one should specifically search for carriers that serve the non-standard auto insurance market in Nevada.",
      },
    ],

    ctaHeading: "Compare Nevada car insurance quotes",
    ctaButton: "Get a Free Nevada Quote",
  },

  {
    name: "Washington",
    slug: "washington",
    image: "/states/washington.jpg",
    imageAlt: "Washington state highway",
    metaTitle: "Car Insurance in Washington State | Requirements and Free Quotes",
    metaDescription:
      "Washington requires 25/50/10 liability and mandatory uninsured motorist coverage. Learn the state minimums, how the at-fault system works, and compare free quotes.",
    datePublished: "2026-06-19",

    minDisplay: "25/50/10 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",

    callout:
      "Washington requires 25/50/10 liability coverage and mandatory uninsured motorist coverage at matching limits. Washington is an at-fault state.",

    statute: "Revised Code of Washington 46.29.090",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Washington results in a fine of up to $550 and can result in license suspension. You must carry proof of insurance at all times and present it upon request by law enforcement or after an accident. Washington requires SR-22 filing after certain violations including DUI convictions, driving without insurance, and reckless driving. The $10,000 property damage minimum is particularly low relative to the cost of vehicle repairs, especially in the Seattle market where newer and more expensive vehicles are common. Washington also permits electronic proof of insurance displayed on a smartphone, which is accepted in lieu of a paper card.",

    faultExplain:
      "Washington is an at-fault state, meaning the driver responsible for causing an accident is liable for the resulting damages. Injured parties file claims against the at-fault driver's liability insurance rather than their own policy. Washington applies a pure comparative fault rule, which means you can recover compensation from another driver even if you were partially or even predominantly at fault, though your recovery is reduced proportionally by your share of fault. If you were 60 percent at fault for an accident that caused you $80,000 in damages, you could still recover $32,000 from the other driver. This rule also means that if you cause an accident and the other driver contributed partially to it, they can still recover the portion of their damages attributable to your fault from your liability coverage. The $10,000 property damage minimum is easily exceeded in an accident involving a newer vehicle, making higher property damage limits a practical necessity for most Washington drivers.",

    umMandatory: true,
    umExplain:
      "Washington requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage unless the driver specifically rejects it in writing. This mandatory offer at matching limits means that if you carry 100/300 liability, your insurer must include 100/300 UM coverage by default. Washington also requires underinsured motorist coverage to be offered, and the two coverages together provide meaningful protection in a state where some drivers carry only the minimum. UM coverage pays for your medical expenses and vehicle damage when an at-fault driver has no insurance. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your actual losses. Washington's relatively high cost of medical care in the Seattle metro area makes both coverages especially valuable.",

    creditExplain:
      "Washington permits insurers to use credit-based insurance scores as one factor in pricing auto policies. The check is a soft inquiry and does not affect your credit report or score. Washington has debated restricting credit-based pricing in recent legislative sessions, so the rules in this area may change. As of the current policy year, credit remains a permitted rating factor for most carriers in Washington. If your credit has improved since your last renewal, shopping new quotes across multiple carriers is worthwhile because the pricing impact of a better credit profile can be meaningful.",

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Washington. The $10,000 property damage minimum is especially insufficient given the cost of vehicles in the Seattle market. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Washington's climate, particularly west of the Cascades, brings significant rainfall and road conditions that increase accident risk, and comprehensive coverage is relevant for weather-related damage and the vehicle theft rates that are above average in the Seattle metro area. Because Washington's mandatory UM must match your liability limits by default, raising your liability coverage automatically improves your UM protection as well.",

    closingSections: [
      {
        title: "How insurers determine your rate in Washington",
        body: "Washington insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score to calculate your premium. The Seattle metro area, including King, Pierce, and Snohomish counties, produces higher premiums than eastern Washington and rural areas of the state due to accident frequency, vehicle theft rates, and the cost of medical care and vehicle repairs in urban markets. Washington's tech-industry economy has brought a high concentration of expensive vehicles to the Seattle area, which affects collision and comprehensive pricing. At-fault accidents and moving violations typically affect your rate for three to five years. Comparison shopping across multiple carriers at renewal is the most reliable way to manage your premium over time.",
      },
      {
        title: "SR-22 requirements in Washington",
        body: "An SR-22 in Washington is a certificate filed by your insurer with the Department of Licensing confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI conviction, after driving without insurance, after a hit-and-run, or after certain other serious violations. The SR-22 requirement typically lasts three years from the triggering event, and your license remains suspended until the certificate is on file. Any lapse in coverage during the SR-22 period requires your insurer to notify the DOL, which reinstates your suspension. Not all insurers handle SR-22 filings, so drivers who need one should look specifically for carriers that serve higher-risk drivers in Washington state.",
      },
    ],

    ctaHeading: "Compare Washington car insurance quotes",
    ctaButton: "Get a Free Washington Quote",
  },
];

export function getStateBySlug(slug: string): StateInsuranceData | undefined {
  return states.find((s) => s.slug === slug);
}
