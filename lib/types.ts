export type EvidenceStatus =
  | "PRIMARY RECORD"
  | "VERIFIED"
  | "CORROBORATED"
  | "FIRST-PERSON ACCOUNT"
  | "REPORTED ALLEGATION"
  | "DISPUTED"
  | "UNVERIFIED"
  | "INVESTIGATIVE QUESTION"
  | "OFFICIAL ACCOUNT"
  | "ADVOCACY / PARTY SOURCE";

export type CaseStatus =
  | "OPEN RESEARCH"
  | "NEW TRIAL ORDERED"
  | "UNRESOLVED"
  | "TRIAL SCHEDULED"
  | "ARCHIVED";

export interface FindingRecord {
  label: EvidenceStatus;
  title: string;
  body: string;
}

export interface TimelineRecord {
  date: string;
  title: string;
  body: string;
  label?: EvidenceStatus;
}

export interface SourceRecord {
  title: string;
  publisher: string;
  url: string;
  kind: "PRIMARY" | "OFFICIAL" | "REPUTABLE REPORTING" | "ADVOCACY / PARTY SOURCE";
  note?: string;
}

export interface CaseRecord {
  slug: string;
  name: string;
  status: CaseStatus;
  location: string;
  dateLabel: string;
  summary: string;
  heroImage: string;
  galleryImage: string;
  imageNote: string;
  tags: string[];
  findings: FindingRecord[];
  timeline: TimelineRecord[];
  questions: string[];
  sources: SourceRecord[];
  editorialNote: string;
}

export interface DocumentRecord {
  id: string;
  title: string;
  type: string;
  issuer: string;
  date: string;
  relatedCase: string;
  status: EvidenceStatus[];
  url?: string;
}
