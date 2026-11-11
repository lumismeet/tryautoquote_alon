import Link from "next/link";

// Shown on the results page when no partner offer matches the visitor (today:
// drivers 18 to 24, whom current partners don't accept). Instead of a dead end,
// it gives practical next steps drawn from our own guides. No claims about
// specific savings figures.

const YOUNG_TIPS = [
  {
    title: "Stay on a parent's policy if you can",
    body: "Sharing a family policy is usually far cheaper than a policy of your own, especially while you live at home or are away at school without a car.",
  },
  {
    title: "Ask about every discount",
    body: "Good grades, a defensive driving course, paying the full term upfront and usage-based programs that track how you drive can all bring the price down.",
  },
  {
    title: "Pick a car that's cheap to insure",
    body: "A mainstream sedan or hatchback with strong safety ratings usually costs much less to insure than a sporty or luxury model.",
  },
  {
    title: "Get quotes from at least three insurers",
    body: "Prices for young drivers vary more between companies than for almost anyone else, so comparing directly on insurers' sites is worth the time.",
  },
];

const GENERAL_TIPS = [
  {
    title: "Get quotes from at least three insurers",
    body: "The same driver can get very different prices from different companies, so it pays to compare directly on insurers' sites.",
  },
  {
    title: "Check your deductible and coverage",
    body: "A higher deductible lowers your premium, and older cars may not need collision and comprehensive at all.",
  },
  {
    title: "Ask about discounts",
    body: "Bundling, paying in full, a clean record and usage-based programs can all lower what you pay.",
  },
];

export default function NoOffersHelp({ age, state }: { age?: string; state?: string }) {
  const young = age === "18-24";
  const tips = young ? YOUNG_TIPS : GENERAL_TIPS;
  const links = young
    ? [
        { href: "/guides/cheapest-car-insurance-for-young-drivers", label: "Car insurance for drivers 18 to 25" },
        { href: "/blogs/how-adding-a-teen-driver-affects-your-premium", label: "Adding a teen driver to a family policy" },
        { href: "/blogs/how-to-compare-auto-insurance", label: "How to compare car insurance quotes" },
      ]
    : [
        { href: "/guides/how-to-lower-your-car-insurance-premium", label: "How to lower your car insurance premium" },
        { href: "/blogs/how-to-compare-auto-insurance", label: "How to compare car insurance quotes" },
        { href: "/blogs/when-to-drop-full-coverage", label: "When to drop full coverage (with calculator)" },
      ];

  return (
    <section aria-labelledby="no-offers-title" className="bg-white rounded-2xl border border-[#0A2A4F]/10 p-6 md:p-8">
      <h2 id="no-offers-title" className="text-xl font-bold text-[#0A2A4F] mb-2">
        {young ? "Ways to pay less as a young driver" : "Ways to pay less on car insurance"}
      </h2>
      <p className="text-[#0A2A4F]/65 leading-relaxed mb-6">
        We don&rsquo;t have a provider to show for your answers{state ? ` in ${state}` : ""} right now. Here&rsquo;s what
        tends to make the biggest difference{young ? " for drivers your age" : ""}.
      </p>

      <ol className="space-y-4 mb-8">
        {tips.map((t, i) => (
          <li key={t.title} className="flex gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-[#2B5BA8]/10 text-[#2B5BA8] text-sm font-bold flex items-center justify-center">{i + 1}</span>
            <span>
              <span className="block font-semibold text-[#0A2A4F]">{t.title}</span>
              <span className="block text-sm text-[#0A2A4F]/65 leading-relaxed mt-0.5">{t.body}</span>
            </span>
          </li>
        ))}
      </ol>

      <p className="text-sm font-semibold text-[#0A2A4F] mb-2">Read more</p>
      <ul className="space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[#2B5BA8] hover:underline">{l.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
