import type { Metadata } from "next";
import QuizProgress from "@/components/QuizProgress";
import QuoteHighlighter from "@/components/QuoteHighlighter";
import ScrollToTop from "@/components/ScrollToTop";

// Quote form steps are not content pages: keep them out of Google's index
// (links are still followed) so crawl budget goes to articles and state pages.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default async function QuoteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;

  return (
    <>
      <ScrollToTop />
      <QuoteHighlighter />
      {step !== "16" && <QuizProgress step={step} />}
      {children}
    </>
  );
}