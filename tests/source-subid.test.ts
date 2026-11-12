import { describe, it, expect } from "vitest";
import { sourceSubId } from "@/lib/source-subid";
import { buildOfferUrl, OFFERS } from "@/lib/offers";

describe("partner sub ID by site section", () => {
  it.each([
    [null, "taq_direct"], ["direct", "taq_direct"], ["/", "taq_home"], ["/tools", "taq_tools"],
    ["/car-insurance", "taq_pillar"], ["/car-insurance/claims", "taq_claims"], ["/car-insurance/texas", "taq_states"],
    ["/car-insurance/laws-by-state", "taq_states"], ["/blogs/when-to-drop-full-coverage", "taq_coverage"],
    ["/blogs/sr22-insurance", "taq_drivers"], ["/blogs/things-your-car-insurance-company-wont-tell-you", "taq_buying"],
    ["/guides/what-to-do-after-a-car-accident", "taq_claims"], ["/blogs/not-a-real-post", "taq_blog"],
    ["/blogs", "taq_blog"], ["/about", "taq_other"], ["/blogs/gap-insurance?x=1", "taq_coverage"],
  ])("%s -> %s", (path, id) => expect(sourceSubId(path as string | null)).toBe(id));
});

describe("BestMoney link", () => {
  it("sends the dynamic sub ID in pub_param_1 and keeps the page in external_campaign_id", () => {
    const ni = OFFERS.find((o) => o.id === "ni-bestmoney-auto")!;
    const url = new URL(buildOfferUrl(ni, { zip: "75001", state: "TX", insured: "Yes", age: "35-44" }, {
      medium: "organic", campaign: "blogs_when-to-drop-full-coverage", content: "x", clickId: "TAQ-1",
      subId: sourceSubId("/blogs/when-to-drop-full-coverage"),
    }));
    expect(url.searchParams.get("pub_param_1")).toBe("taq_coverage");
    expect(url.searchParams.get("pub_param_2")).toBe("TAQ-1");
    expect(url.searchParams.get("external_campaign_id")).toBe("blogs_when-to-drop-full-coverage");
    expect(url.searchParams.get("aff_traffic_join")).toBe("Organic_Search");
    expect(url.searchParams.get("aff_source_join")).toBe("Google");
  });
});
