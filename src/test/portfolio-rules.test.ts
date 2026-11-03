import { describe, expect, it } from "vitest";
import { projects, PHONE, PHONE_URL, WHATSAPP_URL, t } from "@/lib/content";

describe("portfolio facts", () => {
  it("records Hafco as 2025–Present", () => {
    expect(projects.find(p => p.id === "hafco")?.year).toBe("2025 – Present");
  });
  it("marks all seven company redesigns as unofficial concepts without unconfirmed years", () => {
    for (const id of ["elite-ticaret", "elite-saudi", "shajarah", "prime-elite", "khaldi", "keo", "sahara"]) {
      const p = projects.find(p => p.id === id);
      expect(p?.kind.en).toBe("Concept redesign");
      expect(p?.disclaimer).toBeDefined();
      expect(p?.year).toBeUndefined();
    }
  });
  it("links MergesPDF to the supplied website", () => {
    expect(projects.find(p => p.id === "amlaunch")?.url).toBe("https://mergespdf.com/");
  });
  it("uses the same supplied number for calls and WhatsApp", () => {
    expect(PHONE).toBe("+966 55 049 0988");
    expect(PHONE_URL).toBe("tel:+966550490988");
    expect(WHATSAPP_URL).toBe("https://wa.me/966550490988");
  });
  it("records payroll improvement from 2–3 days to seconds", () => {
    expect(t.en.stats[2].display).toBe("2–3 days → seconds");
  });
});