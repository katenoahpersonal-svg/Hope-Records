import type { CaseRecord } from "./types";

const stableHeroImages: Record<string, string> = {
  "latarsha-sanders": "https://media.wbur.org/wp/2026/08/Voodoo_Crimes_18040765080666.jpg"
};

export function getCaseHeroImage(item: CaseRecord) {
  return stableHeroImages[item.slug] ?? item.heroImage;
}
