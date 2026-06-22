import type { StateInsuranceData } from "./_types";
import { creditExplainPermitted, creditExplainBanned, sr22Section, rateSectionAtFault, ctaFields, stateImage, metaTitleAtFault, metaDescriptionAtFault } from "./_defaults";

export const west: StateInsuranceData[] = [
  // ── California ────────────────────────────────────────────────────────────
  {
    name: "California",
    slug: "california",
    ...stateImage("california", "California freeway"),
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

    ...ctaFields("California"),
  },

  // ── Colorado ──────────────────────────────────────────────────────────────
  {
    name: "Colorado",
    slug: "colorado",
    ...stateImage("colorado", "Colorado mountain highway"),
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

    creditExplain: creditExplainPermitted("Colorado"),

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Colorado and increasing your MedPay above the mandatory $5,000 minimum to $25,000 or more if your health insurance does not comprehensively cover accident-related injuries. Colorado's $15,000 property damage minimum is easily exceeded in an accident involving a newer vehicle. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Colorado's mountain roads and winter driving conditions make comprehensive coverage especially relevant for weather-related damage. Adding UM and UIM coverage at meaningful limits provides protection in the situations where the at-fault system is most likely to leave you with uncompensated losses.",

    closingSections: [
      {
        title: "How insurers determine your rate in Colorado",
        body: "Colorado insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score to calculate your premium. Denver and the Front Range metro area produce higher premiums than rural Colorado because of accident frequency, vehicle theft rates, and repair costs in urban markets. Hail is an unusually significant factor in Colorado comprehensive claims, with the Denver metro area experiencing some of the highest hail claim frequency in the country. If you park your car outside and live along the Front Range, your comprehensive premium reflects this elevated risk. At-fault accidents and moving violations typically affect your rate for three to five years. Comparing quotes across multiple carriers at renewal is the most reliable way to ensure your premium reflects your current profile.",
      },
      sr22Section("Colorado", "Division of Motor Vehicles"),
    ],

    ...ctaFields("Colorado"),
  },

  // ── Nevada ────────────────────────────────────────────────────────────────
  {
    name: "Nevada",
    slug: "nevada",
    ...stateImage("nevada", "Nevada desert highway"),
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

    creditExplain: creditExplainPermitted("Nevada"),

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Nevada. The state minimum of 25/50/20 is easily exhausted in a serious accident involving a newer vehicle or significant injuries. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Nevada's desert climate and high temperatures can accelerate mechanical wear, but comprehensive claims in Nevada are more often related to vehicle theft than to weather. The Las Vegas metro area has an elevated vehicle theft rate, which makes comprehensive coverage more relevant there than in other parts of the state. Adding UM and UIM coverage at matching limits provides the most complete protection for Nevada drivers.",

    closingSections: [
      rateSectionAtFault(
        "Nevada",
        "Las Vegas and surrounding Clark County produce some of the highest premiums in the state due to accident frequency, vehicle theft rates, and the volume of high-risk driving behavior in and around the Strip and other entertainment corridors. Reno and Sparks produce moderate premiums, while rural Nevada is considerably cheaper."
      ),
      sr22Section("Nevada", "Department of Motor Vehicles"),
    ],

    ...ctaFields("Nevada"),
  },

  // ── Washington ────────────────────────────────────────────────────────────
  {
    name: "Washington",
    slug: "washington",
    ...stateImage("washington", "Washington state highway"),
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
      sr22Section("Washington", "Department of Licensing"),
    ],

    ...ctaFields("Washington"),
  },

  // ── Alaska ────────────────────────────────────────────────────────────────
  {
    name: "Alaska",
    slug: "alaska",
    ...stateImage("alaska", "Alaska scenic highway"),
    metaTitle: "Car Insurance in Alaska | High Minimums, Requirements and Free Quotes",
    metaDescription:
      "Alaska requires 50/100/25 liability coverage, among the highest mandatory minimums in the country. Learn what is required and compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "50/100/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Among the highest state minimums in the country at 50/100/25.",
    callout:
      "Alaska requires 50/100/25 liability coverage: $50,000 per person for bodily injury, $100,000 per accident, and $25,000 for property damage. Alaska is an at-fault state with among the highest mandatory minimums in the country.",
    statute: "Alaska Statutes Section 28.20.440",
    minCoverage: [
      { label: "$50,000", amount: "bodily injury per person" },
      { label: "$100,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Alaska is a misdemeanor offense that can result in fines, license suspension, and vehicle impoundment. You must carry proof of insurance at all times and present it upon request by law enforcement or after an accident. Reinstating a suspended license requires proof of current coverage and payment of reinstatement fees. Alaska may require SR-22 filing after serious violations including DUI convictions and repeated uninsured driving offenses.",
    faultExplain:
      "Alaska is an at-fault state that applies a pure comparative negligence rule, meaning you can recover compensation from another driver even if you were predominantly at fault for an accident, though your recovery is reduced proportionally by your percentage of fault. Unlike states with modified comparative fault rules that bar recovery when your fault percentage crosses a threshold, Alaska's pure system preserves partial recovery at any fault level. If a jury finds you 70 percent responsible for an accident, you can still recover 30 percent of your damages from the other driver.\n\nAlaska's high mandatory minimums of 50/100/25, among the highest required by any state, reflect a deliberate policy choice that accounts for the elevated cost of accidents in a remote state. Emergency medical services in Alaska can involve air evacuation from remote areas to hospitals in Anchorage or Fairbanks, which is dramatically more expensive than ground transport in the lower 48. Vehicle repair costs in Alaska are consistently above the national average due to supply chain logistics and the limited availability of specialized repair facilities outside the major cities. Parts that are readily available at dealers in the continental United States may require extended lead times and significant shipping costs in Alaska.\n\nWildlife collisions, particularly involving moose, are a significant claims driver unique to Alaska. Moose are exceptionally large animals, often exceeding 1,000 pounds, and a collision at highway speed is frequently fatal or life-altering for the driver and devastating to the vehicle. These collisions are handled under comprehensive coverage rather than liability coverage, and the frequency of moose encounters on Alaska roads makes comprehensive a particularly important coverage in this state. If you cause an accident that exceeds your liability limits, you are personally responsible for the balance above those limits.",
    umMandatory: false,
    umExplain:
      "Alaska insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Alaska's remoteness means that accidents involving uninsured or underinsured drivers can leave you far from legal resources and with limited recovery options without UM coverage. UM coverage pays your medical expenses and vehicle damage when an at-fault driver has no insurance. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at meaningful limits is the standard recommendation for Alaska drivers.",
    creditExplain: creditExplainPermitted("Alaska"),
    recommendedExplain:
      "Alaska's mandatory minimums are already well above most states, but a serious accident in a remote area involving significant injuries can still exceed them. Most advisors recommend adding UM and UIM coverage at matching limits to your liability policy. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Comprehensive coverage is especially important in Alaska given the risk of wildlife collisions, which are typically covered under comprehensive rather than collision. The cost of vehicle repairs and parts in Alaska is higher than the national average, which should be factored into your deductible decision.",
    closingSections: [
      rateSectionAtFault("Alaska", "Anchorage and the MatSu Valley produce higher premiums than rural and remote Alaska due to accident frequency and higher vehicle values in those markets. Remote areas of the state see fewer accidents but higher claim costs when they occur due to distance from repair facilities and emergency services."),
      sr22Section("Alaska", "Division of Motor Vehicles"),
    ],
    ...ctaFields("Alaska"),
  },

  // ── Hawaii ────────────────────────────────────────────────────────────────
  {
    name: "Hawaii",
    slug: "hawaii",
    ...stateImage("hawaii", "Hawaii coastal highway"),
    metaTitle: "Car Insurance in Hawaii | PIP Requirements and Free Quotes",
    metaDescription:
      "Hawaii requires 20/40/10 liability plus $10,000 PIP and prohibits credit-based pricing. Learn how the no-fault system works and compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "20/40/10 + $10k PIP",
    faultSystem: "no-fault",
    creditBanned: true,
    indexNote: "Credit-based pricing is prohibited by state law.",
    callout:
      "Hawaii requires 20/40/10 liability coverage plus $10,000 in Personal Injury Protection. Hawaii is a no-fault state and prohibits insurers from using credit scores to price auto policies.",
    statute: "Hawaii Revised Statutes Section 431:10C-301",
    minCoverage: [
      { label: "$20,000", amount: "bodily injury per person" },
      { label: "$40,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
      { label: "$10,000", amount: "Personal Injury Protection (PIP)" },
    ],
    penaltyNote:
      "Driving without insurance in Hawaii results in a fine of $500 for a first offense and up to $5,000 for subsequent offenses, plus license suspension and a requirement to file an SR-22 with the county motor vehicle registration office. Hawaii requires you to carry proof of insurance in your vehicle at all times. Because Hawaii is an island state, vehicles involved in serious accidents may face additional logistics challenges for repairs, and parts availability can affect both repair time and cost.",
    faultExplain:
      "Hawaii is a no-fault state, meaning your own Personal Injury Protection coverage pays for your medical expenses and lost wages after an accident regardless of who caused it. PIP covers 80 percent of reasonable medical expenses and a portion of lost wages up to the $10,000 policy limit. This no-fault payment is immediate, it does not require a determination of who caused the accident and begins paying as soon as a covered accident is reported and treatment is documented. For injuries treated and resolved within the $10,000 PIP limit, most drivers in Hawaii never need to engage the tort system at all.\n\nTo step outside the no-fault system and bring a liability claim against an at-fault driver for non-economic damages like pain and suffering, your injuries must meet Hawaii's serious injury threshold, which requires significant permanent loss of use of a body organ, member, function, or system, permanent and serious disfigurement, or death. Temporary injuries that heal without permanent consequence generally do not qualify, regardless of how painful or disruptive they were during the recovery period.\n\nHawaii's island geography creates a driving environment distinct from continental states. The highway network is limited by the size and terrain of each island, and there are no long interstate corridors. Traffic density in the Honolulu metro area on Oahu is among the highest in the country relative to road capacity, and congestion-related accidents are common. The neighbor islands have lower traffic volumes but road conditions that include narrow coastal roads, volcanic terrain, and exposure to flash flooding from tropical weather systems. Vehicle insurance also accounts for the island supply chain, vehicle repair costs in Hawaii are above the national average because parts must be shipped in, labor costs reflect Hawaii's higher cost of living, and storage and logistics for damaged vehicles can be more complex.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical costs beyond $10,000 in a serious accident",
      "Losses caused by an uninsured driver without UM coverage",
    ],
    umMandatory: false,
    umExplain:
      "Hawaii insurers must offer uninsured motorist coverage, and drivers may reject it in writing. Given the island geography and the mix of drivers in Hawaii's tourist-heavy markets, carrying UM coverage provides important protection if an at-fault driver lacks adequate insurance. UM bodily injury coverage pays for your losses above what PIP covers when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses.",
    creditExplain:
      "Hawaii is one of a small number of states that prohibits insurers from using credit-based insurance scores when pricing auto policies. Under Hawaii law, insurers must rely on driving-related factors such as your record, years of licensed experience, and annual mileage to calculate your premium. This prohibition means that Hawaii drivers with poor credit due to medical debt, job loss, or other circumstances unrelated to their driving are not penalized on their auto insurance. If you have moved to Hawaii from a state where credit affected your rate, your premium may be different even with an identical driving record.",
    recommendedExplain:
      "Most advisors recommend carrying more than the 20/40/10 minimum in Hawaii. The $10,000 property damage minimum is low relative to vehicle repair costs in Hawaii, where parts must be shipped in and labor costs reflect the state's higher cost of living, raising property damage coverage to $100,000 typically adds very little to a Hawaii premium.\n\nHawaii's island environment creates specific comprehensive coverage needs. Flash flooding from tropical storms and intense rainfall is a risk, particularly in low-lying areas and coastal valleys on all of the main islands. Salt air corrosion is a long-term vehicle concern, and ocean spray and sand can accelerate wear on components. Vehicle theft is elevated in some Honolulu zip codes relative to the statewide average, making comprehensive coverage particularly relevant for vehicles parked in urban areas.\n\nIncreasing PIP above the $10,000 minimum is worth considering if your health insurance does not comprehensively cover accident-related injuries, PIP's 80 percent payment structure means a $12,500 medical bill exhausts the minimum limit. Drivers who want more immediate medical coverage can increase PIP for a modest additional premium.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with meaningful value, Hawaii's above-average vehicle repair costs mean the cost of a total loss or major repair is higher than on the mainland, which makes comprehensive and collision coverage more valuable here than in lower-cost markets.",
    closingSections: [
      {
        title: "How insurers determine your rate in Hawaii",
        body: "Because Hawaii prohibits credit-based pricing, insurers rely on your driving record, years of licensed experience, annual mileage, vehicle type, and zip code to calculate your premium. Honolulu produces higher premiums than the neighbor islands due to higher accident frequency, traffic density, and vehicle theft rates. The cost of vehicle repairs in Hawaii is above the national average due to transportation logistics for parts and the island supply chain. At-fault accidents and moving violations typically affect your rate for three to five years. Comparing quotes across multiple carriers at renewal is the most effective way to ensure your premium reflects your current risk profile.",
      },
    ],
    ...ctaFields("Hawaii"),
  },

  // ── Idaho ─────────────────────────────────────────────────────────────────
  {
    name: "Idaho",
    slug: "idaho",
    ...stateImage("idaho", "Idaho mountain highway"),
    metaTitle: metaTitleAtFault("Idaho"),
    metaDescription: metaDescriptionAtFault("Idaho", "25/50/15"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/15 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "One of the more affordable states for auto insurance in the West.",
    callout:
      "Idaho requires 25/50/15 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $15,000 for property damage. Idaho is an at-fault state.",
    statute: "Idaho Code Section 49-1229",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Idaho results in a fine and license suspension. Reinstatement requires proof of current insurance and payment of applicable fees. An SR-22 certificate is required after certain violations and must remain on file for three years. Idaho law requires you to carry proof of financial responsibility at all times and present it at a traffic stop or after an accident.",
    faultExplain:
      "Idaho is an at-fault state that applies a modified comparative fault rule with a 50 percent threshold, which is slightly stricter than the 51 percent threshold used in many comparative fault states. If your negligence is less than the other driver's, meaning you are 49 percent or less at fault, you can recover compensation from them, reduced proportionally by your share of fault. If your negligence is equal to or greater than the other driver's, meaning you are at least 50 percent responsible, you cannot recover anything from them. Equal fault bars your recovery entirely, which distinguishes Idaho from 51-percent-threshold states where a driver at exactly 50 percent fault retains a right to recover half their damages.\n\nIdaho's driving environment encompasses significant terrain variation, from the urban traffic of the Boise metro and Treasure Valley to mountain passes on U.S. Highway 12 through the Bitterroot Range to desert highways in southern Idaho. Winter driving conditions in Idaho range from snowpack on mountain passes to ice on valley floors. The state's rural character means that many accidents occur on highways far from immediate emergency services, which can affect both outcomes for injured drivers and the total cost of claims.\n\nThe $15,000 property damage minimum is below the cost of repairing many contemporary vehicles, particularly trucks, SUVs, and vehicles with advanced driver assistance systems. A moderate collision involving a newer vehicle with front sensors and cameras can easily produce repair estimates exceeding $15,000. If you cause a property damage accident and your limit is $15,000 but the actual damage is $30,000, you are personally responsible for the additional $15,000. This is why most Idaho drivers carry property damage limits significantly above the state minimum.",
    umMandatory: false,
    umExplain:
      "Idaho insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays for your medical expenses and vehicle damage when an at-fault driver has no insurance. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying UM and UIM at limits matching your liability coverage is the standard recommendation for Idaho drivers.",
    creditExplain: creditExplainPermitted("Idaho"),
    recommendedExplain:
      "Idaho is one of the more affordable states for auto insurance in the West, which makes upgrading to meaningful coverage relatively cost-effective. The $15,000 property damage minimum is easily exceeded in a moderate accident involving a newer vehicle, most advisors recommend raising property damage coverage to $100,000 as a practical baseline. Most advisors recommend carrying at least 100/300/100 liability overall.\n\nIdaho's mountain roads and winter driving conditions make collision coverage especially relevant. Passes on US-12, US-95, and other mountain routes experience ice, snow, and avalanche conditions. Single-vehicle accidents from loss of control on mountain roads can be particularly severe due to steep terrain. Collision coverage pays for your vehicle damage regardless of fault, which is critical when accidents occur in remote areas where establishing fault may be complicated.\n\nIdaho has a significant deer, elk, and other wildlife population. Vehicle-wildlife collisions are common on rural highways throughout the state, particularly in the early morning and evening hours. Moose are also present in northern Idaho and can cause devastating collision damage. All wildlife strike claims are covered under comprehensive insurance, not collision coverage.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle worth more than a few thousand dollars. Idaho's combination of mountain driving, wildlife exposure, and winter weather makes comprehensive and collision coverage particularly cost-effective relative to the actual risk drivers face on this state's roads.",
    closingSections: [
      rateSectionAtFault("Idaho", "Boise and the Treasure Valley produce higher premiums than rural and mountain Idaho because of higher accident frequency and vehicle repair costs. Rural Idaho is priced considerably lower, though long highway distances and wildlife collision risk are factors in comprehensive pricing."),
      sr22Section("Idaho", "Idaho Transportation Department"),
    ],
    ...ctaFields("Idaho"),
  },

  // ── Montana ───────────────────────────────────────────────────────────────
  {
    name: "Montana",
    slug: "montana",
    ...stateImage("montana", "Montana Big Sky highway"),
    metaTitle: metaTitleAtFault("Montana"),
    metaDescription: metaDescriptionAtFault("Montana", "25/50/20"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/20 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Low population density keeps premiums below the national average.",
    callout:
      "Montana requires 25/50/20 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $20,000 for property damage. Montana is an at-fault state.",
    statute: "Montana Code Annotated Section 61-6-103",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$20,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Montana results in a fine and license suspension. You must carry proof of financial responsibility at all times and present it to law enforcement upon request. Reinstating your license after a suspension requires proof of current insurance and payment of reinstatement fees. SR-22 filing is required after certain violations and must remain on file for three years.",
    faultExplain:
      "Montana is an at-fault state that applies a modified comparative fault rule with a 50 percent threshold. If your negligence is less than the other driver's, you can recover compensation from them, reduced proportionally by your share of fault. If your negligence equals or exceeds the other driver's, meaning you are at least as responsible for the accident, you cannot recover anything from them. This equal-fault bar is the same standard used in several other western states with 50 percent thresholds.\n\nMontana's driving environment is defined by vast distances, rugged terrain, and some of the most remote highways in the continental United States. The state has sections of highway with no posted speed limit on some secondary roads, and even on interstates, high speed travel is the norm. These conditions mean that when accidents do occur, they often involve higher speeds and more severe outcomes than comparable accidents in more urbanized states with lower average travel speeds.\n\nWildlife is a significant collision risk across Montana, the state has substantial elk, deer, and antelope populations, and vehicle-animal collisions are common throughout the year. Moose are also present in northern and western Montana. These collisions are covered under comprehensive insurance rather than liability coverage. Emergency services response times in rural Montana can be extended, particularly in mountain areas and on roads without cellular coverage, which can increase both the medical costs and severity of accidents that occur far from towns.\n\nMontana's rural nature means accident frequency is lower than urban states, but claim severity is often elevated because of high speeds, long EMS response times, and the distance from specialized medical facilities and vehicle repair shops. If you cause an accident in Montana and your limits are insufficient, you are personally responsible for the balance.",
    umMandatory: false,
    umExplain:
      "Montana insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault driver carries no insurance. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation for Montana drivers.",
    creditExplain: creditExplainPermitted("Montana"),
    recommendedExplain:
      "Montana's low population density keeps premiums below the national average, which makes upgrading to meaningful coverage particularly cost-effective. Most advisors recommend carrying at least 100/300/100 liability. The 25/50/20 state minimum can be quickly exhausted in a serious accident, and Montana's high-speed highway environment means accidents often produce significant damages.\n\nComprehensive coverage is especially important in Montana given the significant wildlife collision risk. Montana has substantial populations of deer, elk, moose, and antelope that cross roads throughout the state. Elk and moose in particular are very large animals, a collision with either species at highway speed is often catastrophic for the vehicle. All wildlife strike claims are handled under comprehensive coverage. Montana's wildlife collision frequency is among the highest in the country on a per-vehicle basis.\n\nWinter driving conditions across Montana's mountain passes and open plains create significant collision risk from November through April. Roads in the Rocky Mountain corridor, Glacier Country, and even the eastern plains experience ice, blowing snow, and whiteout conditions. Collision coverage pays for your vehicle damage regardless of fault, which is particularly valuable in remote areas where emergency services and recovery are far away.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with remaining value. Montana's affordability relative to other states means collision and comprehensive are more accessible here than in higher-cost markets.",
    closingSections: [
      rateSectionAtFault("Montana", "Billings, Missoula, and Great Falls produce higher premiums than the rural expanses of the state, though the overall difference is smaller than in more densely populated states. Wildlife collision frequency in Montana is among the highest in the country and affects comprehensive pricing across the state."),
      sr22Section("Montana", "Motor Vehicle Division"),
    ],
    ...ctaFields("Montana"),
  },

  // ── Oregon ────────────────────────────────────────────────────────────────
  {
    name: "Oregon",
    slug: "oregon",
    ...stateImage("oregon", "Oregon coastal highway"),
    metaTitle: "Car Insurance in Oregon | PIP Requirements and Free Quotes",
    metaDescription:
      "Oregon requires 25/50/20 liability plus mandatory $15,000 PIP coverage. Learn the requirements, how PIP works in this at-fault state, and compare free quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/50/20 + $15k PIP",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "PIP coverage is mandatory even in this at-fault state.",
    callout:
      "Oregon requires 25/50/20 liability coverage plus $15,000 in mandatory Personal Injury Protection. Oregon is an at-fault state but uniquely requires PIP coverage that pays your medical expenses regardless of fault.",
    statute: "Oregon Revised Statutes Section 806.010",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$20,000", amount: "property damage per accident" },
      { label: "$15,000", amount: "Personal Injury Protection (mandatory)" },
    ],
    penaltyNote:
      "Driving without insurance in Oregon results in a fine of up to $130 for a first offense and a license suspension for repeat offenses. Oregon requires you to carry proof of insurance at all times and present it at any traffic stop or accident. SR-22 filing is required after DUI convictions, driving without insurance, and certain other serious violations. The SR-22 must remain on file for three years, and any lapse reinstates the suspension immediately.",
    faultExplain:
      "Oregon is an at-fault state, meaning the driver who caused an accident is responsible for the resulting damages and injured parties file claims against the at-fault driver's liability coverage. Oregon applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault, you can recover compensation from the other driver, reduced proportionally by your share of fault. If you are 51 percent or more at fault, you cannot recover anything from the other party.\n\nWhat makes Oregon unusual among at-fault states is its mandatory PIP requirement. While most states either have no PIP requirement or are fully no-fault, Oregon sits in a middle position: it is an at-fault state for determining who bears long-term financial responsibility, but it requires all drivers to carry $15,000 in PIP that pays your own medical expenses immediately after any accident regardless of fault. This means that after an Oregon accident, your immediate medical treatment is covered by your own PIP while the liability investigation, which determines who pays whom in the long run, proceeds on a separate track. Your PIP pays first, and if your injuries exceed PIP or involve pain and suffering, you may pursue the at-fault driver's liability coverage for the remaining damages.\n\nOregon's geography creates significant driving variation. Western Oregon, particularly the Portland metro area and the Willamette Valley, receives substantial rainfall that makes road surfaces slick and visibility variable throughout the fall, winter, and spring. The Oregon Coast has its own weather patterns including fog and coastal wind. Eastern Oregon is drier but covers vast distances with limited services. The Cascade Mountain passes, including Snoqualmie and Mount Hood corridors, experience winter conditions that require tire chains and can close periodically during storms.",
    umMandatory: true,
    umExplain:
      "Oregon requires all auto insurance policies to include uninsured motorist coverage. UM coverage pays for your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. Because Oregon requires PIP, your immediate medical bills are covered by your own policy regardless of fault, and UM coverage supplements that by addressing losses above your PIP limit when an uninsured driver was responsible. UIM coverage fills the gap when an at-fault driver's liability policy is insufficient to cover your full losses.",
    creditExplain: creditExplainPermitted("Oregon"),
    recommendedExplain:
      "Oregon's mandatory PIP and UM requirements make its baseline coverage more comprehensive than many states, but the liability minimums are still modest relative to the cost of serious accidents. Most advisors recommend carrying at least 100/300/100 liability. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Oregon's rainfall, particularly west of the Cascades, makes collision coverage relevant for winter and wet-weather driving. Comprehensive coverage is worth carrying on any vehicle with meaningful value given vehicle theft rates in Portland and the Willamette Valley.",
    closingSections: [
      rateSectionAtFault("Oregon", "Portland and the Willamette Valley produce higher premiums than eastern Oregon and rural coastal areas due to accident frequency, vehicle theft rates, and repair costs in urban markets. The Portland metro area has seen elevated vehicle theft in recent years, which has increased comprehensive pricing in those zip codes."),
      sr22Section("Oregon", "Driver and Motor Vehicle Services"),
    ],
    ...ctaFields("Oregon"),
  },

  // ── Utah ──────────────────────────────────────────────────────────────────
  {
    name: "Utah",
    slug: "utah",
    ...stateImage("utah", "Utah red rock desert highway"),
    metaTitle: "Car Insurance in Utah | PIP Requirements and Free Quotes",
    metaDescription:
      "Utah requires 25/65/15 liability plus $3,000 mandatory PIP. Learn how the no-fault system works, what most drivers need, and compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/65/15 + $3k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "No-fault state with unusually structured 25/65/15 liability minimums.",
    callout:
      "Utah requires 25/65/15 liability coverage plus $3,000 in Personal Injury Protection. Utah is a no-fault state. PIP covers your medical expenses regardless of fault up to the $3,000 limit.",
    statute: "Utah Code Section 31A-22-302",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$65,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
      { label: "$3,000", amount: "Personal Injury Protection (mandatory)" },
    ],
    penaltyNote:
      "Driving without insurance in Utah results in a fine, license suspension, and a requirement to file an SR-22 with the Driver License Division for three years. Utah enforces insurance compliance through an electronic verification system, and insurers must report policy cancellations to the state. Reinstating your license requires proof of current coverage and payment of reinstatement fees. Utah's $3,000 PIP minimum is among the lowest in no-fault states and is easily exceeded in any accident requiring significant medical treatment.",
    faultExplain:
      "Utah is a no-fault state, meaning your own Personal Injury Protection coverage pays your medical expenses up to $3,000 after any accident regardless of who caused it. Utah's $3,000 PIP limit is among the lowest mandatory PIP amounts of any no-fault state in the country, many no-fault states require $10,000, $15,000, or more. For any accident involving emergency room treatment, specialist visits, or imaging, $3,000 can be exhausted quickly. Once your PIP limit is reached, remaining medical costs shift to your health insurance, your collision coverage if applicable, or out-of-pocket payment unless you can establish the other driver's liability.\n\nTo step outside the no-fault system and bring a tort claim against an at-fault driver for pain and suffering and other non-economic damages, your injuries must meet Utah's threshold, which requires medical expenses to exceed $3,000, permanent disability, permanent impairment of a body function, or permanent disfigurement. This threshold is relatively easy to meet given the low $3,000 PIP limit, many accidents that produce injuries will quickly cross the $3,000 medical expense mark, at which point the tort system becomes available. Once your injuries meet the threshold, Utah applies a modified comparative fault rule with a 51 percent threshold for tort claims.\n\nUtah's driving environment includes the congested Wasatch Front between Ogden and Provo, where the majority of Utah's population is concentrated in a relatively narrow corridor along the mountains. Salt Lake City and its suburbs are among the fastest-growing urban areas in the country, and the corresponding increase in traffic density has raised accident rates along the I-15 and I-215 corridors. Utah's diverse terrain, from mountain passes to desert, also creates seasonal weather risks including snow and ice at elevation and flash flooding in canyon areas during summer monsoons.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical expenses beyond $3,000 without additional coverage",
      "Losses caused by an uninsured driver without UM coverage",
    ],
    umMandatory: false,
    umExplain:
      "Utah insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Given Utah's low $3,000 PIP limit, UM coverage provides an important backstop when an uninsured driver causes injuries that quickly exceed what your own PIP will pay. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your actual losses. Carrying both at meaningful limits is the standard recommendation for Utah drivers who want comprehensive protection.",
    creditExplain: creditExplainPermitted("Utah"),
    recommendedExplain:
      "Utah's $3,000 PIP minimum is among the lowest of any no-fault state, so increasing PIP above the minimum is one of the most practical and cost-effective coverage improvements available to Utah drivers. Most advisors recommend carrying 100/300/100 liability and PIP above $3,000 if your health insurance does not comprehensively cover accident-related injuries. Given that the $3,000 PIP limit can be exhausted by a single emergency room visit, increasing it to $10,000 or more provides substantially better protection for a modest additional premium.\n\nUtah's varied terrain creates a range of driving conditions and coverage needs. The Wasatch Front's congested urban highways produce collision exposure similar to other major metro areas. Mountain passes in the Wasatch Range, Uinta Mountains, and other ranges experience winter conditions including ice, snow, and reduced visibility. Comprehensive coverage is relevant in Utah for several reasons: flash flooding during summer monsoons affects southern and canyon areas, hailstorms occur statewide, and vehicle theft rates in Salt Lake City are above the national average.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with remaining value, Utah's combination of urban collision exposure, mountain driving, severe weather, and vehicle theft risk makes comprehensive and collision coverage cost-effective on most vehicles. Adding UM and UIM coverage at meaningful limits fills the most significant gap in a minimum-coverage Utah policy.",
    closingSections: [
      rateSectionAtFault("Utah", "Salt Lake City and the Wasatch Front produce higher premiums than rural Utah because of accident frequency, vehicle theft rates, and repair costs in urban markets. Utah's rapid population growth has increased traffic density along the Wasatch Front, contributing to a higher accident rate than the state's historical baseline."),
      sr22Section("Utah", "Driver License Division"),
    ],
    ...ctaFields("Utah"),
  },

  // ── Wyoming ───────────────────────────────────────────────────────────────
  {
    name: "Wyoming",
    slug: "wyoming",
    ...stateImage("wyoming", "Wyoming mountain highway"),
    metaTitle: metaTitleAtFault("Wyoming"),
    metaDescription: metaDescriptionAtFault("Wyoming", "25/50/20"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/20 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Low population density keeps premiums well below the national average.",
    callout:
      "Wyoming requires 25/50/20 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $20,000 for property damage. Wyoming is an at-fault state.",
    statute: "Wyoming Statutes Section 31-9-405",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$20,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Wyoming results in a fine and license suspension. You must carry proof of financial responsibility at all times and present it to law enforcement upon request. Reinstating your license requires proof of current insurance and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other serious violations and must remain on file for three years.",
    faultExplain:
      "Wyoming is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. At exactly 50 percent fault, you retain a right to recover half your damages; at 51 percent, that right is extinguished entirely.\n\nWyoming's vast rural highway network and long distances between towns create driving conditions that differ fundamentally from urban and suburban states. Major routes like Interstate 80, U.S. Highway 26, and Wyoming Highway 789 connect towns separated by dozens of miles of open range and desert. Wind is a constant hazard, Wyoming is one of the windiest states in the country, and high-profile vehicles including trucks and RVs are routinely affected by crosswinds on open interstate sections. Winter conditions on Wyoming's elevated highways include severe blowing snow and whiteouts that can materialize quickly.\n\nWildlife collision risk is significant throughout Wyoming, with mule deer, pronghorn antelope, and elk populations creating constant collision hazards particularly at dawn and dusk. The state also contains sections of open range where livestock may be on the road, creating an additional collision category. All of these animal and livestock collisions are handled under comprehensive coverage, not liability coverage.\n\nAccidents in remote Wyoming locations can involve extended emergency response times and in serious cases, air evacuation to regional medical centers. These factors can significantly increase the total cost of a serious accident claim above what might be expected in a state with more accessible emergency services. If you cause an accident and your limits are insufficient to cover all resulting damages, you are personally responsible for the balance.",
    umMandatory: false,
    umExplain:
      "Wyoming insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault driver has no insurance. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage provides the most complete protection for Wyoming drivers.",
    creditExplain: creditExplainPermitted("Wyoming"),
    recommendedExplain:
      "Wyoming is one of the lower-premium states in the country due to its sparse population and low accident frequency, which makes upgrading coverage particularly cost-effective. Most advisors recommend at least 100/300/100 liability, the incremental premium cost in Wyoming is modest and the protection difference is significant.\n\nComprehensive coverage is especially important in Wyoming given the state's diverse wildlife. Mule deer, pronghorn antelope, elk, and in some areas moose are common on Wyoming's rural highways. Wyoming has open range laws in many areas, meaning livestock, cattle, sheep, and horses, may also be on unfenced roads. All animal and livestock collision claims are handled under comprehensive coverage, not collision or liability coverage. Given the frequency of wildlife and livestock encounters on Wyoming roads, comprehensive is not an optional enhancement for most drivers, it is a practical necessity.\n\nWyoming's wind and winter weather also create comprehensive risks for parked vehicles. High winds can drive debris into vehicles, and ice storms and hail from spring and summer thunderstorms can cause significant damage.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with remaining value. Wyoming's open range character, wildlife diversity, extreme weather, and remote location, far from major repair facilities in many areas, make carrying comprehensive and collision coverage particularly cost-effective relative to the risk profile of driving in this state.",
    closingSections: [
      rateSectionAtFault("Wyoming", "Cheyenne and Casper produce somewhat higher premiums than the remote areas of the state, though Wyoming's overall market is priced well below the national average due to low traffic density and accident frequency. Wildlife collision risk, especially on rural interstate corridors, is a meaningful factor in comprehensive pricing."),
      sr22Section("Wyoming", "Department of Transportation"),
    ],
    ...ctaFields("Wyoming"),
  },
];
