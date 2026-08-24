import type { CaseRecord } from "./types";
import { caseMedia } from "./media";
import { latarshaEmbeddedImages } from "./latarsha-embedded";

export interface GallerySheetSpec {
  sheet: string;
  count: number;
  columns: number;
  rows: number;
  altPrefix: string;
}

const gallerySheets: Record<string, GallerySheetSpec> = {
  "nolan-wells": {
    sheet: caseMedia.nolanGallery,
    count: 6,
    columns: 3,
    rows: 2,
    altPrefix: "Nolan Xavier Wells photo"
  },
  "latarsha-sanders": {
    sheet: caseMedia.latarshaGallery,
    count: 4,
    columns: 2,
    rows: 2,
    altPrefix: "Latarsha Sanders family photo"
  },
  "keshia-golden": {
    sheet: caseMedia.keshiaGallery,
    count: 4,
    columns: 2,
    rows: 2,
    altPrefix: "Keshia Golden family photo"
  }
};

export function applyCaseMediaOverrides(item: CaseRecord): CaseRecord {
  if (item.slug === "latarsha-sanders") {
    return {
      ...item,
      heroImage: latarshaEmbeddedImages[0],
      galleryImage: caseMedia.latarshaGallery,
      imageNote: "4 photographs"
    };
  }

  if (item.slug === "nolan-wells") {
    return {
      ...item,
      heroImage: caseMedia.nolanHero,
      galleryImage: caseMedia.nolanGallery,
      imageNote: "6 photographs"
    };
  }

  if (item.slug === "keshia-golden") {
    return {
      ...item,
      heroImage: caseMedia.keshiaHero,
      galleryImage: caseMedia.keshiaGallery,
      imageNote: "4 photographs"
    };
  }

  return item;
}

export function getCaseGallerySheet(item: CaseRecord): GallerySheetSpec | null {
  return gallerySheets[item.slug] ?? null;
}

export function getCaseGalleryImages(item: CaseRecord): string[] {
  return Array.from(new Set([item.heroImage, item.galleryImage].filter(Boolean)));
}
