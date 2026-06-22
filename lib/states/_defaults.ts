import type { StateInsuranceData } from "./_types";

// ─── Credit ──────────────────────────────────────────────────────────────────

/** For states that permit credit-based insurance scoring (most states). */
export function creditExplainPermitted(state: string): string {
  return `${state} permits insurers to use a credit-based insurance score as one factor when pricing auto policies. The check is a soft inquiry and does not affect your credit report or credit score. ${state} law requires insurers to notify you if credit information results in an adverse action on your policy, giving you the opportunity to review your credit report for inaccuracies. If your credit has improved since your last renewal, shopping new quotes across multiple carriers is worthwhile because carriers weight credit differently and improvements in your score can reduce your premium even without any change in your driving record.`;
}

/** For states that ban credit-based insurance scoring. */
export function creditExplainBanned(state: string, lawCitation: string): string {
  return `${state} prohibits insurers from using credit-based insurance scores when pricing auto policies. Under ${lawCitation}, insurers must base rates on driving-related factors such as your record, years of experience, and annual mileage. This prohibition means that drivers in ${state} who have poor credit due to medical debt, job loss, or other circumstances unrelated to their driving are not penalized on their auto insurance. If you have moved to ${state} from a state where credit affected your rate, your premium may differ from what you paid previously even with an identical driving record.`;
}

// ─── Uninsured Motorist ───────────────────────────────────────────────────────

/** For at-fault states where UM must be offered but can be rejected. */
export function umExplainOffered(state: string, uninsuredContext: string): string {
  return `${state} insurers are required to offer uninsured and underinsured motorist coverage, and drivers may reject it in writing. UM coverage pays for your medical expenses and vehicle damage when an at-fault driver has no insurance, while UIM coverage fills the gap when an at-fault driver's policy is insufficient to cover your full losses. ${uninsuredContext} Carrying UM and UIM at limits matching your liability coverage is the standard recommendation for ${state} drivers who want a balanced policy.`;
}

/** For states where UM is mandatory. */
export function umExplainMandatory(state: string, details: string): string {
  return `Unlike most states where uninsured motorist coverage must only be offered and can then be rejected, ${state} requires all auto insurance policies to include UM coverage. ${details} You may purchase UM coverage above the mandatory minimum for additional protection.`;
}

// ─── Closing sections ────────────────────────────────────────────────────────

/**
 * Standard SR-22 closing section. Covers most states that use the SR-22
 * certificate with a three-year requirement.
 *
 * @param state    Full state name, e.g. "Texas"
 * @param agency   The state agency the SR-22 is filed with, e.g. "Department of Motor Vehicles"
 */
export function sr22Section(state: string, agency: string): { title: string; body: string } {
  return {
    title: `SR-22 requirements in ${state}`,
    body: `An SR-22 in ${state} is a certificate filed by your insurer with the ${agency} confirming you carry at least the state minimum liability coverage. You may be required to maintain an SR-22 after a DUI conviction, after driving without insurance, or after certain serious traffic violations. The requirement typically lasts three years from the triggering event, and your license remains suspended until the SR-22 is on file. If your policy lapses during the SR-22 period, your insurer must notify the ${agency} immediately, which reinstates your suspension. Not all insurers handle SR-22 filings, so drivers who need one should specifically look for carriers that serve the non-standard auto insurance market in ${state}.`,
  };
}

/**
 * Rate-determination closing section for standard at-fault, credit-permitted states.
 *
 * @param state        Full state name
 * @param urbanContext One or two sentences describing the urban/rural premium split
 *                     and any state-specific claim drivers (theft, weather, fraud, etc.)
 * @param creditNote   Optional override for how credit is described (defaults to
 *                     "credit-based insurance score"). Pass empty string for no-credit states.
 */
export function rateSectionAtFault(
  state: string,
  urbanContext: string,
  creditNote?: string
): { title: string; body: string } {
  const creditText =
    creditNote === ""
      ? "driving record, zip code, vehicle type, age, and annual mileage"
      : `driving record, zip code, vehicle type, age, annual mileage, and ${creditNote ?? "credit-based insurance score"}`;
  return {
    title: `How insurers determine your rate in ${state}`,
    body: `${state} insurers use your ${creditText} to calculate your premium. ${urbanContext} At-fault accidents and moving violations typically affect your rate for three to five years. Because each insurer weights these factors differently, comparing quotes from multiple carriers at renewal is the most reliable way to find the most competitive rate for your specific profile.`,
  };
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

/** Formulaic CTA fields, identical pattern for every state. */
export function ctaFields(
  state: string
): Pick<StateInsuranceData, "ctaHeading" | "ctaButton"> {
  return {
    ctaHeading: `Compare ${state} car insurance quotes`,
    ctaButton: `Get a Free ${state} Quote`,
  };
}

// ─── Image helpers ────────────────────────────────────────────────────────────

/** Generates the standard image path and alt text for a state. */
export function stateImage(
  slug: string,
  description: string
): Pick<StateInsuranceData, "image" | "imageAlt"> {
  return {
    image: `/states/${slug}.jpg`,
    imageAlt: description,
  };
}

// ─── Meta helpers ─────────────────────────────────────────────────────────────

/** Standard meta title pattern for at-fault states. */
export function metaTitleAtFault(state: string): string {
  return `Car Insurance in ${state} | State Minimums and Free Quotes`;
}

/** Standard meta description pattern. */
export function metaDescriptionAtFault(state: string, minDisplay: string): string {
  return `${state} requires ${minDisplay} liability coverage. Learn what the state minimums cover, what most drivers actually need, and compare free personalized quotes for your ${state} zip code.`;
}
