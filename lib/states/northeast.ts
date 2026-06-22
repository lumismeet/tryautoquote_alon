import type { StateInsuranceData } from "./_types";
import { creditExplainPermitted, creditExplainBanned, sr22Section, rateSectionAtFault, ctaFields, stateImage, metaTitleAtFault, metaDescriptionAtFault } from "./_defaults";

export const northeast: StateInsuranceData[] = [
  // ── New York ──────────────────────────────────────────────────────────────
  {
    name: "New York",
    slug: "new-york",
    ...stateImage("new-york", "New York city traffic"),
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

    creditExplain: creditExplainPermitted("New York"),

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

    ...ctaFields("New York"),
  },

  // ── New Jersey ────────────────────────────────────────────────────────────
  {
    name: "New Jersey",
    slug: "new-jersey",
    ...stateImage("new-jersey", "New Jersey highway"),
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

    ...ctaFields("New Jersey"),
  },

  // ── Pennsylvania ──────────────────────────────────────────────────────────
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    ...stateImage("pennsylvania", "Pennsylvania highway"),
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

    creditExplain: creditExplainPermitted("Pennsylvania"),

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

    ...ctaFields("Pennsylvania"),
  },

  // ── Connecticut ───────────────────────────────────────────────────────────
  {
    name: "Connecticut",
    slug: "connecticut",
    ...stateImage("connecticut", "Connecticut countryside highway"),
    metaTitle: metaTitleAtFault("Connecticut"),
    metaDescription: metaDescriptionAtFault("Connecticut", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",
    callout:
      "Connecticut requires 25/50/25 liability coverage and mandatory uninsured motorist coverage at matching limits. Connecticut is an at-fault state.",
    statute: "Connecticut General Statutes Section 38a-335",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Connecticut results in a fine and license suspension. You must carry proof of insurance at all times and present it at any traffic stop or accident. Reinstating your license after a suspension requires proof of current coverage, payment of reinstatement fees, and an SR-22 filing that must remain on file for three years in some cases. Connecticut enforces coverage through an electronic verification system linked to vehicle registration data.",
    faultExplain:
      "Connecticut is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. This threshold is important because it means a driver who is equally at fault, exactly 50 percent, retains a right to partial recovery, while a driver found even one percentage point more responsible loses all recovery.\n\nConnecticut's geography creates a distinctive driving environment. Southwestern Connecticut, particularly Fairfield County and the I-95 corridor, is part of the New York City metropolitan area and experiences some of the highest traffic densities in New England. The combination of heavy commuter traffic, urban congestion, and a road network that predates modern highway design in many towns creates conditions that generate higher accident frequency than less congested states. Accident severity is also elevated in Connecticut because the high vehicle values in the state mean property damage costs tend to be higher than average.\n\nIf you cause an accident in Connecticut that results in damages exceeding your liability limits, you are personally responsible for the balance. Connecticut courts can pursue civil judgments through standard collection mechanisms. The $25,000 per person bodily injury minimum can be consumed by a single hospitalization, and the $25,000 property damage limit may not cover the full repair cost of many newer vehicles. This is why most Connecticut insurance advisors recommend liability limits significantly above the state minimum.",
    umMandatory: true,
    umExplain:
      "Connecticut requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your actual losses. Because mandatory UM must match your liability limits, increasing your liability to 100/300 automatically raises your UM to the same level.",
    creditExplain: creditExplainPermitted("Connecticut"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Connecticut. Because UM must match your liability limits, raising liability to 100/300 also automatically raises your UM coverage to the same level. Connecticut's minimum 25/50/25 liability can be exhausted by a single hospitalization in a serious accident, the incremental premium cost of moving to 100/300/100 is modest relative to the additional protection it provides.\n\nConnecticut's winters make collision coverage particularly relevant. Ice, slush, and packed snow on New England roads contribute to a higher rate of single-vehicle accidents and multi-car pile-ups than in warmer states. Comprehensive coverage addresses hail, flooding from nor'easters and tropical storms, and vehicle theft, all of which are meaningful risks in Connecticut's coastal and urban markets.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, compare the annual premium against your vehicle's current market value. Medical payments coverage, available in amounts from $1,000 to $10,000, pays your own medical bills immediately after an accident regardless of fault, which is valuable in an at-fault state where compensation from the other driver may take months to resolve. For most Connecticut drivers with meaningful assets, carrying 100/300/100 liability, UM/UIM, collision, comprehensive, and medical payments provides the most complete protection available.",
    closingSections: [
      rateSectionAtFault("Connecticut", "Fairfield County and the Hartford and New Haven metro areas produce higher premiums than rural Connecticut due to accident frequency, vehicle theft, and repair costs. Connecticut's overall premium level is above the national average, partly due to its proximity to New York City and the high cost of medical care and vehicle repairs in the northeast corridor."),
      sr22Section("Connecticut", "Department of Motor Vehicles"),
    ],
    ...ctaFields("Connecticut"),
  },

  // ── Delaware ──────────────────────────────────────────────────────────────
  {
    name: "Delaware",
    slug: "delaware",
    ...stateImage("delaware", "Delaware highway"),
    metaTitle: "Car Insurance in Delaware | No-Fault Requirements and Free Quotes",
    metaDescription:
      "Delaware requires 25/50/10 liability plus $15,000 in Personal Injury Protection. Learn how no-fault works in Delaware and compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/50/10 + $15k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "No-fault state with mandatory PIP.",
    callout:
      "Delaware requires 25/50/10 liability coverage plus $15,000 in Personal Injury Protection. Delaware is a no-fault state, your PIP covers your medical expenses and lost wages after an accident regardless of fault.",
    statute: "Delaware Code Title 21 Section 2118",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
      { label: "$15,000", amount: "Personal Injury Protection (PIP)" },
    ],
    penaltyNote:
      "Driving without insurance in Delaware results in a fine of $1,500 for a first offense, a two-month license suspension, and a restoration fee. A second offense raises the fine to $3,000 with a four-month suspension. Delaware requires you to carry proof of financial responsibility at all times. SR-22 filing may be required after DUI convictions and certain other violations.",
    faultExplain:
      "Delaware is a no-fault state. Your own PIP coverage pays for your medical expenses and a portion of lost wages after any accident regardless of who caused it, up to the $15,000 limit. The no-fault system means that after most accidents, your immediate medical expenses are handled through your own policy without a fault determination, which is faster and more predictable than waiting for a liability investigation to resolve.\n\nTo step outside the no-fault system and bring a tort claim against an at-fault driver for pain and suffering and other non-economic damages, your injuries must meet Delaware's verbal threshold, which requires permanent injury, significant disfigurement, or death. Minor soft tissue injuries that heal within a few weeks generally do not qualify for a tort claim outside the no-fault system. Delaware applies a modified comparative fault rule with a 51 percent threshold for tort claims that qualify above this threshold, meaning if you are 51 percent or more at fault for the accident, you cannot recover from the other party even if your injuries meet the verbal threshold.\n\nFor property damage, Delaware's at-fault framework applies immediately, your own collision coverage handles your vehicle repairs, and the at-fault driver's property damage liability covers the damage they caused to your car. The $10,000 property damage minimum is notably low relative to the cost of repairing or replacing newer vehicles. A moderate collision involving a contemporary vehicle can easily generate repair estimates exceeding $10,000, leaving the at-fault driver personally responsible for anything above their property damage limit.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical costs beyond $15,000 in a serious accident",
      "Pain and suffering for injuries below the no-fault threshold",
    ],
    umMandatory: false,
    umExplain:
      "Delaware insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes a serious accident that exceeds your PIP limit. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Carrying UM and UIM at meaningful limits is advisable for Delaware drivers who want complete protection.",
    creditExplain: creditExplainPermitted("Delaware"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Delaware and increasing PIP above the $15,000 minimum if your health insurance does not comprehensively cover accident-related injuries. The $10,000 property damage minimum is especially low relative to current vehicle values, raising property damage coverage to $100,000 typically costs only a few dollars per month more and dramatically reduces your personal exposure in any accident involving a newer vehicle.\n\nDelaware's location in the northeastern corridor means its roads carry significant through-traffic including commercial trucks traveling between major East Coast cities. Interstate 95, which bisects Delaware, is one of the most heavily trafficked interstate corridors in the country, and the combination of through traffic and local commuters creates sustained accident pressure. The Newark and Wilmington areas produce the highest accident rates in the state.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle worth more than a few thousand dollars, Delaware's active road network and winter weather create enough collision risk to justify it. Adding UM and UIM coverage at limits matching your liability coverage provides the most complete protection available in Delaware's no-fault framework, particularly for serious accidents that exceed your PIP limit and require recourse against an at-fault driver's coverage.",
    closingSections: [
      rateSectionAtFault("Delaware", "Wilmington and the New Castle County area produce higher premiums than rural Sussex and Kent counties due to higher traffic density, accident frequency, and vehicle theft rates. Delaware's overall market is priced above the national average, partly due to its dense road network and proximity to the Philadelphia metro area."),
      sr22Section("Delaware", "Division of Motor Vehicles"),
    ],
    ...ctaFields("Delaware"),
  },

  // ── Washington DC ─────────────────────────────────────────────────────────
  {
    name: "Washington DC",
    slug: "washington-dc",
    ...stateImage("washington-dc", "Washington DC capitol highway"),
    metaTitle: "Car Insurance in Washington DC | Requirements and Free Quotes",
    metaDescription:
      "Washington DC requires 25/50/10 liability and mandatory uninsured motorist coverage. DC applies contributory negligence. Learn the requirements and compare free quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/50/10 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Contributory negligence jurisdiction; uninsured motorist coverage is mandatory.",
    callout:
      "Washington DC requires 25/50/10 liability coverage and mandatory uninsured motorist coverage. DC applies contributory negligence, one of the strictest fault standards in the country.",
    statute: "DC Code Section 31-2406",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Washington DC results in a fine and license suspension. DC requires continuous coverage for any registered vehicle. Reinstating your driving privileges requires proof of current insurance, payment of reinstatement fees, and resolution of any outstanding suspension. DC's Department of Motor Vehicles cross-references vehicle registrations with active insurance data to enforce the continuous coverage requirement.",
    faultExplain:
      "Washington DC is an at-fault jurisdiction that applies a contributory negligence rule, one of the strictest fault standards in the country used in only a handful of jurisdictions, Alabama, Maryland, Virginia, North Carolina, and Washington DC. Under contributory negligence, if you are found even one percent at fault for an accident, you are completely barred from recovering any compensation from the other party regardless of how much more at fault they were. There is no proportional reduction as there would be under comparative negligence; the bar is absolute. A finding of any contributory fault extinguishes your claim entirely.\n\nWashington DC's driving environment makes this rule particularly significant. DC has extremely dense traffic, heavy pedestrian crossings, a complex grid with traffic circles, significant bicycle traffic, and some of the busiest intersections in the country. In this environment, the circumstances of any accident are often contested, and establishing that you had zero contributing fault can be genuinely difficult. Defense attorneys in contributory negligence jurisdictions specifically look for any minor traffic infraction, speed variance, or driving choice that can be characterized as contributing to an accident, because a successful contributory negligence argument completely bars the plaintiff's recovery.\n\nThis dynamic makes thorough documentation even more important in DC than in most places. Dashcam footage, witness accounts, traffic camera footage requests, and accurate police reports are all more valuable here than in a comparative fault state. Because the tort system can bar your recovery entirely even when the other driver was predominantly at fault, your own medical payments coverage and mandatory UM coverage serve as the most reliable financial protections available to DC drivers, since they pay regardless of how fault is allocated.",
    umMandatory: true,
    umExplain:
      "Washington DC requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. This mandatory UM requirement is especially significant in a contributory negligence jurisdiction where your own tort recovery may be completely barred if you had any share of fault. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident regardless of the fault question for tort recovery. Because UM must match your liability limits, increasing your liability to 100/300 automatically raises your UM to the same level.",
    creditExplain: creditExplainPermitted("Washington DC"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Washington DC. Because mandatory UM must match your liability limits, raising liability to 100/300 also automatically raises your UM coverage to the same level. Medical payments coverage provides an important backstop for your own injuries regardless of fault, which is especially valuable under DC's contributory negligence rule, where the tort system may bar your recovery entirely even when the other driver was primarily responsible.\n\nWashington DC's dense urban environment also makes vehicle theft and vandalism more common than in suburban or rural markets. Comprehensive coverage handles theft, vandalism, and weather-related damage including flooding from heavy storms and hail. Given that DC's northeast storm exposure can produce significant weather events, comprehensive coverage is a practical protection for vehicles parked on city streets.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, collision and comprehensive are worth carrying on any vehicle with remaining value, particularly given DC's elevated vehicle theft rates compared to suburban Virginia and Maryland. For most DC drivers, a complete policy of 100/300/100 liability, UM at matching limits, collision, comprehensive, and medical payments provides the broadest protection available and accounts for both the contributory negligence rule and the urban risk environment.",
    closingSections: [
      rateSectionAtFault("Washington DC", "Washington DC consistently produces some of the highest auto insurance premiums in the country due to extremely high traffic density, accident frequency, vehicle theft rates, and the elevated cost of medical care and vehicle repairs in the metro area. Premiums in DC proper are substantially higher than in suburban Maryland and Virginia."),
      sr22Section("Washington DC", "Department of Motor Vehicles"),
    ],
    ...ctaFields("Washington DC"),
  },

  // ── Maine ─────────────────────────────────────────────────────────────────
  {
    name: "Maine",
    slug: "maine",
    ...stateImage("maine", "Maine coastal highway"),
    metaTitle: metaTitleAtFault("Maine"),
    metaDescription: metaDescriptionAtFault("Maine", "50/100/25"),
    datePublished: "2026-06-22",
    minDisplay: "50/100/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Among the highest state minimum requirements in the country; UM mandatory.",
    callout:
      "Maine requires 50/100/25 liability coverage and mandatory uninsured motorist coverage. Maine's minimum requirements are among the highest in the country.",
    statute: "Maine Revised Statutes Title 29-A Section 1605",
    minCoverage: [
      { label: "$50,000", amount: "bodily injury per person" },
      { label: "$100,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Maine results in a fine and license suspension. Maine requires you to carry proof of financial responsibility at all times. Reinstating your license after a suspension requires proof of current coverage, payment of reinstatement fees, and SR-22 filing if required by the court. Maine operates an electronic insurance verification system that cross-references vehicle registrations with active policy data.",
    faultExplain:
      "Maine is an at-fault state that applies a modified comparative fault rule with a 50 percent threshold. If your negligence is less than the combined negligence of all other defendants in an accident, you can recover compensation from them, reduced proportionally by your share of fault. If your negligence equals or exceeds the other defendants' combined negligence, meaning you are at least as responsible as all other parties combined, you cannot recover anything. This threshold is slightly more restrictive than the 51 percent standard used in many states, since it bars recovery at the point of equal fault rather than requiring you to be more than half responsible.\n\nMaine's 50/100/25 minimum liability requirement is among the highest state minimums in the country, reflecting a policy choice by the Maine legislature to set baseline coverage at a level that provides genuinely useful protection rather than merely nominal compliance. The $50,000 per person bodily injury minimum is double or more what most other states require, and the $25,000 property damage minimum provides meaningful coverage for vehicle repairs.\n\nMaine's driving environment is shaped by its rural character, significant winter weather, moose population, and winding roads through forested terrain. Animal strikes, particularly moose collisions, are among the most serious and potentially fatal vehicle accidents in Maine, and these are handled by comprehensive coverage rather than liability coverage. Long distances between medical facilities in rural Maine can affect both emergency response times and the total cost of accident-related medical care. While Maine's traffic density is low relative to southern New England, the severity of accidents on rural highways tends to be elevated.",
    umMandatory: true,
    umExplain:
      "Maine requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when the at-fault driver's policy is insufficient. Because mandatory UM must match your liability limits, increasing your liability also automatically increases your UM protection.",
    creditExplain: creditExplainPermitted("Maine"),
    recommendedExplain:
      "Maine's mandatory minimums of 50/100/25 are already more protective than what most states require, but most advisors still recommend raising liability to at least 100/300/100 for drivers with meaningful assets to protect. Because mandatory UM must match your liability limits, raising liability to 100/300 also automatically raises your UM coverage to the same level.\n\nMaine's winter driving conditions make collision coverage especially relevant. Ice, packed snow, and black ice on rural roads and mountain passes contribute to accidents throughout the winter months. Collision coverage pays for your vehicle damage regardless of fault, which means you are not dependent on establishing another driver's liability before your vehicle can be repaired or replaced. This first-party payment is particularly valuable in rural Maine where accidents may involve single vehicles or occur on roads without witnesses.\n\nComprehensive coverage is important in Maine for two specific reasons beyond weather: moose collisions and the high deer population. Moose are among the largest land animals in North America, and a collision at highway speed is frequently catastrophic. These are comprehensive claims, not liability claims. Maine's deer population also creates significant collision risk, particularly at dawn and dusk on rural roads throughout the state.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle worth more than a few thousand dollars, Maine's wildlife and weather exposure make the coverage cost-effective on most vehicles.",
    closingSections: [
      rateSectionAtFault("Maine", "Portland and the southern coastal area produce higher premiums than rural northern Maine, though Maine's overall premium level is below the national average due to its low population density and relatively low accident frequency. Maine's harsh winters affect both collision claims and comprehensive claims for weather-related damage."),
      sr22Section("Maine", "Bureau of Motor Vehicles"),
    ],
    ...ctaFields("Maine"),
  },

  // ── Maryland ──────────────────────────────────────────────────────────────
  {
    name: "Maryland",
    slug: "maryland",
    ...stateImage("maryland", "Maryland highway Chesapeake"),
    metaTitle: "Car Insurance in Maryland | Requirements and Free Quotes",
    metaDescription:
      "Maryland requires 30/60/15 liability coverage, applies contributory negligence, and mandates uninsured motorist coverage. Learn the requirements and compare free quotes.",
    datePublished: "2026-06-22",
    minDisplay: "30/60/15 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Contributory negligence state; uninsured motorist coverage is mandatory.",
    callout:
      "Maryland requires 30/60/15 liability coverage, mandatory uninsured motorist coverage, and mandatory PIP. Maryland applies contributory negligence.",
    statute: "Maryland Transportation Article Section 17-103",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
      { label: "$2,500", amount: "Personal Injury Protection (mandatory minimum)" },
    ],
    penaltyNote:
      "Driving without insurance in Maryland results in a fine of $150 for a first offense and $7 per day for every day of lapsed coverage up to $2,500, plus a $150 restoration fee. Vehicles found to be uninsured are subject to registration cancellation. The Maryland Vehicle Administration cross-references registration data with insurance verification systems, and uninsured vehicles are flagged quickly. SR-22 filing is required after DUI convictions and certain other serious violations.",
    faultExplain:
      "Maryland is an at-fault state but applies a contributory negligence rule, which is one of the strictest fault standards in the country used in only a handful of jurisdictions, Alabama, Maryland, Virginia, Washington DC, and North Carolina. Under contributory negligence, if you are found even one percent at fault for an accident, you are completely barred from recovering any compensation from the other driver regardless of how much more at fault they were. Unlike comparative fault states where your recovery is proportionally reduced by your share of responsibility, contributory negligence operates as a complete bar: any finding of contributory fault eliminates your entire claim against the other driver.\n\nMaryland's dense road network, heavy suburban commuter traffic around Baltimore and Washington DC, and complex urban intersections create conditions where contested accident facts are common. Defense attorneys in Maryland's contributory negligence jurisdiction actively pursue arguments of contributory fault because a successful showing, even establishing minimal fault on the plaintiff's part, completely defeats the claim. This is not an abstract risk in Maryland's active litigation environment.\n\nTo address the harshness of this rule, Maryland requires all auto policies to include a minimum of $2,500 in PIP coverage, which pays your medical expenses regardless of how fault is determined. This mandatory first-party benefit provides an immediate payment mechanism that operates entirely outside the tort system. You can increase your PIP limit above $2,500 for additional protection, and most advisors recommend doing so. Because contributory negligence can eliminate your tort recovery entirely even when the other driver was overwhelmingly at fault, PIP, medical payments coverage, and mandatory UM coverage become the most reliable financial protections available to Maryland drivers.",
    umMandatory: true,
    umExplain:
      "Maryland requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. This requirement is especially important in a contributory negligence state where the tort system can bar your recovery entirely if you had any share of fault. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident regardless of the fault issue in tort. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because UM must match your liability limits, raising liability to 100/300 automatically raises UM to the same level.",
    creditExplain: creditExplainPermitted("Maryland"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Maryland and increasing PIP above the mandatory $2,500 minimum. Because mandatory UM must match your liability limits, raising liability to 100/300 also raises your UM coverage. Because contributory negligence can bar your tort recovery entirely, even when the other driver was primarily responsible, robust first-party coverages are especially critical in Maryland. PIP, medical payments coverage, and UM collectively provide a safety net that pays regardless of how fault is ultimately determined in a tort proceeding.\n\nMaryland's suburban corridors around Baltimore and Washington DC are among the busiest in the eastern United States. The Baltimore-Washington Parkway, I-695, I-270, and the Capital Beltway (I-495) are high-accident corridors with significant through-traffic from commercial trucks, commuters, and interstate travel. Accidents in these areas often involve complex multi-party fault questions that make Maryland's contributory negligence rule especially consequential.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle with meaningful value, Maryland's combination of weather, traffic density, and vehicle theft rates (particularly in urban Baltimore and DC suburbs) makes these coverages cost-effective on most vehicles. For most Maryland drivers, a complete policy including 100/300/100 liability, UM at matching limits, increased PIP, medical payments, collision, and comprehensive provides the most complete protection available given the state's contributory negligence rule.",
    closingSections: [
      rateSectionAtFault("Maryland", "The Baltimore metro area and Prince George's and Montgomery counties adjacent to Washington DC consistently produce some of the highest premiums in the state due to accident frequency, vehicle theft rates, and the elevated cost of medical care and repairs in the region. Rural western and eastern shore Maryland is priced considerably lower."),
      sr22Section("Maryland", "Motor Vehicle Administration"),
    ],
    ...ctaFields("Maryland"),
  },

  // ── Massachusetts ─────────────────────────────────────────────────────────
  {
    name: "Massachusetts",
    slug: "massachusetts",
    ...stateImage("massachusetts", "Massachusetts highway Boston"),
    metaTitle: "Car Insurance in Massachusetts | No-Fault Requirements and Free Quotes",
    metaDescription:
      "Massachusetts requires 20/40/5 liability plus $8,000 PIP, bans credit-based pricing, and mandates uninsured motorist coverage. Compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "20/40/5 + $8k PIP",
    faultSystem: "no-fault",
    creditBanned: true,
    indexNote: "Credit-based pricing is prohibited; uninsured motorist coverage is mandatory.",
    callout:
      "Massachusetts requires 20/40/5 liability plus $8,000 in Personal Injury Protection and mandatory uninsured motorist coverage. Massachusetts bans the use of credit scores in pricing auto insurance.",
    statute: "Massachusetts General Laws Chapter 90 Section 34A",
    minCoverage: [
      { label: "$20,000", amount: "bodily injury per person" },
      { label: "$40,000", amount: "bodily injury per accident" },
      { label: "$5,000", amount: "property damage per accident" },
      { label: "$8,000", amount: "Personal Injury Protection (PIP)" },
      { label: "$20,000/$40,000", amount: "uninsured motorist coverage (mandatory)" },
    ],
    penaltyNote:
      "Massachusetts requires continuous coverage for any registered vehicle and enforces this through a mandatory verification system. Allowing your policy to lapse results in registration revocation and license suspension. Driving an unregistered vehicle is a separate civil and criminal violation. Reinstating your license and registration requires proof of current insurance and payment of reinstatement fees. Massachusetts also requires all policies to include road accident benefits under the compulsory portion of the standard auto policy form.",
    faultExplain:
      "Massachusetts is a no-fault state. Your own PIP coverage pays your medical expenses and a portion of lost wages up to $8,000 after any accident regardless of who caused it. Massachusetts uses a standard auto policy form prescribed by the state, which means the compulsory coverages are consistent across all insurers, what varies between carriers is pricing, optional coverage offerings, and the elective coverages beyond the compulsory minimum.\n\nPIP in Massachusetts pays 80 percent of your medical expenses and 75 percent of your lost wages up to the $8,000 aggregate limit. It also covers replacement services if your injuries prevent you from performing ordinary household activities. The $8,000 limit covers a wide range of moderate injuries but can be exhausted in a serious accident requiring surgery, hospitalization, or extended rehabilitation. Many drivers purchase additional medical payments coverage or increase their PIP limit for greater protection.\n\nTo step outside the no-fault system and bring a tort claim against an at-fault driver for pain and suffering and other non-economic damages, your accident-related medical expenses must exceed $2,000, or your injuries must include death, loss of a body member, permanent and serious disfigurement, loss of sight or hearing, or a fracture. Below these thresholds, the no-fault system handles your medical expenses and you cannot sue the other driver for non-economic damages regardless of their fault. Massachusetts uses a modified comparative fault rule with a 51 percent threshold for tort claims that meet these qualifying criteria, if your fault exceeds 50 percent, you cannot recover from the other party even on a qualifying claim.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical costs beyond $8,000 without additional coverage",
      "Pain and suffering for injuries below the no-fault threshold",
    ],
    umMandatory: true,
    umExplain:
      "Massachusetts requires all auto insurance policies to include uninsured motorist coverage at the same limits as the policyholder's bodily injury liability coverage. UM coverage pays your medical expenses and other losses when an at-fault uninsured driver causes a serious accident that exceeds what your PIP covers. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because mandatory UM must match your bodily injury limits, raising your liability automatically raises your UM protection.",
    creditExplain: creditExplainBanned(
      "Massachusetts",
      "Massachusetts General Laws Chapter 175 Section 193T"
    ),
    recommendedExplain:
      "Massachusetts's $5,000 property damage minimum is especially low given current vehicle values, a moderate collision with a newer vehicle can produce repair costs well above $5,000. Most advisors recommend raising liability to at least 100/300/100 and increasing PIP above the $8,000 minimum if your health coverage does not comprehensively cover accident-related injuries. Because mandatory UM must match your bodily injury limits, raising liability to 100/300 also automatically raises your UM coverage.\n\nBecause credit-based pricing is banned in Massachusetts, your driving record, years of licensed experience, vehicle type, and annual mileage are the primary factors you can directly influence to lower your rate. At-fault accidents in Massachusetts affect your rate for six years, which is longer than most states, an unusually long surcharge period that makes accident-free driving especially financially significant.\n\nBoston's dense urban traffic, complicated road layout, and high pedestrian and bicycle activity make collision coverage especially relevant for drivers in the metro area. Comprehensive coverage addresses theft and weather-related damage including winter storms, hail from nor'easters, and flooding, all meaningful risks in Massachusetts. If your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with meaningful remaining value. Massachusetts drivers who understand the six-year surcharge for at-fault accidents often choose higher deductibles, which reduces their premium, and reserve insurance for truly significant losses rather than small claims that would trigger long-term rate increases.",
    closingSections: [
      {
        title: "How insurers determine your rate in Massachusetts",
        body: "Massachusetts insurers use your driving record, years of licensed experience, zip code, vehicle type, annual mileage, and the coverage options you select to calculate your premium. Credit-based insurance scores are prohibited. Massachusetts uses a managed competition system where insurers file their own rates with the Division of Insurance, which has produced more carrier-level price variation than existed under the old fixed-rate system. Boston and surrounding metro areas produce higher premiums than rural Massachusetts due to accident frequency, vehicle theft rates, and the elevated cost of medical care and repairs. At-fault accidents and moving violations typically affect your rate for six years in Massachusetts, which is longer than most states. Because competition has increased, comparing quotes from multiple carriers at renewal is especially valuable.",
      },
      sr22Section("Massachusetts", "Registry of Motor Vehicles"),
    ],
    ...ctaFields("Massachusetts"),
  },

  // ── New Hampshire ─────────────────────────────────────────────────────────
  {
    name: "New Hampshire",
    slug: "new-hampshire",
    ...stateImage("new-hampshire", "New Hampshire mountain highway"),
    metaTitle: "Car Insurance in New Hampshire | No Mandate, Still a Good Idea",
    metaDescription:
      "New Hampshire does not require auto insurance but holds uninsured drivers personally liable for all damages. Learn the risks and compare free personalized quotes.",
    datePublished: "2026-06-22",
    minDisplay: "No mandate (25/50/25 recommended)",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "The only state in the country with no mandatory auto insurance requirement.",
    callout:
      "New Hampshire is the only state in the country that does not require drivers to carry auto insurance, but uninsured drivers are held personally financially responsible for all damages they cause. New Hampshire is an at-fault state.",
    statute: "New Hampshire RSA 264:3",
    minCoverage: [
      { label: "None required", amount: "New Hampshire does not mandate liability insurance" },
      { label: "25/50/25", amount: "minimum if you choose to purchase a policy (voluntary)" },
    ],
    penaltyNote:
      "New Hampshire does not mandate auto insurance, but drivers who cause accidents without coverage are personally liable for all resulting damages. The state can require proof of future financial responsibility after an at-fault accident or serious violation. If you cannot demonstrate the ability to pay, your license may be suspended until you file an SR-22 or provide other proof of financial responsibility. New Hampshire also offers an option to post a surety bond or cash deposit in lieu of insurance to satisfy the financial responsibility requirement after an accident.",
    faultExplain:
      "New Hampshire is an at-fault state. If you cause an accident, you are personally responsible for all resulting damages including the other driver's medical expenses, vehicle repair or replacement cost, and any pain and suffering claims that qualify under the tort system. Without liability insurance, those costs come directly from your personal assets or from a court judgment against your future wages. New Hampshire courts can enforce civil judgments through wage garnishment, bank levies, and property liens. There is no statutory cap on recoverable damages in most civil auto accident cases, which means a serious accident can produce a judgment that takes years or decades to satisfy.\n\nNew Hampshire applies a modified comparative fault rule with a 51 percent threshold for tort claims. If you are 50 percent or less at fault for an accident, you can recover compensation from the other driver reduced proportionally by your share of fault. If you are 51 percent or more at fault, you cannot recover from the other party. This comparative fault framework governs tort claims between drivers regardless of whether either driver is insured.\n\nThe financial risk of driving without insurance in New Hampshire is more concrete than many drivers realize. The average cost of a serious accident, one involving significant injuries, emergency treatment, surgery, and vehicle damage, routinely exceeds $50,000 to $200,000 or more when all costs are totaled. Without insurance, an at-fault driver in such an accident faces the full weight of those costs personally. New Hampshire's financial responsibility law requires you to demonstrate ability to pay after an at-fault accident, and if you cannot, your license will be suspended until the obligation is resolved.",
    umMandatory: false,
    umExplain:
      "If you purchase an auto insurance policy in New Hampshire, insurers must offer uninsured motorist coverage, and you may reject it in writing. UM coverage protects you when an at-fault uninsured driver causes an accident, which is a real risk in a state where insurance is not mandatory. Given that New Hampshire's lack of an insurance mandate increases the population of uninsured drivers on its roads, carrying UM coverage is a particularly practical protection for insured drivers.",
    creditExplain: creditExplainPermitted("New Hampshire"),
    recommendedExplain:
      "For any New Hampshire driver who owns a home, has retirement savings, or earns income, driving without insurance creates significant personal financial risk. A minimum policy with 25/50/25 liability, UM coverage, and medical payments coverage provides essential protection at a cost that is modest relative to the exposure it eliminates. Most advisors recommend at least 100/300/100 liability for drivers with meaningful assets to protect. If your vehicle is financed or leased, collision and comprehensive are required by your lender. Comprehensive coverage is especially relevant in New Hampshire given the state's winters and rural exposure to deer strikes.",
    closingSections: [
      rateSectionAtFault("New Hampshire", "Manchester and Concord produce higher premiums than rural northern New Hampshire, though the state overall is among the more affordable in the northeast due to its low population density and relatively low accident frequency. New Hampshire's lack of a mandatory insurance requirement does not eliminate your personal financial exposure, it just removes the legal requirement to carry coverage, not the economic consequences of an at-fault accident."),
      sr22Section("New Hampshire", "Division of Motor Vehicles"),
    ],
    ...ctaFields("New Hampshire"),
  },

  // ── Rhode Island ──────────────────────────────────────────────────────────
  {
    name: "Rhode Island",
    slug: "rhode-island",
    ...stateImage("rhode-island", "Rhode Island coastal highway"),
    metaTitle: metaTitleAtFault("Rhode Island"),
    metaDescription: metaDescriptionAtFault("Rhode Island", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Pure comparative fault state with no recovery bar.",
    callout:
      "Rhode Island requires 25/50/25 liability coverage. Rhode Island is an at-fault state that applies pure comparative fault rules.",
    statute: "Rhode Island General Laws Section 31-47-1",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Rhode Island results in a fine and license suspension. You must carry proof of insurance at all times and present it at any traffic stop or accident. Reinstating your license requires proof of current coverage and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other violations and must remain on file for three years.",
    faultExplain:
      "Rhode Island is an at-fault state that applies a pure comparative negligence rule. You can recover compensation from another driver even if you were predominantly at fault for the accident, but your recovery is reduced proportionally by your percentage of fault. Unlike states with modified comparative fault rules that bar recovery if your fault percentage crosses a threshold, Rhode Island's pure system allows partial recovery at any fault level. If a jury finds you 80 percent at fault for an accident that caused you $50,000 in losses, you can still recover $10,000 from the other driver. The same rule applies in reverse, a driver you injure can recover from you even if they were significantly at fault, which is why carrying adequate liability limits matters in pure comparative fault states.\n\nRhode Island is the smallest state in the country by area, but its combination of Providence's urban traffic, dense suburban road networks, and active coastal tourism creates driving conditions that produce a higher accident rate per mile of road than many larger states. The Providence metropolitan area accounts for the majority of accident claims in the state and consistently produces the highest insurance premiums. Interstate 95, which passes through Providence, is one of the busiest highway segments in New England and a frequent site of serious accidents.\n\nIf you cause an accident in Rhode Island and your liability limits are insufficient to cover all resulting damages, you are personally responsible for the balance. Rhode Island courts can enforce civil judgments against wages and property. The $25,000 per person bodily injury minimum can be exhausted by a moderate accident involving real injuries, making limits above the state minimum the standard recommendation for most drivers.",
    umMandatory: false,
    umExplain:
      "Rhode Island insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when the at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation for Rhode Island drivers.",
    creditExplain: creditExplainPermitted("Rhode Island"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Rhode Island. The $25,000 per person bodily injury minimum can be exhausted by a single hospitalization or surgical procedure, and the gap between a minimum-coverage policy and a serious accident is significant. The incremental cost of moving to 100/300/100 liability is typically modest and the protection difference is substantial.\n\nRhode Island's coastal location and winters create specific coverage needs. Winter weather in Rhode Island includes ice, snow, and nor'easters that produce significant vehicle damage. Coastal areas in and around Newport, Narragansett, and South County face exposure to tropical storms and hurricanes during late summer and fall, which can produce wind, flooding, and hail damage to vehicles. Comprehensive coverage addresses all of these weather-related losses.\n\nProvidence's vehicle theft rate is elevated relative to the state's overall risk profile, making comprehensive coverage especially relevant for vehicles parked in the city. Rhode Island is a small state but its urban center has disproportionate vehicle theft activity.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle with meaningful value. Adding UM and UIM at limits matching your liability coverage provides comprehensive protection against uninsured and underinsured drivers, filling the most significant remaining gap in a standard Rhode Island policy.",
    closingSections: [
      rateSectionAtFault("Rhode Island", "Providence and surrounding urban areas produce the highest premiums in the state due to accident frequency, vehicle theft rates, and repair costs. Rhode Island's premium level is above the national average for a state of its size, reflecting the relatively high cost of medical care and vehicle repairs in the northeast corridor."),
      sr22Section("Rhode Island", "Division of Motor Vehicles"),
    ],
    ...ctaFields("Rhode Island"),
  },

  // ── Vermont ───────────────────────────────────────────────────────────────
  {
    name: "Vermont",
    slug: "vermont",
    ...stateImage("vermont", "Vermont mountain highway"),
    metaTitle: metaTitleAtFault("Vermont"),
    metaDescription: metaDescriptionAtFault("Vermont", "25/50/10"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/10 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",
    callout:
      "Vermont requires 25/50/10 liability coverage and mandatory uninsured motorist coverage. Vermont is an at-fault state.",
    statute: "Vermont Statutes Title 23 Section 941",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Vermont results in a fine and license suspension. You must carry proof of financial responsibility at all times and present it at any traffic stop or accident. Reinstating your license requires proof of current coverage and payment of reinstatement fees. Vermont requires SR-22 filing after certain violations.",
    faultExplain:
      "Vermont is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. The threshold means that a driver found exactly 50 percent at fault retains a right to recover half of their damages, while a driver found 51 percent at fault recovers nothing.\n\nVermont's driving environment is shaped by its rural geography and four-season climate. Winter brings black ice, snow, and reduced visibility on mountain roads and rural two-lane highways. Spring thaw creates road surface damage and flooding risks. Fall's leaf season brings heavy tourism traffic and the hazard of wet leaves masking road markings. Vermont also has one of the highest rates of deer-vehicle collisions per capita in the country, particularly in the early morning and evening hours in rural areas. All of these are comprehensive coverage risks rather than liability risks, but they represent a significant portion of total vehicle losses in Vermont.\n\nIf you cause an accident in Vermont and your liability limits are insufficient to cover all resulting damages, you are personally responsible for the balance. Vermont courts can enforce civil judgments against wages and assets. The $10,000 property damage minimum is particularly low relative to current vehicle values, a moderate collision with a newer vehicle can easily produce repair or replacement costs exceeding $10,000. Most Vermont drivers should carry property damage limits significantly above the state minimum.",
    umMandatory: true,
    umExplain:
      "Vermont requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your actual losses. Because mandatory UM must match your liability limits, increasing your liability also automatically increases your UM protection.",
    creditExplain: creditExplainPermitted("Vermont"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Vermont. The $10,000 property damage minimum is especially low given current vehicle values, many contemporary vehicles cost significantly more than $10,000 to repair after even a moderate collision. Because mandatory UM must match your liability limits, raising liability to 100/300 also automatically raises your UM coverage to the same level.\n\nVermont's harsh winters and rural road network make collision coverage especially relevant. Ice, packed snow, and black ice on Vermont's winding mountain roads and rural state highways create sustained collision risk throughout the winter season. Vermont's winter weather is among the most demanding in the continental United States, and collision claims during winter months are elevated accordingly.\n\nComprehensive coverage is particularly relevant in Vermont for two reasons: deer collisions and winter weather events including ice storm damage to parked vehicles. Vermont has a substantial deer population, and deer-vehicle collisions are common throughout the state on rural roads. Ice storms, distinct from snowstorms, can cause falling branches and other debris to damage parked vehicles, which is handled under comprehensive rather than collision coverage.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle worth more than a few thousand dollars. Vermont's overall insurance market is priced below the national average, which means the incremental cost of upgrading to 100/300/100 and carrying full physical damage coverage is more affordable here than in many states.",
    closingSections: [
      rateSectionAtFault("Vermont", "Burlington and the surrounding Chittenden County area produce higher premiums than rural Vermont. Vermont's overall premium level is below the national average due to its low population density and relatively low accident frequency, but winter driving conditions and wildlife collision risk contribute meaningfully to comprehensive claims across the state."),
      sr22Section("Vermont", "Department of Motor Vehicles"),
    ],
    ...ctaFields("Vermont"),
  },
];
