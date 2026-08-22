export type EvidenceStatus =
  | "PRIMARY RECORD"
  | "VERIFIED"
  | "CORROBORATED"
  | "FIRST-PERSON ACCOUNT"
  | "REPORTED ALLEGATION"
  | "DISPUTED"
  | "UNVERIFIED"
  | "INVESTIGATIVE QUESTION";

export type CaseStatus =
  | "OPEN RESEARCH"
  | "NEW TRIAL ORDERED"
  | "UNRESOLVED"
  | "ARCHIVED";

export interface CaseRecord {
  slug: string;
  name: string;
  status: CaseStatus;
  location: string;
  dateLabel: string;
  summary: string;
  tags: string[];
  questions: string[];
}

export interface DocumentRecord {
  id: string;
  title: string;
  type: string;
  issuer: string;
  date: string;
  relatedCase: string;
  status: EvidenceStatus[];
}
