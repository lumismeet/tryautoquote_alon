"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import QuestionShell, { OptionButtons } from "./QuestionShell";
import { useZipGuard } from "./useZipGuard";

export default function StepHome() {
  useZipGuard();
  const router = useRouter();
  const { formData, updateForm } = useForm();

  return (
    <QuestionShell title="Do you own or rent your home?">
      <OptionButtons
        columns={2}
        options={["Own", "Rent"]}
        selected={formData.homeowner}
        onSelect={(v) => {
          updateForm({ homeowner: v });
          router.push("/quote/4");
        }}
      />
    </QuestionShell>
  );
}
