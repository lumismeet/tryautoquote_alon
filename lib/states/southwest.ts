import type { StateInsuranceData } from "./_types";
import { creditExplainPermitted, sr22Section, rateSectionAtFault, ctaFields, stateImage, metaTitleAtFault, metaDescriptionAtFault } from "./_defaults";

export const southwest: StateInsuranceData[] = [
  // ── Texas ─────────────────────────────────────────────────────────────────
  {
    name: "Texas",
    slug: "texas",
    ...stateImage("texas", "Texas highway"),
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

    creditExplain: creditExplainPermitted("Texas"),

    recommendedExplain:
      "Most financial advisors and insurance professionals recommend carrying at least 100/300/100 liability, which is well above the Texas minimum. At this level you have $100,000 per person and $300,000 per accident in bodily injury coverage, plus $100,000 for property damage you cause. These limits provide meaningful protection without a dramatic increase in premium compared to the state minimum. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage in addition to liability, and they may also specify a maximum deductible. If you own your vehicle outright, consider its current market value before adding collision and comprehensive. A practical rule is that if the annual cost of those coverages exceeds ten percent of the vehicle's value, they may not be cost-effective. For most Texas drivers, a solid baseline policy includes 100/300/100 liability, uninsured and underinsured motorist coverage at matching limits, collision with a $500 deductible, comprehensive with a $500 deductible, and medical payments coverage for additional protection for your own injuries regardless of fault.",

    closingSections: [
      rateSectionAtFault(
        "Texas",
        "Urban areas like Houston, Dallas, and San Antonio have higher accident frequency and vehicle theft rates than rural areas, which directly affects what carriers charge. The vehicle you drive affects the cost of collision and comprehensive coverage based on repair cost, theft frequency, and safety ratings. Your annual mileage, age, years of licensed experience, and the coverage limits you choose all factor into the final premium as well."
      ),
      {
        title: "SR-22 requirements in Texas",
        body: "An SR-22 is not a type of insurance. It is a certificate your insurer files with the Texas Department of Public Safety confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI or DWI conviction, after being caught driving without insurance, or after accumulating too many points on your driving record. The requirement typically remains in place for two years from the triggering event, and your license stays suspended until the SR-22 is on file. Not every insurer offers SR-22 filing, so if you need one you may have to search specifically for carriers that work with higher-risk drivers. Allowing your policy to lapse during the SR-22 period restarts the suspension and can extend the overall requirement.",
      },
    ],

    ...ctaFields("Texas"),
  },

  // ── Arizona ───────────────────────────────────────────────────────────────
  {
    name: "Arizona",
    slug: "arizona",
    ...stateImage("arizona", "Arizona desert highway"),
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

    creditExplain: creditExplainPermitted("Arizona"),

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Arizona, which is significantly above the state minimum and provides meaningful coverage in a serious accident. The $15,000 property damage minimum is especially insufficient given the cost of newer vehicles and trucks common on Arizona roads. If your vehicle is financed or leased, your lender will require collision and comprehensive in addition to liability, often with a maximum allowable deductible written into the loan terms. For vehicles you own outright, consider the current market value and the annual cost of collision and comprehensive. Arizona's relatively dry climate reduces weather-related claims compared to some states, but the state's high vehicle theft rates make comprehensive coverage worth carrying on higher-value vehicles.",

    closingSections: [
      rateSectionAtFault(
        "Arizona",
        "Phoenix and Tucson metro areas produce higher premiums than rural Arizona because of higher accident frequency, vehicle theft rates, and repair costs in urban markets. Arizona's vehicle theft rate is above the national average, which makes comprehensive coverage more relevant here than in some other states."
      ),
      sr22Section("Arizona", "Motor Vehicle Division"),
    ],

    ...ctaFields("Arizona"),
  },

  // ── New Mexico ────────────────────────────────────────────────────────────
  {
    name: "New Mexico",
    slug: "new-mexico",
    ...stateImage("new-mexico", "New Mexico desert highway"),
    metaTitle: metaTitleAtFault("New Mexico"),
    metaDescription: metaDescriptionAtFault("New Mexico", "25/50/10"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/10 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Pure comparative fault state with no recovery bar.",
    callout:
      "New Mexico requires 25/50/10 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $10,000 for property damage. New Mexico is an at-fault state that applies pure comparative fault rules.",
    statute: "New Mexico Statutes Annotated Section 66-5-301",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in New Mexico results in a license suspension and a fine of $300 for a first offense. Reinstating your license requires proof of current insurance and payment of a reinstatement fee. If you cause an accident while uninsured, you may be required to file an SR-22 certificate with the Motor Vehicle Division for three years before your driving privileges are fully restored. New Mexico requires you to carry proof of financial responsibility at all times and present it at any traffic stop or accident.",
    faultExplain:
      "New Mexico is an at-fault state that applies a pure comparative negligence rule, which is more permissive than the modified comparative fault rules used in most states. You can recover compensation from another driver even if you were predominantly at fault for an accident, but your recovery is reduced proportionally by your percentage of fault. A driver found 70 percent responsible for an accident that caused $40,000 in damages can still recover $12,000 from the other driver, 30 percent of the total. There is no threshold that bars recovery; partial recovery is available at any fault level.\n\nThe same rule applies in reverse on the liability side. If you cause an accident where the other driver also contributed some fault, they can still recover from you proportionally. New Mexico courts determine the percentage of fault attributable to each party, and liability is allocated accordingly. If you are primarily at fault and your limits are insufficient to cover the total damages attributed to you, you are personally responsible for the balance above your policy limits. New Mexico courts can enforce civil judgments through wage garnishment and property liens.\n\nThe $10,000 property damage minimum is particularly low relative to the cost of repairing or replacing vehicles on New Mexico roads. A moderate rear-end collision involving a newer vehicle with parking sensors, backup cameras, or bumper-integrated components can easily produce repair estimates exceeding $10,000. New Mexico's highway network, including long stretches of I-40, I-25, and US-54, carries a significant mix of local traffic, commercial trucks, and interstate travelers, and the consequences of being at fault in a serious accident with inadequate limits can be financially significant.",
    umMandatory: false,
    umExplain:
      "New Mexico insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. New Mexico has a notable percentage of uninsured drivers, which makes UM coverage a practical protection for most policyholders. UM coverage pays your medical expenses and vehicle damage when an at-fault driver carries no insurance, and UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation.",
    creditExplain: creditExplainPermitted("New Mexico"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in New Mexico. The $10,000 property damage minimum is especially low given current vehicle values, raising property damage to $100,000 typically adds very little to a New Mexico premium and dramatically reduces personal exposure. New Mexico's pure comparative negligence rule means that drivers you injure can recover from you proportionally even if they share significant fault, making adequate liability limits especially important.\n\nNew Mexico's desert climate and occasional flash flooding make comprehensive coverage relevant for weather-related damage. Summer monsoon season produces intense localized rainstorms and flash floods, particularly in July and August, that can damage or total vehicles. Hailstorms also occur during these monsoon events. New Mexico also has wildlife including mule deer, elk, and pronghorn on rural roads, particularly on US-380, US-70, and similar rural corridors.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry comprehensive on any vehicle with meaningful value, New Mexico's combination of flash flooding, hail, and wildlife makes it particularly relevant. Adding UM and UIM at limits matching your liability coverage provides meaningful protection given the rate of uninsured drivers in the state, which is above the national average.",
    closingSections: [
      rateSectionAtFault("New Mexico", "Albuquerque and Santa Fe produce higher premiums than rural New Mexico due to accident frequency and vehicle theft rates in those urban markets. Rural highways and long driving distances across the state contribute to a distinct claims profile compared to more densely populated states."),
      sr22Section("New Mexico", "Motor Vehicle Division"),
    ],
    ...ctaFields("New Mexico"),
  },

  // ── Oklahoma ──────────────────────────────────────────────────────────────
  {
    name: "Oklahoma",
    slug: "oklahoma",
    ...stateImage("oklahoma", "Oklahoma highway plains"),
    metaTitle: metaTitleAtFault("Oklahoma"),
    metaDescription: metaDescriptionAtFault("Oklahoma", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Hail and severe weather elevate comprehensive claims statewide.",
    callout:
      "Oklahoma requires 25/50/25 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage. Oklahoma is an at-fault state.",
    statute: "Oklahoma Statutes Title 47 Section 7-601",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Oklahoma results in a fine of $250 for a first offense and up to $1,000 for subsequent offenses. Your license plates may be impounded, and you must provide proof of current insurance and pay a reinstatement fee before driving privileges are restored. Oklahoma uses an online verification system that allows law enforcement to confirm coverage status during a traffic stop. An SR-22 certificate is required after certain violations, including DUI convictions and driving without insurance, and must remain on file for three years.",
    faultExplain:
      "Oklahoma is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. A driver found exactly 50 percent at fault retains a right to recover half their damages; a driver found 51 percent at fault recovers nothing, the threshold creates a meaningful dividing line.\n\nOklahoma's at-fault system means that insurance claims are resolved based on fault determination. If you are found responsible for an accident, your liability coverage pays the other driver's damages up to your policy limits. Anything above those limits becomes your personal responsibility. Oklahoma courts can enforce civil judgments against wages, bank accounts, and property, and there is no bankruptcy protection for most civil accident judgments. The state minimum 25/50/25 limits can be exhausted by a single hospitalization or a moderate accident involving multiple injured parties.\n\nOklahoma's driving environment includes two major metropolitan areas, Oklahoma City and Tulsa, connected by the I-44 Turner Turnpike, which is one of the more heavily traveled toll roads in the south-central United States. The state's central location and highway network also make it a significant corridor for commercial truck traffic, which creates a distinct accident risk on interstates. Oklahoma's severe weather profile is perhaps the most significant insurance consideration specific to this state, it sits at the heart of Tornado Alley and experiences some of the most frequent and intense hailstorms of any state in the country, which produces consistently high comprehensive claims across all regions.",
    umMandatory: false,
    umExplain:
      "Oklahoma insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Oklahoma has a meaningful population of uninsured drivers, and the financial consequences of being hit by one without UM coverage can be significant. UM coverage pays your medical expenses and vehicle damage when an at-fault driver has no insurance. UIM coverage fills the gap when the at-fault driver's policy is not enough to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation for Oklahoma drivers.",
    creditExplain: creditExplainPermitted("Oklahoma"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Oklahoma. The 25/50/25 state minimum can be consumed by a single hospitalization in a serious accident, and the liability exposure in Oklahoma's active litigation environment makes adequate limits especially important. Oklahoma's 51 percent modified comparative fault threshold means drivers who are less than half at fault retain recovery rights, which often motivates the other party to file claims.\n\nComprehensive coverage is especially relevant in Oklahoma given the state's position at the heart of Tornado Alley and one of the most hail-prone regions in the country. Oklahoma City and Tulsa are among the most hail-impacted urban markets in the United States, and widespread hail events that total or severely damage hundreds of vehicles in a single storm are common, particularly in spring. Tornado damage to parked vehicles, while less common than hail damage, also occurs and is covered under comprehensive.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, comprehensive is especially important in Oklahoma given the weather exposure, it is one of the states where comprehensive coverage typically provides the most concrete value relative to the premium cost. Adding UM and UIM at limits matching your liability coverage provides protection against Oklahoma's uninsured driver population, which is above the national average, and ensures you are not left without recourse after a serious accident.",
    closingSections: [
      rateSectionAtFault("Oklahoma", "Oklahoma City and Tulsa produce higher premiums than rural Oklahoma because of accident frequency and repair costs in urban markets. Hail frequency across the state drives comprehensive premiums higher than in most states, particularly along the I-35 and I-44 corridors."),
      sr22Section("Oklahoma", "Department of Public Safety"),
    ],
    ...ctaFields("Oklahoma"),
  },
];
