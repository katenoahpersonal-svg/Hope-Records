import type { CaseRecord } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const latarshaImages = [
  asset("/cases/latarsha-sanders/01-green-portrait.jpg"),
  asset("/cases/latarsha-sanders/02-family-group.webp"),
  asset("/cases/latarsha-sanders/03-children.webp"),
  asset("/cases/latarsha-sanders/04-stroller.jpg"),
];

export function applyCaseMediaOverrides(item: CaseRecord): CaseRecord {
  if (item.slug !== "latarsha-sanders") return item;

  return {
    ...item,
    heroImage: latarshaImages[0],
    galleryImage: latarshaImages[1],
    imageNote: "Photo archive",
  };
}

export function getCaseGalleryImages(item: CaseRecord): string[] {
  if (item.slug === "latarsha-sanders") return latarshaImages;

  return Array.from(new Set([item.heroImage, item.galleryImage].filter(Boolean)));
}
