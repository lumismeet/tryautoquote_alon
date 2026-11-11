import type { StateInsuranceData } from "./_types";

// Search titles and descriptions for state pages, generated from the state
// data so all 51 stay consistent and within Google's display limits
// (title <= 60, description <= 160; enforced in tests/seo.test.ts).
// Fault-system wording is left out on purpose until that data is verified.

const noMandate = (s: StateInsuranceData) => /no mandate/i.test(s.minDisplay);

export function stateSearchTitle(s: StateInsuranceData): string {
  if (noMandate(s)) return `Is Car Insurance Required in ${s.name}?`;
  return `${s.name} Car Insurance Requirements and State Minimums`;
}

export function stateSearchDescription(s: StateInsuranceData): string {
  if (noMandate(s)) {
    return `${s.name} doesn't require car insurance, but you're still liable for damage you cause. What the law says and what coverage makes sense.`;
  }
  const long = `${s.name} requires ${s.minDisplay}. What the state minimum covers, what most drivers actually need, and how to compare options in your area.`;
  if (long.length <= 160) return long;
  return `${s.name} requires ${s.minDisplay}. What the minimum covers and what most drivers actually need.`;
}
