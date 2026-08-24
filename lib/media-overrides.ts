import type { CaseRecord } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (filename: string) => `${basePath}/${filename}`;

const caseGalleries: Record<string, string[]> = {
  "nolan-wells": [
    asset("nolan-01.jpg"),
    asset("nolan-02.jpg"),
    asset("nolan-03.jpg"),
    asset("nolan-04.jpg"),
    asset("nolan-05.jpg"),
    asset("nolan-06.jpg")
  ],
  "latarsha-sanders": [
    asset("latarsha-01.jpg"),
    asset("latarsha-02.jpg"),
    asset("latarsha-03.jpg"),
    asset("latarsha-04.jpg")
  ],
  "keshia-golden": [
    asset("keshia-01.jpg"),
    asset("keshia-02.jpg"),
    asset("keshia-03.jpg"),
    asset("keshia-04.jpg")
  ]
};

export function applyCaseMediaOverrides(item: CaseRecord): CaseRecord {
  const gallery = caseGalleries[item.slug];
  if (!gallery) return item;

  if (item.slug === "latarsha-sanders") {
    return {
      ...item,
      heroImage: asset("latarsha-01.jpg"),
      galleryImage: gallery[0],
      imageNote: "4 photographs"
    };
  }

  if (item.slug === "nolan-wells") {
    return {
      ...item,
      heroImage: asset("nolan-06.jpg"),
      galleryImage: gallery[0],
      imageNote: "6 photographs"
    };
  }

  if (item.slug === "keshia-golden") {
    return {
      ...item,
      heroImage: asset("keshia-01.jpg"),
      galleryImage: gallery[0],
      imageNote: "4 photographs"
    };
  }

  return item;
}

export function getCaseGalleryImages(item: CaseRecord): string[] {
  return caseGalleries[item.slug] ?? Array.from(new Set([item.heroImage, item.galleryImage].filter(Boolean)));
}
