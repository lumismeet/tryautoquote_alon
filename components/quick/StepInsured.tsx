"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import QuestionShell, { OptionButtons } from "./QuestionShell";
import { useZipGuard } from "./useZipGuard";

const CARRIERS = ["GEICO", "Progressive", "State Farm", "Allstate", "USAA", "Other"];

export default function StepInsured() {
  useZipGuard();
  const router = useRouter();
  const { formData, updateForm } = useForm();
  const insured = formData.currentlyInsured;

  return (
    <QuestionShell title="Do you currently have car insurance?">
      <OptionButtons
        options={["Yes", "No"]}
        selected={insured}
        onSelect={(v) => {
          if (v === "No") {
            updateForm({ currentlyInsured: "No", currentInsurance: undefined });
            router.push("/quote/2");
          } else {
            updateForm({ currentlyInsured: "Yes" });
          }
        }}
      />
      {insured === "Yes" && (
        <div className="w-full max-w-2xl space-y-4">
          <p className="text-lg font-semibold text-black">Who is your current insurer?</p>
          <OptionButtons
            columns={3}
            options={CARRIERS}
            selected={formData.currentInsurance}
            onSelect={(v) => {
              updateForm({ currentInsurance: v });
              router.push("/quote/2");
            }}
          />
        </div>
      )}
    </QuestionShell>
  );
}
