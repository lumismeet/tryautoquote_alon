import { describe, expect, it } from "vitest";
import { organizationSchema } from "@/lib/agent/schema";

describe("Organization JSON-LD", () => {
  it("includes contactPoint with email and contactType", () => {
    expect(organizationSchema.contactPoint).toMatchObject({
      "@type": "ContactPoint",
      email: "info@tryautoquote.com",
      contactType: "customer support",
    });
  });
  it("includes a PostalAddress", () => {
    expect(organizationSchema.address).toEqual({ "@type": "PostalAddress", addressCountry: "CY" });
    expect(organizationSchema.parentOrganization.legalName).toBe("StarTech Media Ltd.");
  });
});
