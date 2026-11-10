import { describe, it, expect } from "vitest";
import { aiSourceFromReferrer, aiSourceFromUtm } from "@/lib/ai-referrers";

describe("aiSourceFromReferrer", () => {
  it.each([
    ["https://chatgpt.com/", "chatgpt"],
    ["https://chat.openai.com/c/123", "chatgpt"],
    ["https://www.perplexity.ai/search?q=x", "perplexity"],
    ["https://gemini.google.com/app", "gemini"],
    ["https://copilot.microsoft.com/", "copilot"],
    ["https://claude.ai/chat/1", "claude"],
  ])("%s -> %s", (ref, name) => expect(aiSourceFromReferrer(ref)).toBe(name));

  it.each(["https://www.google.com/", "https://notchatgpt.com.evil.io/", "", "not a url"])(
    "ignores %s",
    (ref) => expect(aiSourceFromReferrer(ref)).toBeNull()
  );
});

describe("aiSourceFromUtm", () => {
  it("reads utm_source", () => {
    expect(aiSourceFromUtm("?utm_source=chatgpt.com")).toBe("chatgpt");
    expect(aiSourceFromUtm("?utm_source=perplexity")).toBe("perplexity");
    expect(aiSourceFromUtm("?utm_source=newsletter")).toBeNull();
    expect(aiSourceFromUtm("")).toBeNull();
  });
});
