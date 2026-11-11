import { describe, it, expect } from "vitest";
import { STATE_STATS, METRICS, SOURCES, rankFor, formatStat, type MetricId } from "@/lib/states/stats";
import { states } from "@/lib/states";

describe("state statistics", () => {
  const slugs = new Set(states.map((s) => s.slug));
  const thisYear = new Date().getFullYear();

  it("every entry is a real state", () => {
    for (const slug of Object.keys(STATE_STATS)) expect(slugs.has(slug), slug).toBe(true);
  });

  it("every value is sourced, dated and from an allowed source for its metric", () => {
    for (const [slug, stats] of Object.entries(STATE_STATS)) {
      for (const [m, v] of Object.entries(stats)) {
        const metric = METRICS[m as MetricId];
        expect(metric, `${slug}.${m} unknown metric`).toBeDefined();
        expect(v!.url, `${slug}.${m} url`).toMatch(/^https:\/\//);
        expect(SOURCES[v!.source], `${slug}.${m} source`).toBeDefined();
        expect(metric.sources, `${slug}.${m} source not allowed for metric`).toContain(v!.source);
        expect(v!.year, `${slug}.${m} year`).toBeGreaterThanOrEqual(2015);
        expect(v!.year).toBeLessThanOrEqual(thisYear);
        expect(Number.isFinite(v!.value), `${slug}.${m} value`).toBe(true);
        if (metric.format === "percent") expect(v!.value).toBeLessThanOrEqual(100);
        expect(v!.value).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it("formats values", () => {
    expect(formatStat("avgExpenditure", 1234.4)).toBe("$1,234");
    expect(formatStat("uninsuredRate", 12.345)).toBe("12.3%");
    expect(formatStat("licensedDrivers", 1234567)).toBe("1,234,567");
  });

  it("no rank without data", () => {
    expect(rankFor("texas", "avgExpenditure")).toBeNull();
  });
});

describe("static routes under /car-insurance", () => {
  it("never collide with a state slug", () => {
    for (const r of ["laws-by-state", "coverage", "cost", "claims", "drivers", "buying"]) {
      expect(states.some((s) => s.slug === r), r).toBe(false);
    }
  });
});

import sitemap from "@/app/sitemap";
import { STATE_LAWS_VERIFIED, LAWS_BY_STATE_PATH } from "@/lib/states/verification";

describe("laws-by-state gate", () => {
  it("sitemap includes the comparison page only when verified", () => {
    const urls = sitemap().map((e) => e.url);
    expect(urls.some((u) => u.endsWith(LAWS_BY_STATE_PATH))).toBe(STATE_LAWS_VERIFIED);
  });
});
