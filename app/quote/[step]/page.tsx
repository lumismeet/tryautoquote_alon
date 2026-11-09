import { notFound } from "next/navigation";
import StepZip from "@/components/quick/StepZip";
import StepInsured from "@/components/quick/StepInsured";
import StepVehicles from "@/components/quick/StepVehicles";
import StepHome from "@/components/quick/StepHome";
import StepAge from "@/components/quick/StepAge";
import Results from "@/components/quick/Results";

const STEPS: Record<string, () => React.ReactElement> = {
  "1_map": StepZip,
  "1": StepInsured,
  "2": StepVehicles,
  "3": StepHome,
  "4": StepAge,
  results: Results,
};

export default async function QuoteStep({ params }: { params: Promise<{ step: string }> }) {
  const { step } = await params;
  const Step = STEPS[step];
  if (!Step) notFound();
  return <Step />;
}
