import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TryAutoQuote",
  description:
    "Get in touch with TryAutoQuote. Email our team for help comparing auto insurance quotes or questions about our service.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | TryAutoQuote",
    description:
      "Get in touch with TryAutoQuote. Email our team for help comparing auto insurance quotes or questions about our service.",
    url: "https://tryautoquote.com/contact",
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
      item: "https://tryautoquote.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://tryautoquote.com/contact",
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
