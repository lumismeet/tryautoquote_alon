"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import QuestionShell, { OptionButtons } from "./QuestionShell";
import { useZipGuard } from "./useZipGuard";

export default function StepAge() {
  useZipGuard();
  const router = useRouter();
  const { formData, updateForm } = useForm();

  return (
    <QuestionShell title="How old are you?">
      <OptionButtons
        columns={3}
        options={["18-24", "25-34", "35-44", "45-54", "55-64", "65+"]}
        selected={formData.ageRange}
        onSelect={(v) => {
          updateForm({ ageRange: v });
          router.push("/quote/results");
        }}
      />
    </QuestionShell>
  );
}
