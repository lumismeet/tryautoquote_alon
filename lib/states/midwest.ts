import type { StateInsuranceData } from "./_types";
import { creditExplainPermitted, sr22Section, rateSectionAtFault, ctaFields, stateImage, metaTitleAtFault, metaDescriptionAtFault } from "./_defaults";

export const midwest: StateInsuranceData[] = [
  // ── Illinois ──────────────────────────────────────────────────────────────
  {
    name: "Illinois",
    slug: "illinois",
    ...stateImage("illinois", "Illinois highway"),
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

    creditExplain: creditExplainPermitted("Illinois"),

    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Illinois, which provides $100,000 per person and $300,000 per accident in bodily injury coverage along with $100,000 for property damage. The state minimum property damage limit of $20,000 does not reflect the replacement cost of many newer vehicles. If your vehicle is financed or leased, your lender will require collision and comprehensive coverage in addition to liability. For vehicles you own outright, compare the annual cost of collision and comprehensive against ten percent of your car's current market value. Adding uninsured motorist coverage at matching limits to your liability policy provides important protection given Illinois's at-fault system and the number of uninsured drivers on state roads.",

    closingSections: [
      rateSectionAtFault(
        "Illinois",
        "The Chicago metropolitan area consistently produces some of the highest auto insurance premiums in the state due to accident frequency, vehicle theft rates, and medical costs in urban markets. Downstate Illinois and rural areas carry considerably lower base rates."
      ),
      sr22Section("Illinois", "Secretary of State"),
    ],

    ...ctaFields("Illinois"),
  },

  // ── Ohio ──────────────────────────────────────────────────────────────────
  {
    name: "Ohio",
    slug: "ohio",
    ...stateImage("ohio", "Ohio highway"),
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

    creditExplain: creditExplainPermitted("Ohio"),

    recommendedExplain:
      "Ohio is generally considered one of the more affordable states for auto insurance nationally, but the state minimum of 25/50/25 still falls short of what most drivers need in a serious accident. Most advisors recommend at least 100/300/100 liability for Ohio drivers. If your vehicle is financed or leased, collision and comprehensive are required by your lender regardless. For vehicles you own outright, Ohio's lower average premiums make it more cost-effective to carry collision and comprehensive on vehicles that would cost more than a few thousand dollars to repair. Adding UM and UIM coverage at matching limits is a straightforward way to fill the most significant gap in the minimum coverage package.",

    closingSections: [
      rateSectionAtFault(
        "Ohio",
        "Ohio is generally priced below the national average for auto insurance, and rates between urban areas like Columbus, Cleveland, and Cincinnati and rural Ohio are somewhat less extreme than in higher-cost states."
      ),
      {
        title: "SR-22 requirements in Ohio",
        body: "An SR-22 in Ohio is a certificate filed by your insurer with the Bureau of Motor Vehicles confirming you carry at least the state minimum liability coverage. You may be required to file an SR-22 after a DUI conviction, after a second or subsequent offense for driving without insurance, or after certain serious traffic violations. Under House Bill 29 which took effect April 2025, the SR-22 requirement for driving without insurance is one year. For DUI and other serious violations the requirement is typically three years. Your license remains suspended until the certificate is on file, and any policy lapse during the SR-22 period requires your insurer to notify the BMV immediately, which reinstates your suspension. Not every insurer handles SR-22 filings, so drivers who need one should look specifically for carriers experienced with non-standard auto policies in Ohio.",
      },
    ],

    ...ctaFields("Ohio"),
  },

  // ── Michigan ──────────────────────────────────────────────────────────────
  {
    name: "Michigan",
    slug: "michigan",
    ...stateImage("michigan", "Michigan highway"),
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

    ...ctaFields("Michigan"),
  },

  // ── Indiana ───────────────────────────────────────────────────────────────
  {
    name: "Indiana",
    slug: "indiana",
    ...stateImage("indiana", "Indiana highway Indianapolis"),
    metaTitle: metaTitleAtFault("Indiana"),
    metaDescription: metaDescriptionAtFault("Indiana", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "One of the more affordable states for auto insurance nationally.",
    callout:
      "Indiana requires 25/50/25 liability coverage. Indiana is an at-fault state and one of the more affordable states for auto insurance nationally.",
    statute: "Indiana Code Section 9-25-4-5",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Indiana results in a license suspension and a reinstatement fee. Indiana requires you to carry proof of financial responsibility at all times and present it at any traffic stop or accident. Indiana uses an electronic insurance verification system that allows the Bureau of Motor Vehicles to cross-reference vehicle registrations with active policy data. SR-22 filing is required after DUI convictions and certain other violations.",
    faultExplain:
      "Indiana is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. The 51 percent threshold means that a driver who is equally at fault with the other driver at exactly 50 percent retains a proportionally reduced right to recover, while a driver found just one percentage point more responsible loses all recovery.\n\nIndiana's driving environment spans a range of conditions from dense urban traffic in Indianapolis and its suburbs to rural two-lane state roads across the agricultural heartland of the state. Indianapolis consistently has the highest accident rates in the state due to traffic volume, interstate interchanges, and the urban accident patterns common to major Midwestern cities. Rural Indiana highways present different risks, higher speeds, deer crossings, agricultural equipment on roadways, and longer emergency response times when accidents do occur.\n\nIf you cause an accident in Indiana that results in damages exceeding your liability limits, you are personally responsible for the balance. Indiana courts can enforce civil judgments through wage garnishment and property liens. Indiana's at-fault system means that the party found responsible bears direct financial liability, and the $25,000 per person bodily injury minimum can be consumed by a single hospitalization. Carrying limits above the state minimum significantly reduces your personal financial exposure in a serious accident.",
    umMandatory: false,
    umExplain:
      "Indiana insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your full losses. Carrying both at limits matching your liability coverage is the standard recommendation for Indiana drivers.",
    creditExplain: creditExplainPermitted("Indiana"),
    recommendedExplain:
      "Indiana is generally an affordable state for auto insurance, which makes upgrading coverage above the state minimum relatively low-cost. Most advisors recommend carrying at least 100/300/100 liability, $100,000 per person and $300,000 per accident in bodily injury coverage plus $100,000 for property damage. The state minimum 25/50/25 can be consumed by a single hospitalization, and the difference in premium between minimum coverage and 100/300/100 is often smaller than drivers expect.\n\nIndiana's severe weather profile is a significant insurance consideration. The state experiences regular tornado activity, particularly in the southern and central portions. Hailstorms are common in Indiana, particularly in spring and early summer, and can produce significant vehicle damage across wide areas. Comprehensive coverage pays for both tornado and hail damage, which are among the most common comprehensive claims in Indiana.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle worth more than a few thousand dollars, Indiana's weather exposure makes the coverage particularly cost-effective. Adding UM and UIM at limits matching your liability coverage provides the most complete protection against Indiana's uninsured driver population, which is above the national average in some markets.",
    closingSections: [
      rateSectionAtFault("Indiana", "Indianapolis and the surrounding metro area produce higher premiums than rural Indiana due to accident frequency and repair costs, but Indiana's overall premium level is below the national average. The state is considered one of the more affordable markets in the midwest for auto insurance."),
      sr22Section("Indiana", "Bureau of Motor Vehicles"),
    ],
    ...ctaFields("Indiana"),
  },

  // ── Iowa ──────────────────────────────────────────────────────────────────
  {
    name: "Iowa",
    slug: "iowa",
    ...stateImage("iowa", "Iowa highway farm road"),
    metaTitle: metaTitleAtFault("Iowa"),
    metaDescription: metaDescriptionAtFault("Iowa", "20/40/15"),
    datePublished: "2026-06-22",
    minDisplay: "20/40/15 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Among the lowest average premiums in the country.",
    callout:
      "Iowa requires 20/40/15 liability coverage. Iowa is an at-fault state with among the lowest average auto insurance premiums in the country.",
    statute: "Iowa Code Section 321A.21",
    minCoverage: [
      { label: "$20,000", amount: "bodily injury per person" },
      { label: "$40,000", amount: "bodily injury per accident" },
      { label: "$15,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Iowa requires all drivers to carry minimum liability coverage and to carry proof of insurance at all times. Iowa uses a financial responsibility enforcement model rather than a continuous electronic monitoring system, which means the state does not automatically flag lapsed policies the way some states do, but coverage is still legally required before an accident, not just after one. Iowa Code Section 321.20B requires you to present proof of insurance upon request by law enforcement. Failure to provide proof at a traffic stop results in a fine and potential license suspension. If you are involved in an accident while uninsured and cannot demonstrate financial responsibility, your license will be suspended until proof of coverage and any applicable fees are paid. SR-22 filing is required after DUI convictions and certain other violations.",
    faultExplain:
      "Iowa is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. Under Iowa's system, a driver who is 35 percent at fault for an accident recovers 65 percent of their damages from the other driver, while a driver who is 60 percent at fault recovers nothing.\n\nIowa's driving environment is dominated by rural highways connecting small towns across the agricultural heartland of the Midwest. Long straight roads, limited lighting outside populated areas, and high speed limits on rural state highways are characteristics of Iowa's road network. Des Moines and the Cedar Rapids-Iowa City corridor account for the majority of urban accident claims. Rural Iowa has distinct risk factors: deer crossings are common and can cause serious collisions, agricultural equipment moves slowly on roadways during planting and harvest seasons, and grain elevator traffic creates congestion on rural routes in harvest months.\n\nIowa's low population density and relatively straightforward traffic patterns contribute to lower accident frequency and some of the most affordable insurance premiums in the country. If you cause an accident in Iowa that results in damages exceeding your liability limits, you are personally responsible for the balance. Iowa courts can enforce civil judgments against wages and property. The 20/40 bodily injury minimum can be quickly exhausted in any accident involving real injury, which is why carrying limits above the state minimum is the standard recommendation regardless of Iowa's favorable base pricing.",
    umMandatory: false,
    umExplain:
      "Iowa insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Carrying both at limits matching your liability coverage is the standard recommendation.",
    creditExplain: creditExplainPermitted("Iowa"),
    recommendedExplain:
      "Iowa is one of the most affordable states for auto insurance, but the 20/40/15 minimum still falls short of what most drivers need in a serious accident. The $20,000 per person bodily injury limit in particular can be exhausted by a single emergency room visit and short hospitalization, most advisors recommend at least 100/300/100 liability. Iowa's 51 percent modified comparative fault rule means carrying adequate liability coverage matters for both your protection against others and the protection you owe to drivers you may injure.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, Iowa's affordable premium market makes upgrading coverage particularly cost-effective. Iowa's severe weather including hail and tornadoes makes comprehensive coverage especially relevant, the state experiences regular spring and summer severe weather events that can produce widespread hail damage across entire regions in a single storm. Deer-vehicle collisions are among the most common comprehensive claims in Iowa, with peak risk in fall during deer breeding season. Carrying UM and UIM at limits matching your liability coverage provides the most complete protection against Iowa's uninsured driver population.",
    closingSections: [
      rateSectionAtFault("Iowa", "Des Moines and the Cedar Rapids and Iowa City corridor produce higher premiums than rural Iowa due to accident frequency and repair costs, though Iowa as a whole is priced well below the national average. Hail frequency and deer strike risk contribute to comprehensive claims across the state."),
      sr22Section("Iowa", "Department of Transportation"),
    ],
    ...ctaFields("Iowa"),
  },

  // ── Kansas ────────────────────────────────────────────────────────────────
  {
    name: "Kansas",
    slug: "kansas",
    ...stateImage("kansas", "Kansas highway plains"),
    metaTitle: "Car Insurance in Kansas | No-Fault Requirements and Free Quotes",
    metaDescription:
      "Kansas requires 25/50/25 liability plus $4,500 PIP, is a no-fault state, and mandates uninsured motorist coverage. Learn the requirements and compare free quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 + $4.5k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "No-fault state with mandatory PIP and mandatory UM coverage.",
    callout:
      "Kansas requires 25/50/25 liability coverage plus $4,500 in Personal Injury Protection and mandatory uninsured motorist coverage. Kansas is a no-fault state.",
    statute: "Kansas Statutes Annotated Section 40-3107",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
      { label: "$4,500", amount: "Personal Injury Protection (PIP) for medical expenses" },
      { label: "$900/month", amount: "PIP disability/rehabilitation benefits" },
      { label: "$25/day", amount: "PIP in-home services benefit" },
      { label: "$2,000", amount: "PIP funeral benefit" },
    ],
    penaltyNote:
      "Driving without insurance in Kansas results in a fine and license suspension. Reinstating your license requires proof of current coverage and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other serious violations. Kansas requires you to carry proof of financial responsibility at all times and present it at any traffic stop or accident.",
    faultExplain:
      "Kansas is a no-fault state. Your own PIP coverage pays for your medical expenses, a portion of lost wages, rehabilitation costs, in-home services, and funeral expenses after any accident regardless of who caused it. Kansas PIP benefits are structured with specific sub-limits for different categories of loss rather than a single aggregate limit: up to $4,500 for medical expenses, $900 per month for disability or rehabilitation income, $25 per day for replacement services such as household help, and $2,000 for funeral expenses.\n\nThese sub-limits mean that a serious accident requiring extended medical treatment can exhaust the PIP medical limit while other benefits remain available, or vice versa. Drivers who want broader PIP protection can increase individual sub-limits above the mandatory minimums for additional premium. Many Kansas drivers with good health insurance coordinate their benefits so that health insurance covers medical costs above the PIP limit, which can reduce the need for higher PIP medical coverage.\n\nTo step outside the no-fault system and bring a tort claim against an at-fault driver for pain and suffering and other non-economic damages, your injuries must result in death, permanent disfigurement, fracture of a load-bearing bone, or medical bills exceeding $2,000. Below these thresholds, the no-fault system handles your economic losses and the tort system is restricted for non-economic claims. Kansas applies a modified comparative fault rule with a 51 percent threshold for qualifying tort claims, if you are 51 percent or more at fault for the accident, you cannot recover from the other party even on a claim that meets the verbal threshold.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical costs beyond PIP limits without additional coverage",
      "Pain and suffering for injuries below the no-fault threshold",
    ],
    umMandatory: true,
    umExplain:
      "Kansas requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and other losses when an at-fault uninsured driver causes a serious accident that exceeds what your PIP covers. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because mandatory UM must match your liability limits, raising liability automatically raises your UM protection.",
    creditExplain: creditExplainPermitted("Kansas"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Kansas and increasing PIP above the statutory minimum sub-limits if your health coverage does not comprehensively cover accident injuries. Because mandatory UM must match your liability limits, raising liability to 100/300 also automatically raises your UM coverage to the same level.\n\nKansas's severe weather profile is one of the most distinctive insurance considerations in the state. Kansas sits squarely in Tornado Alley and experiences a high frequency of tornadoes and associated hailstorms. Vehicle hail damage from these storms can range from minor dimpling to catastrophic loss requiring total replacement. Hail claims are among the most common comprehensive insurance claims in Kansas, and in a severe storm, hundreds or thousands of vehicles can be damaged in a single event. Comprehensive coverage is the specific protection that handles hail and tornado-related vehicle damage.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry comprehensive on any vehicle with remaining value, Kansas's hail frequency makes it particularly cost-effective relative to the risk. Collision coverage is worth carrying on any vehicle worth more than a few thousand dollars. Adding UM and UIM at matching limits provides the most complete framework for Kansas drivers who want protection in the event of encountering an uninsured or underinsured driver.",
    closingSections: [
      {
        title: "How insurers determine your rate in Kansas",
        body: "Kansas insurers use your driving record, zip code, vehicle type, age, annual mileage, credit-based insurance score, and PIP selection to calculate your premium. Wichita and the Kansas City metro area produce higher premiums than rural western Kansas due to accident frequency and repair costs. Hail frequency across the state significantly influences comprehensive premiums, and Kansas consistently ranks among the top states for hail-related auto claims. At-fault accidents and moving violations typically affect your rate for three to five years. Comparing quotes from multiple carriers at renewal remains the most reliable way to find the best rate for your profile.",
      },
      sr22Section("Kansas", "Department of Revenue Division of Vehicles"),
    ],
    ...ctaFields("Kansas"),
  },

  // ── Minnesota ─────────────────────────────────────────────────────────────
  {
    name: "Minnesota",
    slug: "minnesota",
    ...stateImage("minnesota", "Minnesota highway Minneapolis"),
    metaTitle: "Car Insurance in Minnesota | No-Fault Requirements and Free Quotes",
    metaDescription:
      "Minnesota requires 30/60/10 liability plus $40,000 PIP and mandates uninsured motorist coverage. Learn how no-fault works in Minnesota and compare free quotes.",
    datePublished: "2026-06-22",
    minDisplay: "30/60/10 + $40k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "No-fault state with one of the highest mandatory PIP limits in the country.",
    callout:
      "Minnesota requires 30/60/10 liability coverage plus $40,000 in Personal Injury Protection and mandatory uninsured motorist coverage. Minnesota is a no-fault state.",
    statute: "Minnesota Statutes Section 65B.49",
    minCoverage: [
      { label: "$30,000", amount: "bodily injury per person" },
      { label: "$60,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
      { label: "$40,000", amount: "Personal Injury Protection ($20k medical, $20k non-medical)" },
    ],
    penaltyNote:
      "Driving without insurance in Minnesota results in a fine and license plate impoundment. Reinstating your plates requires proof of current coverage and payment of reinstatement fees. Minnesota's Driver and Vehicle Services cross-references vehicle registration data with insurance verification systems. SR-22 filing is required after DUI convictions and certain other violations and must remain on file for three years.",
    faultExplain:
      "Minnesota is a no-fault state with one of the most substantial mandatory PIP packages in the country. Your own PIP coverage pays for your medical expenses and other economic losses after any accident regardless of who caused it. Minnesota's $40,000 mandatory PIP benefit is split into two separate $20,000 sub-limits: $20,000 for medical expenses including treatment, hospitalization, and rehabilitation, and $20,000 for non-medical economic losses such as lost income, replacement services for household duties you cannot perform due to injury, and similar losses. These sub-limits are independent, so exhausting the medical portion does not reduce the non-medical benefit, and vice versa.\n\nThe practical effect is that Minnesota drivers have significant automatic coverage for both medical and economic consequences of accidents without needing to establish fault. This coverage kicks in immediately after an accident and pays while any fault investigation or litigation is still pending, which is one of the primary advantages of no-fault systems for injured drivers.\n\nTo step outside the no-fault system and bring a tort claim against an at-fault driver for pain and suffering and other non-economic damages, your accident-related medical expenses must exceed $4,000, or your injuries must include death, permanent disfigurement, or permanent injury. Below these thresholds, the no-fault system is your primary recovery mechanism and the tort system for non-economic claims is restricted. Minnesota applies a modified comparative fault rule with a 51 percent threshold for qualifying tort claims. The $10,000 property damage minimum is low relative to current vehicle values, and carrying higher property damage limits is the standard recommendation for all Minnesota drivers.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical costs beyond $20,000 without additional coverage",
      "Pain and suffering for injuries below the no-fault threshold",
    ],
    umMandatory: true,
    umExplain:
      "Minnesota requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and other losses when an at-fault uninsured driver causes a serious accident that exceeds what your PIP covers. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because mandatory UM must match your bodily injury limits, raising liability automatically raises your UM protection.",
    creditExplain: creditExplainPermitted("Minnesota"),
    recommendedExplain:
      "Minnesota's $40,000 mandatory PIP provides substantial immediate medical coverage, but the $10,000 property damage minimum is very low relative to current vehicle values. Most advisors recommend raising liability to at least 100/300/100, $100,000 per person in bodily injury coverage and $100,000 for property damage you cause. Because mandatory UM must match your bodily injury limits, raising liability to 100/300 also automatically raises your UM protection.\n\nMinnesota's severe winters make collision coverage especially relevant. Extended periods of ice, snow, and reduced visibility on Minnesota roads produce elevated collision claim rates from November through March. Black ice on Minnesota's flat interstate corridors can cause multi-vehicle accidents. Single-vehicle accidents involving loss of control on slippery surfaces are also common.\n\nMinnesota's significant deer and wildlife population creates substantial comprehensive claim risk, particularly in the outer suburban and rural areas of the state. Deer collisions are most common at dawn and dusk in fall when deer are active during breeding season. Minnesota also experiences significant hailstorms, particularly in spring and early summer, that can produce widespread vehicle damage from a single weather event.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with meaningful remaining value. Additional PIP above the mandatory $40,000 is available for drivers who want expanded economic loss coverage beyond the base sub-limits, and is worth considering for higher earners or those without strong disability income coverage.",
    closingSections: [
      {
        title: "How insurers determine your rate in Minnesota",
        body: "Minnesota insurers use your driving record, zip code, vehicle type, age, annual mileage, credit-based insurance score, and coverage selections to calculate your premium. The Minneapolis-Saint Paul metro area produces higher premiums than rural Minnesota due to accident frequency and repair costs. Minnesota's winters significantly affect both collision claims from icy road accidents and comprehensive claims from hail damage in warmer months. At-fault accidents and moving violations typically affect your rate for three to five years. Comparing quotes from multiple carriers at renewal is the most reliable way to find the best rate for your profile.",
      },
      sr22Section("Minnesota", "Driver and Vehicle Services"),
    ],
    ...ctaFields("Minnesota"),
  },

  // ── Missouri ──────────────────────────────────────────────────────────────
  {
    name: "Missouri",
    slug: "missouri",
    ...stateImage("missouri", "Missouri highway arch"),
    metaTitle: metaTitleAtFault("Missouri"),
    metaDescription: metaDescriptionAtFault("Missouri", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Pure comparative fault state; uninsured motorist coverage is mandatory.",
    callout:
      "Missouri requires 25/50/25 liability coverage and mandatory uninsured motorist coverage. Missouri is an at-fault state that applies pure comparative fault rules.",
    statute: "Missouri Revised Statutes Section 303.030",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Missouri results in a fine and license suspension. You must carry proof of insurance at all times and present it at any traffic stop or accident. Reinstating your license after a suspension requires proof of current coverage and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other violations and must remain on file for two years.",
    faultExplain:
      "Missouri is an at-fault state that applies a pure comparative negligence rule. You can recover compensation from another driver even if you were predominantly at fault for an accident, but your recovery is reduced proportionally by your percentage of fault. Unlike states with modified comparative fault rules that cut off recovery when you cross a 50 or 51 percent threshold, Missouri's pure comparative system preserves partial recovery at any level of fault. If a jury finds you 90 percent responsible for an accident that caused you $100,000 in losses, you can still recover $10,000 from the other driver. This also means that other drivers you injure can recover from you proportionally even if they share significant fault for the accident.\n\nMissouri's driving environment spans a wide range, from the dense urban traffic of Kansas City and St. Louis to rural state highways across the Ozarks and agricultural plains of central and northern Missouri. Kansas City and St. Louis produce significantly higher accident rates than the rest of the state due to traffic volume, highway interchange complexity, and urban accident patterns. Interstate 70, which crosses Missouri from Kansas City through Columbia to St. Louis, is one of the state's highest-accident corridors.\n\nIf you cause an accident in Missouri that results in damages exceeding your liability limits, you are personally responsible for the balance. Missouri courts can enforce civil judgments through wage garnishment, bank levies, and property liens. The 25/50 bodily injury minimum can be quickly exhausted in a serious accident involving multiple injured parties or significant medical treatment. Missouri's combination of urban accident exposure and the pure comparative negligence rule, which preserves claims against you even when other drivers share significant fault, makes carrying adequate liability limits especially important.",
    umMandatory: true,
    umExplain:
      "Missouri requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because mandatory UM must match your liability limits, raising liability to 100/300 also raises your UM coverage to the same level.",
    creditExplain: creditExplainPermitted("Missouri"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Missouri. Because mandatory UM must match your liability limits, raising liability to 100/300 also raises your UM coverage to the same level. Missouri's pure comparative negligence rule, which preserves other drivers' ability to recover from you even when they share significant fault, makes carrying adequate liability limits especially important, since you may face claims from drivers who are partially responsible for their own accidents.\n\nMissouri's severe weather profile creates significant comprehensive insurance needs. The state experiences regular tornado activity, particularly in spring and early summer, and hailstorms are common across the state. Vehicle damage from hail ranges from minor cosmetic dimpling to complete loss requiring replacement. Comprehensive coverage is the specific protection that handles tornado and hail damage.\n\nMissouri also has a significant deer population, particularly in the Ozarks and rural areas of central and northern Missouri. Deer-vehicle collisions are most common at dawn and dusk in fall, and comprehensive coverage is the specific protection that handles animal strikes.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle with meaningful remaining value. Missouri's combination of weather exposure, wildlife, and urban accident risk makes comprehensive and collision coverage worth carrying on most vehicles.",
    closingSections: [
      rateSectionAtFault("Missouri", "Kansas City and St. Louis produce significantly higher premiums than rural Missouri due to accident frequency, vehicle theft rates, and repair costs in those urban markets. Missouri's combination of urban and rural driving environments creates significant variation in premium pricing across the state."),
      sr22Section("Missouri", "Department of Revenue"),
    ],
    ...ctaFields("Missouri"),
  },

  // ── Nebraska ──────────────────────────────────────────────────────────────
  {
    name: "Nebraska",
    slug: "nebraska",
    ...stateImage("nebraska", "Nebraska highway plains"),
    metaTitle: metaTitleAtFault("Nebraska"),
    metaDescription: metaDescriptionAtFault("Nebraska", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "One of the most affordable states for auto insurance nationally.",
    callout:
      "Nebraska requires 25/50/25 liability coverage. Nebraska is an at-fault state and one of the most affordable states for auto insurance in the country.",
    statute: "Nebraska Revised Statutes Section 60-509",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Nebraska results in a fine and license suspension. You must carry proof of financial responsibility at all times and present it at any traffic stop or accident. Reinstating your license after a suspension requires proof of current coverage and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other violations.",
    faultExplain:
      "Nebraska is an at-fault state that applies a modified comparative fault rule with a 50 percent threshold. If your negligence is less than the combined negligence of all other parties in the accident, you can recover compensation from them, reduced proportionally by your share of fault. If your negligence equals or exceeds 50 percent, meaning you are at least as responsible as all other parties combined, you cannot recover anything. The 50 percent threshold is slightly more restrictive than the 51 percent standard used in many comparative fault states, since it bars recovery at the point of equal fault rather than requiring you to be more than half responsible.\n\nNebraska's driving environment is shaped by its vast rural geography, long straight roads across the Great Plains, and a small number of urban centers including Omaha and Lincoln. Omaha and the surrounding metropolitan area produce the highest accident rates and insurance premiums in the state. Lincoln, as the state capital and home to the University of Nebraska, also generates higher accident rates than rural Nebraska. The rural portions of the state have lower accident frequency but their own risk profile, high-speed travel on open highways, deer and wildlife crossings, railroad grade crossings, and limited access to emergency medical services in remote areas.\n\nIf you cause an accident in Nebraska and your liability limits are insufficient to cover all resulting damages, you are personally responsible for the balance. Nebraska courts can enforce civil judgments through wage garnishment and property liens. Nebraska's reputation as an affordable insurance state should not discourage drivers from carrying adequate coverage, the financial consequences of a serious at-fault accident are the same regardless of what state it happens in.",
    umMandatory: false,
    umExplain:
      "Nebraska insurers must offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Carrying both at limits matching your liability coverage is the standard recommendation for Nebraska drivers.",
    creditExplain: creditExplainPermitted("Nebraska"),
    recommendedExplain:
      "Nebraska is one of the most affordable states for auto insurance, which makes carrying comprehensive coverage particularly cost-effective relative to the actual risk exposure. The 25/50/25 minimum still falls short of what most drivers need in a serious accident, most advisors recommend at least 100/300/100 liability. Nebraska's 50 percent modified comparative fault threshold means that carrying adequate liability limits matters for both your protection against others and the protection you owe to drivers you may injure.\n\nNebraska's severe weather profile is one of the most significant insurance considerations in the state. Hailstorms are common in spring and early summer, and a single hailstorm can damage hundreds or thousands of vehicles across a wide swath of the state. Tornadoes also occur in Nebraska, particularly in the eastern and central portions. Comprehensive coverage handles both hail and tornado-related vehicle damage.\n\nNebraska's rural roads present significant deer and wildlife collision risk. The state's deer population creates collision hazards particularly at dawn and dusk, and deer-vehicle collisions are among the most common comprehensive claims in the state. Grain and agricultural equipment on rural county roads is also a collision risk during planting and harvest seasons.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with remaining value, Nebraska's combination of hail, weather, and wildlife exposure makes these coverages cost-effective.",
    closingSections: [
      rateSectionAtFault("Nebraska", "Omaha and Lincoln produce higher premiums than rural Nebraska due to accident frequency and repair costs, but Nebraska's overall market is among the most affordable in the country. Hail frequency and deer strike risk are the primary drivers of comprehensive claims across the state."),
      sr22Section("Nebraska", "Department of Motor Vehicles"),
    ],
    ...ctaFields("Nebraska"),
  },

  // ── North Dakota ──────────────────────────────────────────────────────────
  {
    name: "North Dakota",
    slug: "north-dakota",
    ...stateImage("north-dakota", "North Dakota plains highway"),
    metaTitle: "Car Insurance in North Dakota | No-Fault Requirements and Free Quotes",
    metaDescription:
      "North Dakota requires 25/50/25 liability plus $30,000 PIP and mandates uninsured motorist coverage. Learn how no-fault works in North Dakota and compare free quotes.",
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 + $30k PIP",
    faultSystem: "no-fault",
    creditBanned: false,
    indexNote: "No-fault state with mandatory PIP and mandatory UM coverage.",
    callout:
      "North Dakota requires 25/50/25 liability coverage plus $30,000 in Personal Injury Protection and mandatory uninsured motorist coverage. North Dakota is a no-fault state.",
    statute: "North Dakota Century Code Section 26.1-41-01",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
      { label: "$30,000", amount: "Personal Injury Protection (PIP)" },
    ],
    penaltyNote:
      "Driving without insurance in North Dakota results in a fine and license suspension. Reinstating your license requires proof of current coverage and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other violations. North Dakota requires you to carry proof of financial responsibility at all times.",
    faultExplain:
      "North Dakota is a no-fault state. Your own PIP coverage pays for your medical expenses and a portion of lost wages up to $30,000 after any accident regardless of who caused it. The $30,000 PIP limit is meaningfully higher than many no-fault states and provides substantial coverage for moderate-to-serious injuries without requiring a fault determination. PIP pays promptly after an accident while any liability investigation or legal process is still underway.\n\nTo step outside the no-fault system and bring a tort claim against an at-fault driver for pain and suffering and other non-economic damages, your accident-related medical expenses must exceed $2,500, or your injuries must include death, permanent disfigurement, or permanent serious injury. For most minor and moderate accidents, the no-fault system handles medical and wage-loss claims and the tort system is restricted. North Dakota applies a modified comparative fault rule with a 51 percent threshold for tort claims that meet the qualifying criteria.\n\nNorth Dakota's driving environment is shaped by harsh winters with heavy snowfall, ice, and wind-driven reduced visibility across the state's flat plains. Winter driving conditions in North Dakota are among the most severe in the continental United States, particularly in the northern and western regions. The state also has a significant deer and wildlife population that creates collision risk year-round, and grain and agricultural equipment on rural roadways during harvest season adds another category of collision risk. North Dakota's oil patch region in the western part of the state generates heavy truck traffic on rural roads that were not designed for this volume, which has affected accident rates in those areas.",
    notCovered: [
      "Damage to your own vehicle from a collision",
      "Theft, flooding, or weather damage to your vehicle",
      "Medical costs beyond $30,000 without additional coverage",
      "Pain and suffering for injuries below the no-fault threshold",
    ],
    umMandatory: true,
    umExplain:
      "North Dakota requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and other losses when an at-fault uninsured driver causes a serious accident that exceeds what your PIP covers. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because mandatory UM must match your liability limits, raising liability automatically raises your UM protection.",
    creditExplain: creditExplainPermitted("North Dakota"),
    recommendedExplain:
      "North Dakota's $30,000 mandatory PIP provides substantial immediate medical coverage, but the $25,000 per person bodily injury liability limit is the minimum legal exposure you carry if you cause an accident. Most advisors recommend raising liability to at least 100/300/100. Because mandatory UM must match your liability limits, raising liability also automatically raises your UM protection.\n\nNorth Dakota's harsh winters create significant collision risk. The state experiences extended periods of snow, ice, and wind-driven blizzard conditions that reduce visibility on open highways to near zero. Single-vehicle accidents on icy roads and multi-car pile-ups during blizzard conditions are common winter claims. Collision coverage pays for your vehicle damage regardless of fault, which is particularly valuable when accidents occur in poor weather where fault attribution can be complicated.\n\nNorth Dakota's deer and wildlife population creates substantial comprehensive risk, particularly on rural highways in the eastern half of the state. Hail damage from spring and summer thunderstorms is also a meaningful comprehensive risk, North Dakota sits at the northern edge of hail-prone Great Plains weather patterns, and significant hailstorms produce widespread vehicle damage.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with meaningful remaining value. North Dakota's combination of weather and wildlife exposure makes these coverages particularly cost-effective relative to the risks drivers face on this state's roads.",
    closingSections: [
      rateSectionAtFault("North Dakota", "Fargo and Bismarck produce higher premiums than rural North Dakota, though the state overall is priced below the national average due to its low population density. Winter weather significantly increases collision claims across the state, and deer-vehicle collisions are common on rural roads."),
      sr22Section("North Dakota", "Department of Transportation"),
    ],
    ...ctaFields("North Dakota"),
  },

  // ── South Dakota ──────────────────────────────────────────────────────────
  {
    name: "South Dakota",
    slug: "south-dakota",
    ...stateImage("south-dakota", "South Dakota Badlands highway"),
    metaTitle: metaTitleAtFault("South Dakota"),
    metaDescription: metaDescriptionAtFault("South Dakota", "25/50/25"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/25 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",
    callout:
      "South Dakota requires 25/50/25 liability coverage and mandatory uninsured motorist coverage. South Dakota is an at-fault state.",
    statute: "South Dakota Codified Laws Section 32-35-113",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$25,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in South Dakota results in a fine and license suspension. You must carry proof of financial responsibility at all times. Reinstating your license after a suspension requires proof of current coverage and payment of reinstatement fees. SR-22 filing is required after DUI convictions and certain other serious violations.",
    faultExplain:
      "South Dakota is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. This threshold is important because it means a driver who is equally at fault at exactly 50 percent retains a right to partial recovery, while a driver found even one percentage point more responsible loses all recovery.\n\nSouth Dakota's rural landscape and long driving distances create a driving environment that is distinct from more urbanized states. Sioux Falls and Rapid City account for the majority of urban accidents and produce the highest premiums in the state. But much of South Dakota's accident exposure is rural, high-speed travel on two-lane highways, where the consequences of an accident are often more severe than in slower-moving urban traffic. South Dakota has one of the highest rates of deer-vehicle collisions in the country, and moose, antelope, and other wildlife also pose collision risks in various regions of the state.\n\nSouth Dakota's winters bring severe weather including blizzards, ice storms, and ground blizzards where blowing snow reduces visibility on open plains roads to near zero. These conditions create both collision risk and the possibility of becoming stranded. If you cause an accident in South Dakota and your liability limits are insufficient to cover all resulting damages, you are personally responsible for the balance above your policy limits. South Dakota courts can enforce civil judgments against wages and property.",
    umMandatory: true,
    umExplain:
      "South Dakota requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because mandatory UM must match your liability limits, raising liability automatically raises your UM protection.",
    creditExplain: creditExplainPermitted("South Dakota"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in South Dakota. Because mandatory UM must match your liability limits, raising liability to 100/300 also automatically raises your UM coverage to the same level.\n\nSouth Dakota has one of the highest rates of deer-vehicle collisions in the country on a per-capita basis, making comprehensive coverage especially valuable for rural drivers. The state's large mule deer, whitetail deer, and pronghorn antelope populations create collision risk throughout the year, with peak activity at dawn and dusk in fall. These animal strike claims are handled under comprehensive coverage, not collision coverage.\n\nSouth Dakota's winters bring severe weather including blizzards and ground blizzards, particularly on the open plains of eastern South Dakota, where blowing snow can reduce visibility to zero on exposed highway sections. Ice conditions on the state's rural highways create significant collision risk. The Black Hills region in western South Dakota experiences its own weather patterns including heavy snowfall and rapid weather changes that affect driving conditions year-round.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry collision and comprehensive on any vehicle with meaningful remaining value. South Dakota's combination of severe winters and deer collision risk makes these coverages particularly cost-effective relative to the actual exposure drivers face on this state's roads.",
    closingSections: [
      rateSectionAtFault("South Dakota", "Sioux Falls and Rapid City produce higher premiums than rural South Dakota, though the state overall is priced below the national average. Deer strike frequency and winter driving conditions are the primary comprehensive and collision risk factors for South Dakota drivers."),
      sr22Section("South Dakota", "Department of Public Safety"),
    ],
    ...ctaFields("South Dakota"),
  },

  // ── Wisconsin ─────────────────────────────────────────────────────────────
  {
    name: "Wisconsin",
    slug: "wisconsin",
    ...stateImage("wisconsin", "Wisconsin highway Milwaukee"),
    metaTitle: metaTitleAtFault("Wisconsin"),
    metaDescription: metaDescriptionAtFault("Wisconsin", "25/50/10"),
    datePublished: "2026-06-22",
    minDisplay: "25/50/10 liability",
    faultSystem: "at-fault",
    creditBanned: false,
    indexNote: "Uninsured motorist coverage is mandatory.",
    callout:
      "Wisconsin requires 25/50/10 liability coverage and mandatory uninsured motorist coverage. Wisconsin is an at-fault state.",
    statute: "Wisconsin Statutes Section 344.33",
    minCoverage: [
      { label: "$25,000", amount: "bodily injury per person" },
      { label: "$50,000", amount: "bodily injury per accident" },
      { label: "$10,000", amount: "property damage per accident" },
    ],
    penaltyNote:
      "Driving without insurance in Wisconsin results in a fine and license suspension. Wisconsin requires you to carry proof of financial responsibility at all times and present it at any traffic stop or accident. Reinstating your license requires proof of current insurance, payment of reinstatement fees, and SR-22 filing if required by the court. Wisconsin enforces coverage through an electronic verification system linked to vehicle registration records.",
    faultExplain:
      "Wisconsin is an at-fault state that applies a modified comparative fault rule with a 51 percent threshold. If you are found 50 percent or less at fault for an accident, you can recover compensation from the other driver, reduced proportionally by your share of responsibility. If you are 51 percent or more at fault, you cannot recover anything from the other party. Wisconsin's 51 percent threshold means that drivers bearing primary, but not exclusive, fault can still bring a partial recovery claim against the other driver.\n\nWisconsin's driving environment varies considerably from the urban density of Milwaukee and Madison to the rural farmland and forested regions of the northern and western parts of the state. Milwaukee is Wisconsin's largest city and consistently produces the highest accident rates and insurance premiums in the state. The Madison metro area, as the state capital and home to the University of Wisconsin, also generates above-average accident rates. Northern Wisconsin's forests and lakes attract significant tourism traffic during summer months, and the state's winters bring extended periods of snow, ice, and reduced visibility on rural roads.\n\nThe $10,000 property damage minimum is particularly low by current standards. A moderate collision involving a contemporary vehicle, particularly a truck, SUV, or vehicle with advanced driver assistance technology, can easily generate repair estimates well above $10,000 due to the cost of sensors, cameras, and safety system components. Raising property damage coverage to $100,000 typically adds very little to a Wisconsin premium while closing a significant exposure gap. If you cause an accident in Wisconsin and your limits are insufficient to cover all resulting damages, you are personally responsible for the balance, and Wisconsin courts can enforce civil judgments against wages and property.",
    umMandatory: true,
    umExplain:
      "Wisconsin requires all auto insurance policies to include uninsured motorist coverage at limits matching the policyholder's liability coverage. UM coverage pays your medical expenses and vehicle damage when an at-fault uninsured driver causes an accident. UIM coverage fills the gap when an at-fault driver's policy is insufficient. Because mandatory UM must match your liability limits, raising liability to 100/300 automatically raises your UM to the same level.",
    creditExplain: creditExplainPermitted("Wisconsin"),
    recommendedExplain:
      "Most advisors recommend carrying at least 100/300/100 liability in Wisconsin. The $10,000 property damage minimum is especially low, many contemporary vehicles cost $15,000 to $30,000 or more to repair after a moderate collision, particularly vehicles with advanced driver assistance sensors and cameras embedded in bumpers and mirrors. Because mandatory UM must match your liability limits, raising liability to 100/300 also automatically raises your UM coverage.\n\nWisconsin's winters create sustained collision risk from November through March. Ice, snow, and reduced visibility on Wisconsin's roads, from Milwaukee's urban streets to rural county highways, contribute to elevated accident rates during winter months. Single-vehicle accidents on icy roads and reduced-visibility pile-ups are common winter claims. Collision coverage pays for your vehicle damage regardless of fault, which is especially valuable in winter accidents where fault can be difficult to establish clearly.\n\nWisconsin's rural areas have one of the highest deer densities in the Midwest, and deer-vehicle collisions are among the most common comprehensive claims in the state. These animal strike claims are covered under comprehensive insurance, not collision coverage. Wisconsin also experiences significant hailstorms in spring and early summer that can produce widespread vehicle damage.\n\nIf your vehicle is financed or leased, collision and comprehensive are required by your lender. For vehicles you own outright, carry both on any vehicle with meaningful value, Wisconsin's combination of winter weather, wildlife, and severe weather exposure makes these coverages cost-effective for most vehicles in the state.",
    closingSections: [
      rateSectionAtFault("Wisconsin", "Milwaukee and Madison produce higher premiums than rural Wisconsin due to accident frequency, vehicle theft rates, and repair costs. Wisconsin's overall premium level is near the national average. Deer-vehicle collisions are among the most common comprehensive claims in the state."),
      sr22Section("Wisconsin", "Division of Motor Vehicles"),
    ],
    ...ctaFields("Wisconsin"),
  },
];
