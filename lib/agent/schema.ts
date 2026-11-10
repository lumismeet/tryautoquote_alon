import { SITE } from "./site";

/* Site-wide Organization JSON-LD (rendered in app/layout.tsx). */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.tryautoquote.com/#organization",
  name: "TryAutoQuote",
  url: "https://www.tryautoquote.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.tryautoquote.com/logo-test1.png",
  },
  description:
    "TryAutoQuote is an independent, advertising-supported comparison website that helps drivers compare personalized auto insurance quotes from third-party carriers.",
  parentOrganization: {
    "@type": "Organization",
    name: SITE.operator,
    legalName: SITE.legalName,
    address: { "@type": "PostalAddress", addressCountry: SITE.addressCountry },
  },
  email: SITE.email,
  address: { "@type": "PostalAddress", addressCountry: SITE.addressCountry },
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer support",
    areaServed: "US",
    availableLanguage: "en",
  },
  disambiguatingDescription:
    "TryAutoQuote.com is not a licensed insurance provider or broker. It is an advertising-supported comparison service.",
};
