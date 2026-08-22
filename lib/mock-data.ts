import type { CaseRecord, DocumentRecord } from "./types";

// IMPORTANT: These are UI seed records, not editorial findings.
// Replace summaries/metadata only after source verification and editorial review.
export const cases: CaseRecord[] = [
  {
    slug: "nolan-wells",
    name: "Nolan Wells",
    status: "OPEN RESEARCH",
    location: "United States",
    dateLabel: "Case workspace",
    summary:
      "A starter research workspace for organizing verified public records, official statements, reporting, timelines, and unresolved questions.",
    tags: ["Case Research", "Public Records", "Timeline"],
    questions: [
      "What is established by primary records?",
      "Which public claims remain disputed or unverified?",
      "What records are still missing from the public timeline?"
    ]
  },
  {
    slug: "latarsha-sanders",
    name: "Latarsha Sanders",
    status: "NEW TRIAL ORDERED",
    location: "Massachusetts",
    dateLabel: "Updated August 2026",
    summary:
      "A structured workspace for court records, reporting, legal history, and comparative investigative questions. Published claims should link back to their supporting source.",
    tags: ["Court Records", "Legal History", "Comparative Reporting"],
    questions: [
      "Which evidentiary rulings changed on appeal?",
      "How did contemporaneous media coverage frame the case?",
      "Which comparisons to other cases are supported by measurable evidence?"
    ]
  }
];

export const documents: DocumentRecord[] = [
  {
    id: "doc-001",
    title: "Court opinion / order",
    type: "Court Record",
    issuer: "Verified issuing court",
    date: "Source date",
    relatedCase: "Latarsha Sanders",
    status: ["PRIMARY RECORD", "VERIFIED"]
  },
  {
    id: "doc-002",
    title: "Public agency record",
    type: "Government Record",
    issuer: "Issuing agency",
    date: "Source date",
    relatedCase: "Nolan Wells",
    status: ["PRIMARY RECORD"]
  },
  {
    id: "doc-003",
    title: "Recorded interview notes",
    type: "Interview",
    issuer: "Editorial team",
    date: "Interview date",
    relatedCase: "Research archive",
    status: ["FIRST-PERSON ACCOUNT", "UNVERIFIED"]
  },
  {
    id: "doc-004",
    title: "Open research question",
    type: "Research Note",
    issuer: "Editorial team",
    date: "Last reviewed",
    relatedCase: "Comparative research",
    status: ["INVESTIGATIVE QUESTION"]
  }
];
