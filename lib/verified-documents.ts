import type { DocumentRecord } from "./types";

export const verifiedDocuments: DocumentRecord[] = [
  {
    id: "doc-sanders-sjc-official",
    title: "Commonwealth v. Sanders, SJC-13552 — official slip opinion",
    type: "Supreme Judicial Court opinion",
    issuer: "Massachusetts Supreme Judicial Court",
    date: "Aug. 6, 2026",
    relatedCase: "Latarsha Sanders",
    status: ["PRIMARY RECORD", "VERIFIED"],
    url: "https://www.mass.gov/doc/commonwealth-v-sanders-sjc-f13552/download"
  },
  {
    id: "doc-sanders-docket",
    title: "Massachusetts Trial Court docket search — Sanders post-remand",
    type: "Court docket access",
    issuer: "Massachusetts Court System",
    date: "Current",
    relatedCase: "Latarsha Sanders",
    status: ["PRIMARY RECORD"],
    url: "https://www.mass.gov/search-court-dockets-calendars-and-case-information"
  },
  {
    id: "doc-nolan-chancery-subpoenas",
    title: "Chancery Court subpoenas seeking Nolan Wells' digital records",
    type: "Mississippi Chancery Court filing set",
    issuer: "Jackson County Chancery Court / reported from filed records",
    date: "July 2026",
    relatedCase: "Nolan Xavier Wells",
    status: ["CORROBORATED"],
    url: "https://abcnews.com/US/nolan-wells-mother-subpoenas-social-media-tech-companies/story?id=135199602"
  },
  {
    id: "doc-nolan-grand-jury",
    title: "Jackson County DA says completed investigation will be presented to a grand jury",
    type: "Prosecutorial process record",
    issuer: "Jackson County District Attorney / Reuters interview",
    date: "July 24, 2026",
    relatedCase: "Nolan Xavier Wells",
    status: ["OFFICIAL ACCOUNT", "CORROBORATED"],
    url: "https://www.reuters.com/legal/government/death-black-teen-nolan-wells-go-mississippi-grand-jury-2026-07-24/"
  },
  {
    id: "doc-nolan-independent-autopsy",
    title: "Independent autopsy findings announced by family counsel",
    type: "Forensic examination summary",
    issuer: "Family forensic pathologist / Ben Crump legal team",
    date: "July 22, 2026",
    relatedCase: "Nolan Xavier Wells",
    status: ["ADVOCACY / PARTY SOURCE", "CORROBORATED"],
    url: "https://bencrump.com/press/ben-crump-nolan-wells-autopsy-findings/"
  },
  {
    id: "doc-keshia-clerk",
    title: "Keshia Golden criminal case — official Cook County court record access",
    type: "Circuit Court docket access",
    issuer: "Clerk of the Circuit Court of Cook County",
    date: "Current",
    relatedCase: "Keshia Golden",
    status: ["PRIMARY RECORD"],
    url: "https://www.cookcountyclerkofcourt.org/"
  },
  {
    id: "doc-keshia-record-set",
    title: "Prior domestic-violence reports and protection-order file",
    type: "Primary records to retrieve and index",
    issuer: "Chicago Police Department / Cook County courts",
    date: "June–Sept. 2022",
    relatedCase: "Keshia Golden",
    status: ["INVESTIGATIVE QUESTION"]
  }
];
