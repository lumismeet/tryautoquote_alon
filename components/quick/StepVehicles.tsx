"use client";

import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import QuestionShell, { OptionButtons } from "./QuestionShell";
import { useZipGuard } from "./useZipGuard";

export default function StepVehicles() {
  useZipGuard();
  const router = useRouter();
  const { formData, updateForm } = useForm();

  return (
    <QuestionShell title="How many vehicles do you want to insure?">
      <OptionButtons
        columns={3}
        options={["1", "2", "3+"]}
        selected={formData.vehicleCount}
        onSelect={(v) => {
          updateForm({ vehicleCount: v });
          router.push("/quote/3");
        }}
      />
    </QuestionShell>
  );
}
