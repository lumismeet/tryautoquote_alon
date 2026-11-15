import { describe, it, expect } from "vitest";
import { isValidUsZip } from "@/lib/zipToState";
describe("ZIP validation", () => {
  it.each(["75001", "90210", "10001", "02108", "99501", "96813"])("accepts real ZIP %s", (z) => expect(isValidUsZip(z)).toBe(true));
  it.each(["00000", "00100", "00499", "123", "abcde", "", "7500"])("rejects %s", (z) => expect(isValidUsZip(z)).toBe(false));
});
