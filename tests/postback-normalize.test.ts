import { describe, it, expect } from "vitest";
import { normalize, storableParams } from "../supabase/functions/postback/normalize";

describe("postback normalize", () => {
  it("BestQuotes-style click and lead share one transaction id", () => {
    const click = normalize({ partner: "bestquotes", txid: "TAQ-abc123", event: "click", revenue: "0" });
    const lead = normalize({ partner: "bestquotes", txid: "TAQ-abc123", event: "lead", revenue: "4.20" });
    expect(click).toEqual({ ok: true, event: "click", transaction_id: "TAQ-abc123", revenue: 0, currency: "USD" });
    expect(lead.ok && lead.transaction_id).toBe("TAQ-abc123");
    expect(lead.ok && lead.revenue).toBe(4.2);
  });

  it("Natural Intelligence: pub_param_2 + payout, no event -> conversion", () => {
    const n = normalize({ partner: "ni", pub_param_1: "tryautoquote_seo", pub_param_2: "TAQ-xyz", payout: "12.5", leads_count: "1" });
    expect(n).toEqual({ ok: true, event: "conversion", transaction_id: "TAQ-xyz", revenue: 12.5, currency: "USD" });
  });

  it("accepts common aliases", () => {
    expect(normalize({ transaction_id: "a", type: "SALE", amount: "$1,200.50" })).toMatchObject({ event: "sale", revenue: 1200.5 });
    expect(normalize({ click_id: "b", event_type: "clickout" })).toMatchObject({ event: "clickout", revenue: null });
  });

  it("rejects bad input", () => {
    expect(normalize({ event: "lead" })).toEqual({ ok: false, error: "missing transaction id" });
    expect(normalize({ txid: "a", event: "refund" })).toEqual({ ok: false, error: "unknown event: refund" });
    expect(normalize({ txid: "a", revenue: "abc" })).toEqual({ ok: false, error: "invalid revenue" });
    expect(normalize({ txid: "a", revenue: "-5" })).toEqual({ ok: false, error: "invalid revenue" });
  });

  it("ignores unfilled macros like {txid}", () => {
    expect(normalize({ txid: "{txid}", click_id: "real-1" })).toMatchObject({ transaction_id: "real-1" });
  });

  it("never stores the secret key", () => {
    expect(storableParams({ partner: "ni", key: "secret", txid: "1" })).toEqual({ partner: "ni", txid: "1" });
  });
});
