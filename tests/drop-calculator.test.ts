import { describe, it, expect } from "vitest";
import { evaluate } from "@/components/tools/DropCoverageCalculator";

const base = { carValue: 6000, annualPremium: 650, deductible: 500, financed: false, canReplace: true };

describe("drop full coverage calculator", () => {
  it("needs a value and a premium", () => {
    expect(evaluate({ ...base, carValue: 0 })).toBeNull();
    expect(evaluate({ ...base, annualPremium: 0 })).toBeNull();
  });
  it("financed cars must keep coverage", () => {
    expect(evaluate({ ...base, carValue: 2000, financed: true })!.verdict.tone).toBe("required");
  });
  it("over 10% with savings: consider dropping", () => {
    const r = evaluate({ ...base, carValue: 4000, annualPremium: 650 })!;
    expect(r.pct).toBeCloseTo(16.25);
    expect(r.maxPayout).toBe(3500);
    expect(r.verdict.tone).toBe("drop");
  });
  it("over 10% without savings: be careful", () => {
    expect(evaluate({ ...base, carValue: 4000, canReplace: false })!.verdict.tone).toBe("close");
  });
  it("8 to 10%: close to the line", () => {
    expect(evaluate({ ...base, carValue: 7000, annualPremium: 630 })!.verdict.tone).toBe("close");
  });
  it("under 8%: keep", () => {
    expect(evaluate({ ...base, carValue: 15000 })!.verdict.tone).toBe("keep");
  });
  it("deductible at or above value: nothing to pay out", () => {
    const r = evaluate({ ...base, carValue: 1000, deductible: 1000 })!;
    expect(r.maxPayout).toBe(0);
    expect(r.verdict.tone).toBe("drop");
  });
  it("break-even years = payout / premium", () => {
    expect(evaluate({ ...base, carValue: 6000, annualPremium: 550, deductible: 500 })!.years).toBeCloseTo(10);
  });
});

import fs from "node:fs";
describe("post example table matches the calculator", () => {
  it("each row's verdict agrees with evaluate()", () => {
    const md = fs.readFileSync("content/blogs/when-to-drop-full-coverage.mdx", "utf8");
    const rows = md.split("\n").filter((l) => /^\| \$[\d,]+ \| \$[\d,]+\/yr/.test(l));
    expect(rows.length).toBe(4);
    const label = { drop: "Consider dropping", keep: "Keep it", close: "", required: "" } as const;
    for (const r of rows) {
      const [value, premium, , says] = r.split("|").slice(1, 5).map((c) => c.trim());
      const v = evaluate({ carValue: +value.replace(/\D/g, ""), annualPremium: +premium.replace(/\D/g, ""), deductible: 500, financed: false, canReplace: true })!;
      expect(says.startsWith(label[v.verdict.tone]), `${value}: table "${says}" vs ${v.verdict.tone}`).toBe(true);
    }
  });
});
