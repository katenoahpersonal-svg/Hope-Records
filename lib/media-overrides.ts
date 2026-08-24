import type { CaseRecord } from "./types";
import { latarshaEmbeddedImages } from "./latarsha-embedded";

const latarshaImages = [...latarshaEmbeddedImages];

export function applyCaseMediaOverrides(item: CaseRecord): CaseRecord {
  if (item.slug !== "latarsha-sanders") return item;

  return {
    ...item,
    heroImage: latarshaImages[0],
    galleryImage: latarshaImages[0],
    imageNote: "Photo archive",
  };
}

export function getCaseGalleryImages(item: CaseRecord): string[] {
  if (item.slug === "latarsha-sanders") return latarshaImages;

  return Array.from(new Set([item.heroImage, item.galleryImage].filter(Boolean)));
}
