// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { FormProvider } from "@/context/FormContext";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "TryAutoQuote | Find the Best Auto Insurance Rates",
//   description: "Compare personalized auto insurance quotes from top carriers in minutes. Free, no obligation, no spam.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <FormProvider>
//         {children}
//         </ FormProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase lets Next resolve absolute URLs for canonical/OG tags.
  metadataBase: new URL("https://www.tryautoquote.com"),
  title: "Free Auto Insurance Quotes | Compare and Save | TryAutoQuote",
  description:
    "Compare personalized auto insurance quotes from top carriers in minutes. Free service, no obligation, no spam calls. Start with your zip code.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Auto Insurance Quotes | Compare and Save | TryAutoQuote",
    description:
      "Compare personalized auto insurance quotes from top carriers in minutes. Free service, no obligation, no spam calls. Start with your zip code.",
    url: "https://www.tryautoquote.com/",
    siteName: "TryAutoQuote",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TryAutoQuote | Free Auto Insurance Quote Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Auto Insurance Quotes | Compare and Save | TryAutoQuote",
    description:
      "Compare personalized auto insurance quotes from top carriers in minutes. Free service, no obligation, no spam calls. Start with your zip code.",
    images: ["/opengraph-image.png"],
  },
};

/* ------------------------------------------------------------------ */
/* Site-wide structured data: Organization + WebSite                    */
/* These describe the brand/site as a whole, so they live in the root   */
/* layout and therefore appear on every page.                           */
/* ------------------------------------------------------------------ */
const organizationSchema = {
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
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@tryautoquote.com",
    contactType: "customer support",
  },
  disambiguatingDescription:
    "TryAutoQuote.com is not a licensed insurance provider or broker. It is an advertising-supported comparison service.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.tryautoquote.com/#website",
  name: "TryAutoQuote",
  url: "https://www.tryautoquote.com/",
  publisher: { "@id": "https://www.tryautoquote.com/#organization" },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SNTTKK995J" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-SNTTKK995J');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
