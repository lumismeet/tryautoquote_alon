// Interactive tools. Each lives inside the article that explains it, so the
// page ranks for the topic and the tool keeps readers on it; /tools lists them.
// Each can also be embedded on other sites (/embed/<slug>), with a credit link back.
export const SITE = "https://www.tryautoquote.com";

export const TOOLS = [
  {
    slug: "drop-full-coverage",
    name: "Should you drop full coverage?",
    description: "Enter your car's value and what you pay for collision and comprehensive to see if full coverage still pays for itself.",
    href: "/blogs/when-to-drop-full-coverage#calc-title",
    embedHeight: 900,
  },
  {
    slug: "deductible",
    name: "$500 or $1,000 deductible?",
    description: "Compare your premium at two deductibles and see how many claim-free years the higher one needs to pay off.",
    href: "/blogs/500-vs-1000-deductible#deductible-calc",
    embedHeight: 960,
  },
] as const;

export type ToolSlug = (typeof TOOLS)[number]["slug"];

// The snippet other sites paste. The visible, brand-named credit link sits in
// their page (outside the iframe), so it counts as a link to us.
export function embedCode(slug: ToolSlug): string {
  const t = TOOLS.find((x) => x.slug === slug)!;
  return (
    `<iframe src="${SITE}/embed/${t.slug}" title="${t.name.replace(/"/g, "&quot;")} (calculator)" width="100%" height="${t.embedHeight}" ` +
    `style="border:0;max-width:680px" loading="lazy"></iframe>\n` +
    `<p style="font-size:13px;margin:6px 0 0">Calculator by <a href="${SITE}/tools">TryAutoQuote</a></p>\n` +
    // Optional: lets the frame fit the calculator. If a site strips scripts, the fixed height still works.
    `<script>addEventListener("message",function(e){if(e.origin!=="${SITE}"||!e.data||e.data.type!=="taq-embed-height")return;` +
    `document.querySelectorAll('iframe[src="${SITE}/embed/'+e.data.slug+'"]').forEach(function(f){f.style.height=e.data.height+"px"})});</script>`
  );
}
