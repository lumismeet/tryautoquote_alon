import { describe, it, expect } from "vitest";
import { matchingOffers, OFFERS } from "@/lib/offers";

const young = { zip: "75001", state: "TX", insured: "No", age: "18-24" };

describe("partner preview", () => {
  it("regular visitors never see inactive offers", () => {
    const ids = matchingOffers(young).map((o) => o.id);
    for (const o of OFFERS.filter((x) => !x.active)) expect(ids).not.toContain(o.id);
  });

  it("a preview link shows that partner's card first, labeled, even when filters would hide it", () => {
    const shown = matchingOffers(young, { preview: "bestmoney" });
    expect(shown[0].id).toBe("ni-bestmoney-auto");
    expect(shown[0].preview).toBe(true);
  });

  it("BestQuotes preview has no link until the tracking URL arrives", () => {
    const bq = matchingOffers(young, { preview: "bestquotes" })[0];
    expect(bq.id).toBe("bestquotes-auto");
    expect(bq.url).toBe("");
  });

  it("an unknown preview key changes nothing", () => {
    expect(matchingOffers(young, { preview: "nope" })).toEqual(matchingOffers(young));
  });

  it("live offers are never marked as preview", () => {
    for (const o of matchingOffers({ ...young, age: "35-44" }, { preview: "bestquotes" }).slice(1)) expect(o.preview).toBeFalsy();
  });
});

describe("multiple partner previews", () => {
  it("shows both partners, in the order given, before live offers", () => {
    const shown = matchingOffers(young, { preview: "bestquotes,bestmoney" });
    expect(shown.slice(0, 2).map((o) => o.id)).toEqual(["bestquotes-auto", "ni-bestmoney-auto"]);
    expect(shown.slice(0, 2).every((o) => o.preview)).toBe(true);
  });
  it("ignores unknown keys in the list", () => {
    expect(matchingOffers(young, { preview: "nope,bestmoney" })[0].id).toBe("ni-bestmoney-auto");
  });
});
