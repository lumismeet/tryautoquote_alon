// Gate for the /car-insurance/laws-by-state comparison page.
//
// While false, the page is live but noindex, and is left out of the sitemap,
// llms.txt, the main menu and internal links. Flip to true only after the
// fields it aggregates (minDisplay, faultSystem, umMandatory, creditBanned)
// have been checked against each state's statute or insurance department.
//
// Suspected discrepancies to check first (Nov 2026 review, unverified):
//   - delaware: faultSystem "no-fault"; Delaware requires PIP but is generally an at-fault state
//   - washington: umMandatory true; UM generally must be offered but can be rejected
//   - illinois, nebraska: umMandatory false; both generally require UM
export const STATE_LAWS_VERIFIED = false;

export const LAWS_BY_STATE_PATH = "/car-insurance/laws-by-state";
