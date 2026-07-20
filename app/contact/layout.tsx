import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TryAutoQuote | Auto Insurance Quote Support",
  description:
    "Get in touch with the TryAutoQuote team. Email us for help comparing auto insurance quotes, questions about your results, or anything about our service.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TryAutoQuote | Auto Insurance Quote Support",
    description:
      "Get in touch with the TryAutoQuote team. Email us for help comparing auto insurance quotes, questions about your results, or anything about our service.",
    url: "https://www.tryautoquote.com/contact",
    siteName: "TryAutoQuote",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.tryautoquote.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://www.tryautoquote.com/contact",
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
