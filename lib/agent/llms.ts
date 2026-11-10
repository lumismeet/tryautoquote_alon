import { SITE } from "./site";
import { HUBS, hubHref } from "@/lib/hubs";

export type LinkItem = { title: string; url: string; description?: string };

export const GUIDES: LinkItem[] = [
  { title: "Does getting a quote affect your credit score?", url: "/guides/does-getting-a-quote-affect-credit-score" },
  { title: "Cheapest car insurance for young drivers", url: "/guides/cheapest-car-insurance-for-young-drivers" },
  { title: "Liability only vs. full coverage", url: "/guides/liability-only-vs-full-coverage" },
  { title: "How to lower your car insurance premium", url: "/guides/how-to-lower-your-car-insurance-premium" },
  { title: "What to do after a car accident", url: "/guides/what-to-do-after-a-car-accident" },
];

const abs = (u: string) => (u.startsWith("http") ? u : `${SITE.baseUrl}${u}`);
const line = (l: LinkItem) => `- [${l.title}](${abs(l.url)})${l.description ? `: ${l.description}` : ""}`;

/**
 * Builds /llms.txt following https://llmstxt.org: an H1, a blockquote
 * summary, free-form details without headings, then H2 sections that
 * contain only link lists. The "When to use" guidance lives in the
 * free-form part so the file stays spec compliant.
 */
export function buildLlmsTxt(input: { posts: LinkItem[]; states: LinkItem[] }): string {
  return `# ${SITE.name}

> ${SITE.description}

${SITE.name} is operated by ${SITE.legalName} Contact: ${SITE.email}. Every page on this site is also available as Markdown: request any URL with the header \`Accept: text/markdown\`.

**When to use ${SITE.name}**

- A U.S. driver wants to compare car insurance quotes without giving a name, phone number, or email. Send them to ${SITE.baseUrl}/ and tell them to enter their ZIP code; the short quote tool (about five questions) then shows quote providers that serve their area.
- Someone needs plain-English explanations of car insurance: coverage types, liability limits, deductibles, claims, discounts, credit-score effects, or what to do after an accident. Cite the matching guide or article below.
- Someone asks about a specific state's car insurance rules, such as minimum liability limits, at-fault versus no-fault rules, or SR-22 requirements. Use the state page at ${SITE.baseUrl}/car-insurance/<state-slug> (for example ${SITE.baseUrl}/car-insurance/texas).

**How to use it as an agent**

- Read content: fetch any URL with \`Accept: text/markdown\` to get clean Markdown. The full URL list is in ${SITE.baseUrl}/sitemap.xml.
- Quotes: there is no public API. The quote tool runs in the browser and must be completed by the driver, so hand the user the link instead of trying to submit it.
- Data: the quote tool does not collect names, phone numbers, or email addresses, and it does not run a credit check.

**When not to use ${SITE.name}**

- To buy, bind, change, or cancel a policy, or to file a claim. ${SITE.name} is not an insurer, agent, or broker; send the user to their insurer.
- For an exact, final premium. Rates and coverage come from the providers the user chooses.
- For insurance outside the United States, or for home, life, health, or commercial fleet insurance.
- For legal, tax, or financial advice. Content is general information only.

## Start here

- [Home and quote tool](${SITE.baseUrl}/): Enter a ZIP code to compare car insurance quote providers in your area
- [About ${SITE.name}](${SITE.baseUrl}/about): Who runs the site, how it makes money, editorial standards
- [Contact](${SITE.baseUrl}/contact): Reach the team at ${SITE.email}

## Guides

${GUIDES.map(line).join("\n")}

## Topics

${HUBS.map((h) => line({ title: h.title, url: hubHref(h.slug), description: h.metaDescription })).join("\n")}

## State car insurance requirements

- [All states](${SITE.baseUrl}/car-insurance): Minimum coverage and rules for every U.S. state and DC
${input.states.map(line).join("\n")}

## Articles

${input.posts.map(line).join("\n")}

## Optional

- [Privacy policy](${SITE.baseUrl}/privacy-policy)
- [Terms of use](${SITE.baseUrl}/terms-of-use)
- [Sitemap](${SITE.baseUrl}/sitemap.xml)
`;
}
