// ─── Public API ───────────────────────────────────────────────────────────────
// All imports across the codebase use "@/lib/states" — this file is the single
// entry point. Regional data files and helpers live in lib/states/.

export type { StateInsuranceData } from "./states/_types";

// ─── Adding a new state ───────────────────────────────────────────────────────
// 1. Pick the right regional file in lib/states/ (or create one for a new region).
// 2. Copy an existing entry as a starting point.
// 3. Fill in the required unique fields (name, slug, statute, minCoverage, etc.).
// 4. Use helpers from lib/states/_defaults.ts for boilerplate sections:
//      creditExplain:    creditExplainPermitted(state)          ← most states
//      creditExplain:    creditExplainBanned(state, lawCite)    ← CA, MI, MA, HI
//      closingSections:  [rateSectionAtFault(state, urbanCtx)]  ← at-fault states
//      closingSections:  [..., sr22Section(state, agencyName)]  ← add SR-22 block
//      ctaHeading/ctaButton: ...ctaFields(state)                ← always
//      image/imageAlt:   ...stateImage(slug, description)       ← always
// 5. Add the state image to public/states/<slug>.jpg.
// 6. The sitemap auto-generates from this array — no manual sitemap edits needed.

import { southwest } from "./states/southwest";
import { west } from "./states/west";
import { southeast } from "./states/southeast";
import { northeast } from "./states/northeast";
import { midwest } from "./states/midwest";
import type { StateInsuranceData } from "./states/_types";

export const states: StateInsuranceData[] = [
  ...southwest,
  ...west,
  ...southeast,
  ...northeast,
  ...midwest,
].sort((a, b) => a.name.localeCompare(b.name));

export function getStateBySlug(slug: string): StateInsuranceData | undefined {
  return states.find((s) => s.slug === slug);
}
