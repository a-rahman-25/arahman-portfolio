import { describe, expect, it } from "vitest";
import { buildMailto } from "@/lib/content";

describe("contact form", () => {
  it("routes messages to a.rahmanmohamed2002@gmail.com", () => {
    expect(buildMailto("Sara", "s@x.com", "Hi").startsWith("mailto:a.rahmanmohamed2002@gmail.com?")).toBe(true);
  });
});
