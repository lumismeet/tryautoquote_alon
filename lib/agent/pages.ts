import { splitTakeaways } from "@/lib/blogs";
import { SITE } from "./site";
import { faqs } from "@/lib/faqs";
import { GUIDES } from "./llms";

/** Markdown version of the homepage (the HTML homepage is an interactive client page). */
export function homeMarkdown(): string {
  const faq = faqs
    .map((f) => `### ${f.question}\n\n${f.answer}${f.link ? `\n\n[${f.link.text.replace(/\s*→$/, "")}](${SITE.baseUrl}${f.link.href})` : ""}`)
    .join("\n\n");
  return `# ${SITE.name}: compare car insurance quotes

> Answer a few quick questions and we'll show you quote providers in your area, so you can compare rates and see how much you could save. No commitment required.

Source: ${SITE.baseUrl}/

${SITE.name} is a free, advertising-supported comparison site for U.S. drivers, operated by ${SITE.legalName} It is not an insurance company, agent, or broker, and it does not sell policies.

## How it works

1. **Answer a few questions.** Enter your ZIP code and a few basics, like whether you are currently insured and how many vehicles you have. We never ask for your name, phone, or email.
2. **See your options.** We show quote providers that serve your area. Pick one to review multiple quotes from top national carriers on their site.
3. **Choose what fits.** Review your quotes and choose the coverage that fits your budget, or walk away with no obligation.

Start at ${SITE.baseUrl}/ by entering your ZIP code. The quote tool runs in the browser.

## Why drivers use ${SITE.name}

- **Free, always.** No fees, no credit card, and no obligation to buy.
- **No spam calls.** We never ask for your phone number or email.
- **Fast and simple.** About five quick questions.
- **Providers in your area.** Established quote providers that let you compare quotes from national carriers.

## Frequently asked questions

${faq}

## Learn more

${GUIDES.map((g) => `- [${g.title}](${SITE.baseUrl}${g.url})`).join("\n")}
- [Car insurance requirements by state](${SITE.baseUrl}/car-insurance)
- [All articles](${SITE.baseUrl}/blogs)
- [About ${SITE.name}](${SITE.baseUrl}/about)
- [Contact](${SITE.baseUrl}/contact)
- [llms.txt](${SITE.baseUrl}/llms.txt)

${SITE.name} may receive compensation from providers you visit. Contact: ${SITE.email}
`;
}

export function notFoundMarkdown(pathname: string): string {
  const safe = pathname.replace(/[`\n\r]/g, "").slice(0, 200);
  return `# 404: Page not found

The page \`${safe}\` does not exist on ${SITE.name}. It may have moved or the URL may be mistyped.

Try one of these instead:

- [Home](${SITE.baseUrl}/)
- [Sitemap (all pages)](${SITE.baseUrl}/sitemap.xml)
- [llms.txt (site guide for AI agents)](${SITE.baseUrl}/llms.txt)
- [Guides](${SITE.baseUrl}/guides)
- [Articles](${SITE.baseUrl}/blogs)

Questions? Email ${SITE.email}.
`;
}

export function blogMarkdown(post: {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  updated?: string;
  content: string;
}): string {
  const url = `${SITE.baseUrl}/blogs/${post.slug}`;
  const meta = [
    post.description ? `> ${post.description}` : "",
    `Source: ${url}`,
    `By ${SITE.name} Editorial Team${post.date ? ` · Published ${post.date}` : ""}${post.updated ? ` · Updated ${post.updated}` : ""}`,
  ].filter(Boolean);
  // Lead with the Key takeaways so agents get the answer before the detail.
  const { body: rest, takeaways } = splitTakeaways(post.content);
  const summary = takeaways.length
    ? `## Key takeaways\n\n${takeaways.map((t) => `- ${t}`).join("\n")}\n\n`
    : "";
  const body = (summary + rest)
    .trim()
    // Embedded interactive components (e.g. <DropCoverageCalculator />) only work on the web page.
    .replace(/^<([A-Z][A-Za-z]+)\s*\/>\s*$/gm, `_(Interactive tool available on the web page: ${SITE.baseUrl}/blogs/${post.slug})_`)
    .replace(/\]\(\/(?!\/)/g, `](${SITE.baseUrl}/`); // absolute internal links
  return `# ${post.title}\n\n${meta.join("\n\n")}\n\n${body}\n`;
}
