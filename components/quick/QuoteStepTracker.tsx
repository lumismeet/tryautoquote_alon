"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

const NAMES: Record<string, string> = { "1_map": "zip", "1": "insured", "2": "vehicles", "3": "home", "4": "age" };

// Fires quote_step once per step view so GA can show where people leave the form.
export default function QuoteStepTracker({ step }: { step: string }) {
  useEffect(() => {
    if (NAMES[step]) track("quote_step", { step: NAMES[step], step_id: step });
  }, [step]);
  return null;
}
