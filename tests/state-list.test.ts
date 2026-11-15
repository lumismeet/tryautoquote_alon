import { describe, it, expect } from "vitest";
import { STATE_LIST } from "@/lib/state-list";
import { states } from "@/lib/states";
describe("state link list", () => {
  it("matches every state page we publish, no more and no less", () => {
    expect(STATE_LIST.map((s) => s.slug).sort()).toEqual(states.map((s) => s.slug).sort());
  });
});
