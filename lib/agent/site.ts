/* Single source of truth for facts agents and structured data rely on. */
export const SITE = {
  name: "TryAutoQuote",
  baseUrl: "https://www.tryautoquote.com",
  email: "info@tryautoquote.com",
  operator: "StarTech Media",
  legalName: "StarTech Media Ltd.",
  /** ISO 3166-1 alpha-2 country where StarTech Media Ltd. is registered. */
  addressCountry: "CY",
  description:
    "TryAutoQuote is an independent, advertising-supported website that helps U.S. drivers understand car insurance and compare quotes from third-party providers. It is not an insurance company, agent, or broker.",
} as const;

export const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";
export const INTERNAL_HEADER = "x-agent-md-internal";
export const PATH_HEADER = "x-agent-md-path";
