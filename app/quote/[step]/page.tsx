import { notFound } from "next/navigation";
import StepZip from "@/components/quick/StepZip";
import StepInsured from "@/components/quick/StepInsured";
import StepVehicles from "@/components/quick/StepVehicles";
import StepHome from "@/components/quick/StepHome";
import StepAge from "@/components/quick/StepAge";
import Results from "@/components/quick/Results";
import QuoteStepTracker from "@/components/quick/QuoteStepTracker";

const STEPS: Record<string, () => React.ReactElement> = {
  "1_map": StepZip,
  "1": StepInsured,
  "2": StepVehicles,
  "3": StepHome,
  "4": StepAge,
  results: Results,
};

// Pre-built at deploy time (no server function per visit); unknown steps are a plain 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(STEPS).map((step) => ({ step }));
}

export default async function QuoteStep({ params }: { params: Promise<{ step: string }> }) {
  const { step } = await params;
  const Step = STEPS[step];
  if (!Step) notFound();
  return (
    <>
      <QuoteStepTracker step={step} />
      <Step />
    </>
  );
}
