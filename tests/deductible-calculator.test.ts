import { describe, it, expect } from "vitest";
import { evaluateDeductible } from "@/components/tools/DeductibleCalculator";

const base = { lowDeductible: 500, highDeductible: 1000, premiumLow: 1450, premiumHigh: 1300, pace: "rare" as const, canAfford: true };

describe("deductible calculator", () => {
  it("matches the post's example: $150 saved -> about 3.3 years", () => {
    expect(evaluateDeductible(base)!.breakeven).toBeCloseTo(3.33, 1);
  });
  it("rare claims + savings -> higher deductible wins", () => {
    expect(evaluateDeductible(base)!.tone).toBe("high");
  });
  it("frequent claims -> lower deductible", () => {
    expect(evaluateDeductible({ ...base, pace: "frequent" })!.tone).toBe("low");
  });
  it("can't afford the higher deductible -> stick with lower for now", () => {
    expect(evaluateDeductible({ ...base, canAfford: false })!.tone).toBe("close");
  });
  it("no premium saving -> keep the lower deductible", () => {
    const r = evaluateDeductible({ ...base, premiumHigh: 1450 })!;
    expect(r.tone).toBe("low"); expect(r.breakeven).toBeNull();
  });
  it("needs both premiums and a higher deductible that is actually higher", () => {
    expect(evaluateDeductible({ ...base, premiumLow: 0 })).toBeNull();
    expect(evaluateDeductible({ ...base, highDeductible: 500 })).toBeNull();
  });
  it("$80 saving stretches breakeven past 6 years, as the post says", () => {
    expect(evaluateDeductible({ ...base, premiumHigh: 1370 })!.breakeven!).toBeGreaterThan(6);
  });
});
