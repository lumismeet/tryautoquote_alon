import { METRICS, SOURCES, formatStat, getStateStats, rankFor, type MetricId } from "@/lib/states/stats";

// "By the numbers" block on a state page. Renders nothing until at least one
// verified, sourced metric exists for the state.
export default function StateStats({ slug, stateName }: { slug: string; stateName: string }) {
  const stats = getStateStats(slug);
  const rows = (Object.keys(METRICS) as MetricId[])
    .filter((m) => stats[m])
    .map((m) => ({ id: m, meta: METRICS[m], stat: stats[m]!, rank: rankFor(slug, m) }));
  if (rows.length === 0) return null;

  return (
    <section aria-labelledby="by-the-numbers">
      <h2 id="by-the-numbers" className="text-xl font-bold text-[#0A2A4F] mb-4">
        {stateName} car insurance by the numbers
      </h2>
      <dl className="grid gap-4 sm:grid-cols-2">
        {rows.map(({ id, meta, stat, rank }) => (
          <div key={id} className="rounded-2xl bg-white border border-[#0A2A4F]/8 px-5 py-5">
            <dt className="text-sm text-[#0A2A4F]/60">{meta.label}</dt>
            <dd className="mt-1">
              <span className="block text-2xl font-bold text-[#0A2A4F]">{formatStat(id, stat.value)}</span>
              {rank && (
                <span className="block text-xs text-[#0A2A4F]/55 mt-1">
                  {rank.rank === 1 ? "Highest" : `${rank.rank}${ordinal(rank.rank)} highest`} of {rank.of} states
                </span>
              )}
              <span className="block text-sm text-[#0A2A4F]/70 leading-relaxed mt-2">{meta.explain}</span>
              <span className="block text-xs text-[#0A2A4F]/45 mt-2">
                Source:{" "}
                <a href={stat.url} target="_blank" rel="noopener" className="underline hover:text-[#2B5BA8]">
                  {SOURCES[stat.source].name}
                </a>
                , {stat.year} data
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ordinal(n: number): string {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "th";
  return ["th", "st", "nd", "rd"][n % 10] ?? "th";
}
