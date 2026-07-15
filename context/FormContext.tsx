"use client";

import { createContext, useContext, useState, useEffect } from "react";

type FormDataType = {
  leadId?: string;
  zipcode?: string;
//   vehicleMake?: string;
//   vehicleYear?: number;
//   vehicleModel?: string;
//   primaryUse?: string;
//   mileage?: string;
//   coverage?: string;
//   ownership?: string;
vehicles: VehicleType[];
currentVehicleIndex: number;
currentlyInsured?: string;
currentInsurance?: string;
continuousCoverage?: string;
activeLicense?: string;
ticketsLast3Years?: string;
sr22Filed?: string;
homeowner?: string;
married?: string;
gender?: string;
military?: string;
education?: string;
creditScore?: string;
dob?: string;
firstName?: string;
lastName?: string;
street?: string;
email?: string;
phone?: string;



};

type FormContextType = {
  formData: FormDataType;
  updateForm: (
    data:
      | Partial<FormDataType>
      | ((prev: FormDataType) => FormDataType)
  ) => void;
  // False until saved data has been read from localStorage. Guards that
  // redirect on "missing" data must wait for this, or they'll fire against
  // the default state before hydration and bounce the user backward.
  hydrated: boolean;
};



const FormContext = createContext<FormContextType | undefined>(undefined);

type VehicleType = {
  vehicleYear?: number;
  vehicleMake?: string;
  vehicleModel?: string;
  primaryUse?: string;
  mileage?: string;
  coverage?: string;
  ownership?: string;
};


export function FormProvider({ children }: { children: React.ReactNode }) {
  
  const [formData, setFormData] = useState<FormDataType>({
  leadId: crypto.randomUUID(),
  vehicles: [
    {
      vehicleYear: undefined,
      vehicleMake: "",
      vehicleModel: "",
    }
  ],
  currentVehicleIndex: 0,
});

  const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("leadForm");
            if (stored) {
                const parsed = JSON.parse(stored);

                setFormData(prev => ({
                    ...prev,
                    ...parsed,
                    vehicles:
                        parsed.vehicles && parsed.vehicles.length > 0
                            ? parsed.vehicles
                            : prev.vehicles,
                    currentVehicleIndex:
                        typeof parsed.currentVehicleIndex === "number"
                            ? parsed.currentVehicleIndex
                            : 0,
                }));
            }
        } catch (err) {
            // Private mode / blocked or corrupt storage — fall back to defaults.
            console.warn("Could not read saved form data:", err);
        } finally {
            // Mark hydration complete even if nothing was stored, so redirect
            // guards know the real data (or confirmed absence) is now in place.
            setHydrated(true);
        }
    }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    try {
      localStorage.setItem("leadForm", JSON.stringify(formData));
    } catch (err) {
      // Storage full or blocked (e.g. Safari Private Mode) — skip persisting.
      console.warn("Could not save form data:", err);
    }
  }, [formData]);

  const updateForm: FormContextType["updateForm"] = (data) => {
  setFormData(prev =>
    typeof data === "function"
      ? data(prev)
      : { ...prev, ...data }
  );
};


  return (
    <FormContext.Provider value={{ formData, updateForm, hydrated }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used inside FormProvider");
  }
  return context;
}
