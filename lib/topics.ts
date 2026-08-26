export interface TopicDefinition {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  caseSlugs: string[];
  showDocuments?: boolean;
  ctaLabel: string;
  ctaHref: string;
  emptyMessage?: string;
}

export const topics: TopicDefinition[] = [
  {
    slug: "unresolved-cases",
    title: "Unresolved Cases",
    eyebrow: "Explore by topic",
    description: "Case files where material questions remain open and the next useful step is a record, witness, filing, timeline fact, or forensic finding.",
    caseSlugs: ["nolan-wells"],
    ctaLabel: "Suggest an unresolved case",
    ctaHref: "/share?type=unresolved-case"
  },
  {
    slug: "missing-persons",
    title: "Missing Persons",
    eyebrow: "Explore by topic",
    description: "Records involving disappearance, search timelines, last verified sightings, public notices, and the evidence needed to establish what happened next.",
    caseSlugs: [],
    ctaLabel: "Share a missing-person case",
    ctaHref: "/share?type=unresolved-case",
    emptyMessage: "No active missing-person file is currently published in the archive. New submissions can be preserved for review."
  },
  {
    slug: "questioned-findings",
    title: "Questioned Findings",
    eyebrow: "Explore by topic",
    description: "Files where an official conclusion, classification, charging theory, or public account deserves careful comparison with the underlying evidence.",
    caseSlugs: ["nolan-wells", "latarsha-sanders"],
    ctaLabel: "Flag something overlooked",
    ctaHref: "/share?type=overlooked"
  },
  {
    slug: "survivor-accounts",
    title: "Survivor Accounts",
    eyebrow: "Explore by topic",
    description: "First-person and family-centered records that preserve lived experience while keeping identity, publication permission, and evidentiary status clearly separated.",
    caseSlugs: ["keshia-golden"],
    ctaLabel: "Share your story",
    ctaHref: "/share?type=my-story"
  },
  {
    slug: "historical-records",
    title: "Historical Records",
    eyebrow: "Explore by topic",
    description: "Court records, public filings, archival material, and documentary evidence preserved so the source trail remains visible over time.",
    caseSlugs: [],
    showDocuments: true,
    ctaLabel: "Contribute a document",
    ctaHref: "/share?type=document"
  },
  {
    slug: "family-oral-histories",
    title: "Family Oral Histories",
    eyebrow: "Explore by topic",
    description: "A home for family memory, inherited stories, photographs, documents, and testimony that might otherwise disappear from the public record.",
    caseSlugs: [],
    ctaLabel: "Preserve a family story",
    ctaHref: "/share?type=family-history",
    emptyMessage: "Family oral histories are not publicly indexed yet. The intake pathway is ready for future preservation and review."
  }
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
