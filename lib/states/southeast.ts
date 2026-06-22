import type { StateInsuranceData } from "./_types";
import { creditExplainPermitted, sr22Section, rateSectionAtFault, ctaFields, stateImage, metaTitleAtFault, metaDescriptionAtFault } from "./_defaults";

export const southeast: StateInsuranceData[] = [
  // ── Florida ───────────────────────────────────────────────────────────────
  {
    name: "Florida",
    slug: "florida",
    ...stateImage("florida", "Florida highway"),
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

    ...ctaFields("Florida"),
  },

  // ── Georgia ───────────────────────────────────────────────────────────────
  {
    name: "Georgia",
    slug: "georgia",
    ...stateImage("georgia", "Georgia highway"),
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

    creditExplain: creditExplainPermitted("Georgia"),

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Georgia, which significantly exceeds the state minimum and provides meaningful protection if you cause a serious accident. The 25/50/25 state minimum is easily insufficient in a highway accident involving multiple vehicles or significant injuries. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage, and they may specify a maximum allowable deductible. For vehicles you own outright, weigh the current market value of the car against the annual cost of collision and comprehensive. Adding UM coverage under the add-on option rather than the standard offset option gives you the broadest protection in the situations most likely to leave you with uncompensated losses in Georgia.",

    closingSections: [
      rateSectionAtFault(
        "Georgia",
        "The Atlanta metropolitan area consistently produces higher premiums than rural Georgia because of traffic density, accident frequency, and repair costs in urban markets. Your driving record is the most controllable factor available to you: at-fault accidents and moving violations typically affect your rate for three to five years. Georgia uses a points system for traffic violations, and accumulating too many points within a 24-month period can result in a license suspension in addition to a rate increase."
      ),
      sr22Section("Georgia", "Georgia Department of Driver Services"),
    ],

    ...ctaFields("Georgia"),
  },

  // ── North Carolina ────────────────────────────────────────────────────────
  {
    name: "North Carolina",
    slug: "north-carolina",
    ...stateImage("north-carolina", "North Carolina highway"),
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

    ...ctaFields("North Carolina"),
  },

  // ── Alabama ───────────────────────────────────────────────────────────────
  {
    name: "Alabama",
    slug: "alabama",
    ...stateImage("alabama", "Alabama highway Birmingham"),
    metaTitle: "Car Insurance in Alabama | State Minimums and Free Quotes",
    metaDescription:
      "Alabama requires 25/50/25 liability coverage and applies contributory negligence, one of the strictest fault rules in the country. Compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "One of four jurisdictions applying contributory negligence.",
    callout:
      "Alabama requires 25/50/25 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage. Alabama is an at-fault state that applies contributory negligence, one of the strictest fault standards in the country.",
    statute: "Code of Alabama Section 32-7A-4",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Alabama results in a fine and license suspension for a first offense. Reinstatement requires proof of current coverage and payment of applicable fees. A second offense within five years results in a longer suspension and higher reinstatement costs. Alabama operates an electronic insurance verification system that allows law enforcement to confirm active coverage during a traffic stop without requiring you to produce a paper card. SR-22 filing is required after certain violations including DUI convictions.",
    faultExplain:
      "Alabama is an at-fault state but applies a contributory negligence rule, which is one of the strictest fault standards in the country and is used in only a handful of jurisdictions, Alabama, Maryland, Virginia, Washington DC, and North Carolina. Under contributory negligence, if you are found even one percent at fault for an accident, you are completely barred from recovering any compensation from the other driver regardless of how much more at fault they were. There is no sliding scale or proportional reduction as there would be under comparative negligence rules used in most states. Either you were contributorily negligent or you were not, and if you were, your claim is entirely extinguished.\n\nConsider a concrete example: you are traveling through an intersection on a green light when another driver runs the red and strikes you. If the other driver can demonstrate that your speed exceeded the posted limit by even a small margin, or that some other minor action contributed to the accident, an Alabama court can find you contributorily negligent and bar your recovery entirely. This is not a theoretical risk. Defense attorneys in contributory negligence states routinely argue contributory fault as a complete bar to liability.\n\nThis harsh outcome makes thorough accident documentation especially important in Alabama. Photographs of the scene, witness contact information, dashcam footage, and contemporaneous police reports all become critical evidence. Because the tort system may not provide recovery even in accidents where the other driver was overwhelmingly responsible, your own medical payments coverage and uninsured motorist coverage serve as the primary financial protection for your injuries, independent of any fault determination.",
    umMandatory: false,
    umExplain:
      "Alabama insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Given Alabama's contributory negligence rule, which can bar your recovery from an at-fault driver if you had any share of fault, UM coverage provides an especially important backstop. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident regardless of the fault question. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at meaningful limits is particularly advisable in a contributory negligence state.",
    creditExplain: creditExplainPermitted("Alabama"),
    recommendedExplain:
      "Because Alabama's contributory negligence rule may prevent you from recovering from an at-fault driver if you had any share of fault, carrying robust first-party coverage is the most important planning decision for Alabama drivers. Medical payments coverage, typically available in $1,000 to $10,000 increments, pays your own medical bills immediately after an accident regardless of how fault is later determined. This coverage costs very little relative to the protection it provides and is worth carrying at a meaningful limit. Uninsured motorist coverage protects you when the other driver has no insurance, which is a direct recovery mechanism that sidesteps the tort system entirely.\n\nOn the liability side, most advisors recommend at least 100/300/100, which provides $100,000 per person and $300,000 per accident in bodily injury coverage plus $100,000 for property damage you cause. The Alabama minimum of 25/50/25 is particularly inadequate for drivers with assets, since any accident that results in a judgment above your liability limits makes you personally responsible for the balance. Alabama courts can garnish wages and place liens on property to collect unpaid civil judgments. If your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle worth more than a few thousand dollars, the cost of replacing or repairing a totaled vehicle out of pocket typically far exceeds the annual premium difference.",
    closingSections: [
      rateSectionAtFault("Alabama", "Birmingham, Huntsville, and Mobile produce higher premiums than rural Alabama due to accident frequency, vehicle theft rates, and repair costs in urban markets. Alabama's overall premium level is moderate relative to the national average."),
      sr22Section("Alabama", "Department of Revenue Motor Vehicle Division"),
    ],
    ...ctaFields("Alabama"),
  },

  // ── Arkansas ──────────────────────────────────────────────────────────────
  {
    name: "Arkansas",
    slug: "arkansas",
    ...stateImage("arkansas", "Arkansas rural highway"),
    metaTitle: metaTitleAtFault("Arkansas"),
    metaDescription: metaDescriptionAtFault("Arkansas", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage must be offered.",
    callout:
      "Arkansas requires 25/50/25 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage. Arkansas is an at-fault state.",
    statute: "Arkansas Code Annotated Section 27-22-104",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Arkansas results in a fine and license suspension. You must carry proof of financial responsibility at all times and present it to law enforcement upon request. Reinstating a suspended license requires proof of current coverage and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other violations and must remain on file for three years.",
    faultExplain:
      "Arkansas is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold, which means the party primarily responsible for an accident bears financial liability to the other. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, but that compensation is reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party.\n\nTo illustrate how this works in practice: suppose you are involved in a two-car accident and a jury finds you 30 percent at fault while the other driver was 70 percent at fault. If your total damages are $50,000, you can recover $35,000, the full amount reduced by your 30 percent share. If the jury had found you 55 percent at fault, you would recover nothing at all. The threshold at 51 percent creates a meaningful line below which you retain partial recovery rights.\n\nOn the liability side, if you cause an accident and your limits are insufficient to cover all resulting damages, you are personally responsible for the balance above your policy limits. Arkansas courts can enforce civil judgments against wages, bank accounts, and property. The state minimum 25/50/25 limits may be quickly exhausted in a serious accident involving significant injuries or a newer vehicle, a hospitalization alone can exceed the $25,000 per person bodily injury limit. Carrying limits well above the state minimum meaningfully reduces the personal financial exposure that follows an at-fault accident.",
    umMandatory: false,
    umExplain:
      "Arkansas insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation for Arkansas drivers.",
    creditExplain: creditExplainPermitted("Arkansas"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Arkansas, $100,000 per person and $300,000 per accident in bodily injury coverage plus $100,000 for property damage. This is a meaningful step above the state minimum and provides real protection against a serious judgment without dramatically increasing your premium. The incremental cost of moving from 25/50/25 to 100/300/100 is often smaller than drivers expect, particularly if you bundle multiple policies.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender with a maximum deductible typically specified in the loan or lease terms. For vehicles you own outright, compare the annual collision and comprehensive premium against your vehicle's current market value. A practical guideline: if the combined annual premium exceeds 10 percent of the vehicle's value, the coverage may not be cost-effective on that specific vehicle.\n\nArkansas's tornado and hail exposure is significant, the state sits in a corridor of frequent severe weather that produces high comprehensive claims, especially for hail damage. Comprehensive coverage pays for weather-related damage, and given Arkansas's storm frequency, carrying it on any vehicle with meaningful remaining value is advisable. Adding UM and UIM at limits matching your liability coverage provides the most complete protection against Arkansas's uninsured driver population, since the financial consequences of being hit by an uninsured driver without UM coverage fall entirely on you.",
    closingSections: [
      rateSectionAtFault("Arkansas", "Little Rock and the northwest Arkansas corridor around Fayetteville and Bentonville produce higher premiums than rural parts of the state due to accident frequency and repair costs. Severe weather, including hail and tornadoes, is a significant driver of comprehensive claims in Arkansas."),
      sr22Section("Arkansas", "Office of Driver Services"),
    ],
    ...ctaFields("Arkansas"),
  },

  // ── Kentucky ──────────────────────────────────────────────────────────────
  {
    name: "Kentucky",
    slug: "kentucky",
    ...stateImage("kentucky", "Kentucky bluegrass highway"),
    metaTitle: "Car Insurance in Kentucky | Choice No-Fault Requirements and Free Quotes",
    metaDescription:
      "Kentucky is a choice no-fault state with 25/50/25 liability plus $10,000 PIP. Drivers can reject no-fault in writing. Learn the requirements and compare free quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 + $10k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "Drivers may reject no-fault coverage in writing and operate under the tort system.",
    callout:
      "Kentucky requires 25/50/25 liability coverage plus $10,000 in Personal Injury Protection. Kentucky is a choice no-fault state, drivers may sign a written rejection of PIP and operate under the traditional tort system.",
    statute: "Kentucky Revised Statutes Section 304.39-110",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
      { label: "$10,000", amount: "Personal Injury Protection (default, can be rejected)" },
    ],
    penaltyNote:
      "Driving without insurance in Kentucky results in a fine, license suspension, and vehicle registration suspension. Reinstating your driving privileges requires proof of current coverage and payment of reinstatement fees. Kentucky requires you to carry proof of financial responsibility at all times. SR-22 filing is required after DUI convictions and certain other violations and must remain on file for three years.",
    faultExplain:
      "Kentucky is a choice no-fault state, which means every driver makes a fundamental election at the time of policy purchase about how their rights after an accident will work. By default, you remain in the no-fault system: your own $10,000 PIP coverage pays your medical expenses and a portion of lost wages after any accident regardless of who caused it. Your PIP coverage responds quickly and does not require a fault determination before paying, which means your medical bills get covered while any insurance investigation or legal dispute is still ongoing.\n\nDrivers who want to preserve the unlimited right to sue the at-fault driver for pain and suffering, without any threshold requirement, can sign a written rejection of PIP at the time of policy purchase. This election opts you out of the no-fault system entirely and positions you to operate under traditional tort rules, where you can pursue a claim against the at-fault driver for the full range of damages from any qualifying accident. The trade-off is that you lose the immediate PIP payment and must go through the liability claim process to recover medical expenses.\n\nIf you remain in the default no-fault system, you can step outside it and bring a liability claim against an at-fault driver only if your medical expenses exceed $1,000 or your injuries involve permanent disfigurement, fracture, or death. Below that threshold, your PIP is your primary recovery mechanism and the tort system is restricted. Most Kentucky drivers remain in the no-fault system because PIP provides reliable and immediate medical coverage without requiring any fault determination. The $10,000 limit is modest for serious accidents, however, so increasing your PIP limit and carrying medical payments coverage above it is worth considering.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical expenses beyond $10,000 without additional coverage",
      "Pain and suffering for injuries below the no-fault threshold (unless you rejected PIP)",
    ],
    umMandatory: false,
    umExplain:
      "Kentucky insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage above what PIP covers when an at-fault uninsured driver causes a serious accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your full losses. Carrying both at meaningful limits is the standard recommendation for Kentucky drivers.",
    creditExplain: creditExplainPermitted("Kentucky"),
    recommendedExplain:
      "For most drivers, remaining in Kentucky's default no-fault system provides straightforward access to immediate medical coverage after an accident. However, if you have health insurance that covers accident-related injuries comprehensively, rejecting PIP in writing can reduce your premium while your health plan handles accident-related medical costs. Most advisors recommend carrying at least 100/300/100 liability regardless of which tort option you choose, the state minimum 25/50/25 liability can be quickly consumed by a serious accident.\n\nKentucky's winding rural roads, mountain terrain in the eastern part of the state, and variable weather make collision coverage worth carrying on vehicles with meaningful value. Kentucky experiences significant flooding, particularly in eastern Kentucky's narrow creek valleys, which is a comprehensive risk. Tornadoes and severe thunderstorms affect the western and central portions of the state and can produce hail damage to vehicles.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, compare the annual premium against your vehicle's current market value. Adding UM and UIM coverage at meaningful limits provides protection for serious accidents that exceed your PIP limit when an uninsured or underinsured driver is responsible, filling the most significant gap in a minimum-coverage Kentucky policy.",
    closingSections: [
      rateSectionAtFault("Kentucky", "Louisville and Lexington produce higher premiums than rural Kentucky due to accident frequency and repair costs. Kentucky's overall premium level is moderate relative to the national average."),
      sr22Section("Kentucky", "Transportation Cabinet Driver Licensing"),
    ],
    ...ctaFields("Kentucky"),
  },

  // ── Louisiana ─────────────────────────────────────────────────────────────
  {
    name: "Louisiana",
    slug: "louisiana",
    ...stateImage("louisiana", "Louisiana highway New Orleans"),
    metaTitle: "Car Insurance in Louisiana | State Minimums and Free Quotes",
    metaDescription:
      "Louisiana requires 15/30/25 liability coverage and has among the highest average premiums in the country. Learn the requirements and compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "15/30/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Among the highest average premiums in the country.",
    callout:
      "Louisiana requires 15/30/25 liability coverage: $15,000 per person for bodily injury, $30,000 per accident, and $25,000 for property damage. Louisiana is an at-fault state with among the highest average insurance premiums in the country.",
    statute: "Louisiana Revised Statutes Section 32:900",
    minCoverage: [
      { label: "$15,000", amount: "bodily injury per person" },
      { label: "$30,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Louisiana results in a fine of $500 to $1,000, license suspension, and vehicle impoundment. Reinstatement requires proof of current coverage, payment of reinstatement fees, and an SR-22 filing that must remain on file for three years. Louisiana enforces compliance through an electronic verification system that cross-references vehicle registrations with active policy data. The state has one of the highest rates of uninsured drivers in the country, which is a significant driver of elevated premiums for all policyholders.",
    faultExplain:
      "Louisiana is an at-fault state that applies a pure comparative negligence rule, meaning you can recover compensation from another driver even if you were predominantly at fault, though your recovery is reduced proportionally by your percentage of fault. If a jury finds you 80 percent at fault for an accident that caused you $100,000 in damages, you can still theoretically recover $20,000 from the other driver. This is more favorable than the modified comparative fault rules used in most states, where crossing a 50 or 51 percent threshold bars recovery entirely.\n\nWhat significantly distinguishes Louisiana's insurance environment from most other states is its civil law system, which derives from the Napoleonic Code rather than English common law. Louisiana courts and jury behavior reflect this distinct legal tradition, and the state's tort environment has historically generated higher claim costs, more litigation, and larger average jury awards than comparable states. These systemic legal costs are distributed across all policyholders in Louisiana through higher premiums, which is one of the primary reasons Louisiana consistently ranks among the most expensive states for auto insurance despite having one of the lowest bodily injury minimums in the country.\n\nThe $15,000 per person bodily injury minimum is among the lowest of any state in the United States. It can be completely exhausted by a single emergency room visit for a moderately serious injury, leaving the at-fault driver personally responsible for all medical costs above that limit. If you cause a serious accident in Louisiana and carry only the state minimum, your personal financial exposure can be substantial. Louisiana courts can enforce civil judgments against wages and property, and the state's active plaintiff's bar means judgments above minimum policy limits are pursued aggressively.",
    umMandatory: false,
    umExplain:
      "Louisiana insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. Given Louisiana's high rate of uninsured drivers and the elevated likelihood of encountering one in the state's busy urban corridors, UM coverage is an especially practical protection. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when the at-fault driver's policy is insufficient. Louisiana's high litigation environment means claims are more likely to be contested, making strong coverage especially valuable.",
    creditExplain: creditExplainPermitted("Louisiana"),
    recommendedExplain:
      "Louisiana's $15,000 per person bodily injury minimum is extremely low relative to the cost of serious accidents, a single hospitalization or surgery can exhaust it immediately. Most advisors strongly recommend increasing liability to at least 100/300/100. Louisiana's combination of high average premiums, frequent severe weather from hurricanes and flooding, and elevated litigation activity make adequate coverage even more important here than in most states.\n\nHurricane and tropical weather exposure is one of the most significant insurance considerations for Louisiana drivers. Flooding, wind damage, and storm surge from Gulf Coast hurricanes can damage or total vehicles that are parked, regardless of any at-fault accident. Comprehensive coverage handles all of these weather-related vehicle losses. Louisiana's flooding risk is not limited to coastal areas, rainfall-driven flooding affects inland parishes as well.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, comprehensive is particularly important given Louisiana's weather profile. Adding UM and UIM coverage is especially advisable given Louisiana's high rate of uninsured drivers, the state consistently ranks among the top states for uninsured motorists, which means the probability of encountering an at-fault uninsured driver on Louisiana roads is meaningfully higher than the national average.",
    closingSections: [
      {
        title: "How insurers determine your rate in Louisiana",
        body: "Louisiana insurers use your driving record, zip code, vehicle type, age, annual mileage, and credit-based insurance score to calculate your premium. New Orleans, Baton Rouge, and surrounding parishes consistently produce some of the highest auto insurance premiums in the country due to accident frequency, high litigation rates, vehicle theft, and weather-related claims from hurricanes and flooding. Rural Louisiana is priced lower but still above the national average because the state's legal and risk environment affects all policyholders. At-fault accidents and moving violations typically affect your rate for three to five years. Because price variation between carriers in Louisiana is significant, comparing quotes at renewal is especially valuable.",
      },
      sr22Section("Louisiana", "Office of Motor Vehicles"),
    ],
    ...ctaFields("Louisiana"),
  },

  // ── Mississippi ───────────────────────────────────────────────────────────
  {
    name: "Mississippi",
    slug: "mississippi",
    ...stateImage("mississippi", "Mississippi highway"),
    metaTitle: metaTitleAtFault("Mississippi"),
    metaDescription: metaDescriptionAtFault("Mississippi", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "One of the lowest average premiums in the Southeast.",
    callout:
      "Mississippi requires 25/50/25 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $25,000 for property damage. Mississippi is an at-fault state.",
    statute: "Mississippi Code Section 63-15-3",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Mississippi results in a fine and license suspension. You must carry proof of financial responsibility at all times and present it at any traffic stop or accident. Reinstating your license requires proof of current insurance and payment of reinstatement fees. SR-22 filing is required after certain violations and must remain on file for three years.",
    faultExplain:
      "Mississippi is an at-fault state that applies a pure comparative negligence rule, meaning you can recover compensation from another driver even if you were predominantly at fault for an accident, though your recovery is reduced proportionally by your percentage of fault. Unlike states with modified comparative fault rules that bar recovery if you exceed a 50 or 51 percent threshold, Mississippi's pure comparative system allows partial recovery regardless of how high your share of fault goes. If a jury finds you 75 percent responsible for an accident that caused you $60,000 in losses, you can still recover $15,000 from the other party.\n\nOn the liability side, if you cause an accident and your limits are insufficient to cover all resulting damages, you are personally responsible for the balance above your policy limits. Mississippi courts can enforce civil judgments through standard collection mechanisms including wage garnishment and property liens. The state minimum 25/50/25 limits can be exhausted by a single hospitalization in a serious accident, leaving you personally exposed to any judgment above those limits.\n\nMississippi's rural character and relatively low traffic density compared to more urbanized states contribute to a lower average accident frequency, which is one factor keeping the state's overall premium levels below the national average. However, rural accidents in Mississippi often involve higher speeds on open roads, which tends to increase accident severity when they do occur. Long distances between medical facilities in rural areas can also increase medical treatment costs for serious accident injuries.",
    umMandatory: false,
    umExplain:
      "Mississippi insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault driver has no insurance. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation for Mississippi drivers.",
    creditExplain: creditExplainPermitted("Mississippi"),
    recommendedExplain:
      "Mississippi is generally an affordable state for auto insurance, which makes raising your coverage above the state minimum relatively low-cost. The state minimum of 25/50/25 still falls short of what most drivers need in a serious accident, a hospitalization can exhaust the $25,000 per person bodily injury limit quickly. Most advisors recommend carrying at least 100/300/100 liability, which provides $100,000 per person and $300,000 per accident in bodily injury coverage plus $100,000 for property damage you cause to others.\n\nMississippi's exposure to severe weather including tornadoes and flooding makes comprehensive coverage particularly relevant. The state experiences significant tornado activity, especially in the central and northern portions, and flash flooding occurs statewide during heavy rain events. Comprehensive coverage handles weather-related damage to your vehicle including hail, falling trees, and flooding, none of which are covered by collision or liability coverage.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender and often specified at a maximum deductible. For vehicles you own outright, compare the annual cost of collision and comprehensive against your vehicle's current market value to determine if the coverage is cost-effective. Adding UM and UIM at limits matching your liability coverage fills the most significant gap in a minimum-coverage Mississippi policy.",
    closingSections: [
      rateSectionAtFault("Mississippi", "Jackson and the Gulf Coast produce higher premiums than rural Mississippi due to accident frequency and repair costs, though Mississippi's overall market is priced below the national average."),
      sr22Section("Mississippi", "Department of Public Safety"),
    ],
    ...ctaFields("Mississippi"),
  },

  // ── South Carolina ────────────────────────────────────────────────────────
  {
    name: "South Carolina",
    slug: "south-carolina",
    ...stateImage("south-carolina", "South Carolina coastal highway"),
    metaTitle: metaTitleAtFault("South Carolina"),
    metaDescription: metaDescriptionAtFault("South Carolina", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",
    callout:
      "South Carolina requires 25/50/25 liability coverage and mandatory uninsured motorist coverage at matching limits. South Carolina is an at-fault state.",
    statute: "South Carolina Code Section 38-77-140",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in South Carolina results in a fine, license plate suspension, and a reinstatement fee. Uninsured Vehicle Fees are assessed by the state for vehicles found to be operating without coverage. Reinstating your registration requires proof of current insurance and payment of all outstanding fees. SR-22 filing is required after DUI convictions and certain other serious violations.",
    faultExplain:
      "South Carolina is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, and that recovery is reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party.\n\nTo see how this plays out practically: if you are 40 percent at fault for an accident that caused you $50,000 in losses, you recover $30,000 from the other driver, your full damages reduced by 40 percent. If the fault determination comes back at 55 percent against you, your recovery is zero regardless of the other driver's 45 percent contribution to the accident. The 51 percent threshold creates a meaningful dividing line that defense attorneys in South Carolina frequently target.\n\nSouth Carolina's coastal geography creates additional insurance considerations beyond the standard at-fault framework. Drivers in the Myrtle Beach area, Charleston, and the barrier islands face elevated exposure to hurricane-related vehicle damage, flooding, and hail from coastal storms that are not addressed by liability coverage at all. Comprehensive coverage handles weather-related losses that standard liability coverage does not. If your liability limits are insufficient to cover all damages from an accident you caused, you are personally responsible for the balance above those limits, and South Carolina courts can enforce civil judgments against wages and assets.",
    umMandatory: true,
    umExplain:
      "South Carolina requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. This mandatory inclusion means that if you carry 100/300 liability, your policy must also include 100/300 in uninsured motorist coverage by default. UM coverage pays for your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. Underinsured motorist coverage fills the gap when an at-fault driver's policy is insufficient to cover your actual losses. Because South Carolina's mandatory UM must match your liability limits, increasing your liability automatically improves your UM protection.",
    creditExplain: creditExplainPermitted("South Carolina"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in South Carolina. Because mandatory UM must match your liability limits, raising your liability to 100/300 automatically brings your UM coverage to the same level, a single coverage decision that improves your protection in both directions.\n\nSouth Carolina's coastal geography creates specific coverage needs beyond the standard liability framework. Drivers in Charleston, Myrtle Beach, Hilton Head, and the barrier islands face elevated exposure to hurricane-force winds, storm surge flooding, and severe hail from tropical weather systems. None of these losses are covered by liability or collision insurance, comprehensive is the specific protection that handles weather-related vehicle damage. Given the regularity of severe coastal storms in South Carolina, comprehensive coverage is especially important for coastal market drivers.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, assess the annual premium against your vehicle's current market value. Medical payments coverage provides first-party medical protection on top of your liability and is worth considering for South Carolina drivers who want additional protection for their own injuries regardless of fault.",
    closingSections: [
      rateSectionAtFault("South Carolina", "Charleston, Columbia, and Myrtle Beach produce higher premiums than rural South Carolina due to accident frequency, vehicle theft rates, and the elevated risk of weather-related comprehensive claims along the coast."),
      sr22Section("South Carolina", "Department of Motor Vehicles"),
    ],
    ...ctaFields("South Carolina"),
  },

  // ── Tennessee ─────────────────────────────────────────────────────────────
  {
    name: "Tennessee",
    slug: "tennessee",
    ...stateImage("tennessee", "Tennessee highway Nashville"),
    metaTitle: metaTitleAtFault("Tennessee"),
    metaDescription: metaDescriptionAtFault("Tennessee", "25/50/15"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/15 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage must be offered.",
    callout:
      "Tennessee requires 25/50/15 liability coverage: $25,000 per person for bodily injury, $50,000 per accident, and $15,000 for property damage. Tennessee is an at-fault state.",
    statute: "Tennessee Code Annotated Section 55-12-102",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Tennessee results in a fine and license suspension. You must carry proof of financial responsibility at all times and present it to law enforcement upon request. Reinstating your license after a suspension requires proof of current coverage and payment of reinstatement fees. Tennessee uses an online insurance verification system to monitor active coverage status. SR-22 filing is required after DUI convictions and certain other violations.",
    faultExplain:
      "Tennessee is an at-fault state that applies a modified comparative fault rule with a 50 percent threshold, which is slightly more restrictive than the 51 percent threshold used in most comparative fault states. If your share of negligence is less than 50 percent, you can recover compensation from the other driver reduced proportionally by your fault percentage. If your negligence reaches or exceeds 50 percent, meaning you are equally at fault with the other driver, you cannot recover anything. This equal-fault bar is stricter than states where you must be more than 50 percent at fault before recovery is cut off.\n\nThe $15,000 property damage minimum is notably low. A moderate rear-end collision involving a newer vehicle can produce repair estimates well above $15,000, particularly for luxury vehicles, trucks, or SUVs with advanced safety features. If you cause an accident that produces $40,000 in property damage and your limit is $15,000, you are personally responsible for the remaining $25,000. Raising your property damage limit to $100,000 typically costs only a few dollars per month more than the state minimum and dramatically reduces your personal exposure in a serious property-damage accident.\n\nOn the bodily injury side, the $25,000 per person limit can be consumed by a single hospitalization or surgical procedure. Tennessee courts can enforce civil judgments against wages and property when an at-fault driver's insurance is insufficient to cover all damages. For most Tennessee drivers, the practical case for carrying 100/300/100 liability is straightforward, the premium difference from the state minimum is modest, and the financial protection gap it closes is significant.",
    umMandatory: false,
    umExplain:
      "Tennessee insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault driver has no insurance. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation for Tennessee drivers.",
    creditExplain: creditExplainPermitted("Tennessee"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Tennessee. The $15,000 property damage minimum is particularly low, raising property damage coverage to $100,000 typically adds only a few dollars per month to a Tennessee premium and dramatically reduces personal exposure in a serious property-damage accident. The 25/50 bodily injury minimum can also be consumed by a single hospitalization.\n\nTennessee's exposure to severe weather makes comprehensive coverage relevant for most drivers. The state sits in a region that experiences regular tornado and severe thunderstorm activity, particularly in west Tennessee and the Nashville basin. Hail from these storms can cause significant vehicle damage. Eastern Tennessee's Appalachian terrain brings its own weather variability including ice storms and flooding in mountain valleys.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle with meaningful value, Tennessee's weather exposure and the fast-growing urban markets around Nashville and Memphis make these coverages cost-effective for most drivers. Adding UM and UIM coverage at limits matching your liability coverage fills the most significant gaps in a minimum-coverage Tennessee policy, particularly given the state's substantial uninsured driver population.",
    closingSections: [
      rateSectionAtFault("Tennessee", "Nashville, Memphis, and Knoxville produce higher premiums than rural Tennessee due to accident frequency, vehicle theft rates, and repair costs in those urban markets. Nashville in particular has seen significant population growth that has increased traffic density and accident frequency in the metro area."),
      sr22Section("Tennessee", "Department of Safety and Homeland Security"),
    ],
    ...ctaFields("Tennessee"),
  },

  // ── Virginia ──────────────────────────────────────────────────────────────
  {
    name: "Virginia",
    slug: "virginia",
    ...stateImage("virginia", "Virginia highway Blue Ridge"),
    metaTitle: "Car Insurance in Virginia | State Minimums and Free Quotes",
    metaDescription:
      "Virginia requires 30/60/20 liability coverage and applies contributory negligence. Learn what is required, why UM coverage matters, and compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "30/60/20 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Contributory negligence state; uninsured motorist coverage is mandatory.",
    callout:
      "Virginia requires 30/60/20 liability coverage: $30,000 per person for bodily injury, $60,000 per accident, and $20,000 for property damage. Virginia applies contributory negligence and mandatory uninsured motorist coverage.",
    statute: "Code of Virginia Section 46.2-472",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$20,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Virginia eliminated its Uninsured Motor Vehicle fee option effective 2024, meaning all vehicles registered in Virginia must now carry the minimum required insurance. Driving without insurance results in license suspension and registration revocation. Reinstating driving privileges requires proof of current coverage, payment of reinstatement fees, and potentially SR-22 filing for three years. Virginia's mandatory insurance requirement is enforced through an electronic verification system linked to vehicle registrations.",
    faultExplain:
      "Virginia is an at-fault state but applies a contributory negligence rule, which is one of the strictest fault standards in the country and is used in only a handful of jurisdictions, Alabama, Maryland, Virginia, Washington DC, and North Carolina. Under contributory negligence, if you are found even one percent at fault for an accident, you are completely barred from recovering any compensation from the other driver regardless of how much more at fault they were. There is no proportional reduction or sliding scale as there would be under comparative negligence. You are either contributorily negligent or you are not, and if you are found to be even minimally at fault, your claim for the other driver's liability is extinguished entirely.\n\nThe practical consequence of this rule is significant. Consider a scenario where another driver runs a red light and strikes you broadside, but a witness testifies that you were traveling slightly above the posted speed limit. Under Virginia's contributory negligence rule, the court could find that your excess speed contributed to the accident even minimally, and that finding would bar your entire recovery against the other driver regardless of the fact that they ran the red light. Defense attorneys in contributory negligence jurisdictions routinely argue contributory fault specifically because it is such a powerful defense.\n\nThis makes thorough accident documentation especially critical in Virginia. Dashcam footage, witness contact information, photographs of the scene, road conditions, and traffic control devices, and a careful police report that accurately reflects what happened all become important evidence in any subsequent claim. Because the tort system can bar recovery even in accidents where you were minimally responsible, your own uninsured motorist coverage and medical payments coverage function as the most reliable first-party protections available to Virginia drivers, independent of any fault determination.",
    umMandatory: true,
    umExplain:
      "Virginia requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. This mandatory inclusion is especially significant in a contributory negligence state where the tort system can bar your recovery entirely if you had any share of fault. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident, regardless of the fault question for your own recovery. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your actual losses.",
    creditExplain: creditExplainPermitted("Virginia"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Virginia. Because mandatory UM must match your liability limits, increasing your liability to 100/300 automatically brings your UM coverage to the same level, a single coverage decision that simultaneously improves both your liability protection and your first-party UM recovery rights.\n\nMedical payments coverage provides an important additional safety net for your own injuries regardless of fault. Under Virginia's contributory negligence rule, the tort system can bar your recovery entirely if you had any share of fault, making first-party medical payments coverage particularly valuable, it pays your medical bills without requiring any fault determination or legal proceeding.\n\nVirginia's dense Northern Virginia suburbs and the Richmond and Hampton Roads corridors are high-accident areas where collision coverage is especially relevant. If your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle with meaningful value. Virginia's proximity to the Atlantic Coast gives it exposure to hurricane and tropical storm weather that can produce flooding and hail damage, comprehensive coverage addresses these weather-related losses.",
    closingSections: [
      rateSectionAtFault("Virginia", "Northern Virginia and the Washington DC suburbs consistently produce some of the highest premiums in the state due to traffic density, accident frequency, and vehicle repair costs. Richmond and Hampton Roads produce moderate premiums, while rural western Virginia is priced considerably lower."),
      sr22Section("Virginia", "Department of Motor Vehicles"),
    ],
    ...ctaFields("Virginia"),
  },

  // ── West Virginia ─────────────────────────────────────────────────────────
  {
    name: "West Virginia",
    slug: "west-virginia",
    ...stateImage("west-virginia", "West Virginia mountain road"),
    metaTitle: metaTitleAtFault("West Virginia"),
    metaDescription: metaDescriptionAtFault("West Virginia", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",
    callout:
      "West Virginia requires 25/50/25 liability coverage and mandatory uninsured motorist coverage at matching limits. West Virginia is an at-fault state.",
    statute: "West Virginia Code Section 17D-2A-1",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in West Virginia results in a fine and license suspension. Reinstating your driving privileges requires proof of current insurance and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other serious violations and must remain on file for three years. West Virginia requires you to carry proof of financial responsibility at all times.",
    faultExplain:
      "West Virginia is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, and that recovery is reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. The practical effect is that drivers in West Virginia who bear less than half the responsibility for an accident retain a proportionally reduced right to recover from the other party.\n\nWest Virginia's mountain terrain, winding two-lane rural highways, and winter weather create driving conditions that meaningfully differ from more urbanized states. Icy mountain roads, reduced visibility in fog and rain, and steep grades increase the severity of accidents when they do occur. The isolation of some West Virginia communities also means emergency response times and distances to trauma centers can be longer than in densely populated states, which affects both accident survivability and medical cost patterns.\n\nOn the financial side, if you cause an accident and your liability limits are insufficient to cover all resulting damages, you are personally responsible for the balance. West Virginia courts can enforce civil judgments through standard mechanisms including wage garnishment and property liens. The state minimum 25/50/25 limits can be exhausted in a moderate accident involving injuries, particularly when multiple people are hurt. Most insurance professionals in West Virginia recommend carrying at least 100/300/100 for this reason.",
    umMandatory: true,
    umExplain:
      "West Virginia requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays for your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your actual losses. Because mandatory UM must match your liability limits, raising your liability limits automatically improves your UM protection.",
    creditExplain: creditExplainPermitted("West Virginia"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in West Virginia. Because mandatory UM must match your liability limits, increasing your liability coverage automatically increases your UM protection in parallel, so raising to 100/300 improves both your liability coverage and your UM protection at once.\n\nWest Virginia's mountain terrain and weather create specific coverage considerations. The state's winding mountain highways experience ice, snow, and fog that increase both accident frequency and severity in winter months. Many mountain roads have limited guardrails and steep drop-offs, which means accidents in these areas can involve significant vehicle damage even at relatively low speeds. Collision coverage is especially relevant for drivers who regularly travel on mountain and rural roads in West Virginia.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle worth more than a few thousand dollars, West Virginia's terrain and weather create enough risk that the coverage is generally cost-effective relative to the potential loss. Medical payments coverage provides additional first-party protection for your own injuries and is worth considering for drivers who want protection independent of fault determination.",
    closingSections: [
      rateSectionAtFault("West Virginia", "Charleston and Huntington produce higher premiums than the rural mountain counties, though West Virginia's overall market is priced at or below the national average due to its low population density."),
      sr22Section("West Virginia", "Division of Motor Vehicles"),
    ],
    ...ctaFields("West Virginia"),
  },
];
