// Per-state statistics with mandatory sourcing.
//
// Rules (enforced by tests/state-stats.test.ts):
//   - Every value carries the source it came from and the data year.
//   - A metric with no verified value is simply absent; the UI hides it.
//   - Never fill a value from memory or estimate. Copy it from the cited
//     source and record the URL of the exact table or report used.
//
// To add data: fill STATE_STATS[slug][metric] = { value, year, source, url }.

export type SourceId = "naic" | "irc" | "nhtsa" | "iihs" | "nicb" | "fhwa";

export const SOURCES: Record<SourceId, { name: string; home: string }> = {
  naic: { name: "National Association of Insurance Commissioners (NAIC)", home: "https://content.naic.org" },
  irc: { name: "Insurance Research Council", home: "https://www.insurance-research.org" },
  nhtsa: { name: "National Highway Traffic Safety Administration (NHTSA)", home: "https://www.nhtsa.gov" },
  iihs: { name: "Insurance Institute for Highway Safety (IIHS)", home: "https://www.iihs.org" },
  nicb: { name: "National Insurance Crime Bureau (NICB)", home: "https://www.nicb.org" },
  fhwa: { name: "Federal Highway Administration (FHWA)", home: "https://www.fhwa.dot.gov" },
};

export type MetricId =
  | "avgExpenditure"
  | "uninsuredRate"
  | "fatalitiesPer100mVmt"
  | "theftsPer100k"
  | "licensedDrivers";

type Format = "usd" | "percent" | "decimal" | "count";

export const METRICS: Record<
  MetricId,
  { label: string; format: Format; higherIsWorse: boolean; explain: string; sources: SourceId[] }
> = {
  avgExpenditure: {
    label: "Average yearly spend on car insurance",
    format: "usd",
    higherIsWorse: true,
    explain: "What drivers here spend on auto insurance per insured vehicle, on average.",
    sources: ["naic"],
  },
  uninsuredRate: {
    label: "Drivers without insurance",
    format: "percent",
    higherIsWorse: true,
    explain: "Estimated share of drivers on the road with no insurance. A higher share makes uninsured motorist coverage more valuable.",
    sources: ["irc"],
  },
  fatalitiesPer100mVmt: {
    label: "Traffic deaths per 100 million miles driven",
    format: "decimal",
    higherIsWorse: true,
    explain: "A standard measure of how dangerous the roads are, adjusted for how much people drive.",
    sources: ["nhtsa", "iihs"],
  },
  theftsPer100k: {
    label: "Vehicle thefts per 100,000 residents",
    format: "decimal",
    higherIsWorse: true,
    explain: "Higher theft rates tend to raise the cost of comprehensive coverage.",
    sources: ["nicb"],
  },
  licensedDrivers: {
    label: "Licensed drivers",
    format: "count",
    higherIsWorse: false,
    explain: "Total licensed drivers in the state.",
    sources: ["fhwa"],
  },
};

export type StatValue = { value: number; year: number; source: SourceId; url: string };
export type StateStats = Partial<Record<MetricId, StatValue>>;

// Verified data only. Empty until sources are checked; see header.
export const STATE_STATS: Record<string, StateStats> = {};

export function getStateStats(slug: string): StateStats {
  return STATE_STATS[slug] ?? {};
}

export function formatStat(metric: MetricId, value: number): string {
  switch (METRICS[metric].format) {
    case "usd":
      return `$${Math.round(value).toLocaleString("en-US")}`;
    case "percent":
      return `${value.toFixed(1)}%`;
    case "decimal":
      return value.toFixed(2);
    case "count":
      return Math.round(value).toLocaleString("en-US");
  }
}

// Rank of a state for a metric among states that have the same data year.
// 1 = highest value. Returns null when fewer than 10 states share that year,
// so a rank is never shown from a partial dataset.
export function rankFor(slug: string, metric: MetricId): { rank: number; of: number } | null {
  const mine = STATE_STATS[slug]?.[metric];
  if (!mine) return null;
  const peers = Object.values(STATE_STATS)
    .map((s) => s[metric])
    .filter((v): v is StatValue => !!v && v.year === mine.year);
  if (peers.length < 10) return null;
  const sorted = peers.map((p) => p.value).sort((a, b) => b - a);
  return { rank: sorted.indexOf(mine.value) + 1, of: peers.length };
}
