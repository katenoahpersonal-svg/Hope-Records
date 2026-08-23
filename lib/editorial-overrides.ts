import type { CaseRecord } from "./types";
import { caseMedia } from "./media";

const nolanSources: CaseRecord["sources"] = [
  {
    title: "Family of Nolan Xavier Wells and Attorney Ben Crump, joined by Rev. Al Sharpton, demand a full and transparent investigation",
    publisher: "Ben Crump Law / Nolan Wells family",
    url: "https://bencrump.com/press/ben-crump-al-sharpton-nolan-wells/",
    kind: "ADVOCACY / PARTY SOURCE",
    note: "Direct family-and-counsel statement; includes Christine and Elmore Wonsley and Rev. Al Sharpton."
  },
  {
    title: "Family of Nolan Xavier Wells retains Attorney Ben Crump",
    publisher: "Ben Crump Law / Nolan Wells family",
    url: "https://bencrump.com/press/nolan-xavier-wells-horn-island-case",
    kind: "ADVOCACY / PARTY SOURCE",
    note: "Direct statement announcing representation and the family's call for a thorough investigation."
  },
  {
    title: "Preliminary independent-autopsy findings in the death of Nolan Wells",
    publisher: "Ben Crump Law / Nolan Wells family",
    url: "https://bencrump.com/press/ben-crump-nolan-wells-autopsy-findings/",
    kind: "ADVOCACY / PARTY SOURCE",
    note: "Family counsel's announcement of the independent forensic review; findings should be read alongside the pathologist's underlying report when available."
  },
  {
    title: "Family and counsel meet with Jackson County District Attorney",
    publisher: "Ben Crump Law / Nolan Wells family",
    url: "https://bencrump.com/press/ben-crump-nolan-wells-da-meeting/",
    kind: "ADVOCACY / PARTY SOURCE",
    note: "Direct account of the July 15 meeting and request that all relevant evidence be presented to a grand jury."
  },
  {
    title: "Nolan Wells family prepared for joint forensic examination of his phone",
    publisher: "Ben Crump Law / Nolan Wells family",
    url: "https://bencrump.com/press/nolan-wells-family-and-forensic-experts-on-standby-for-joint-inspection-of-his-phone-any-day-this-week/",
    kind: "ADVOCACY / PARTY SOURCE",
    note: "Direct counsel statement describing the agreed forensic-inspection process and correspondence with the district attorney."
  },
  {
    title: "Congressional Black Caucus calls for DOJ review of Nolan Wells' death",
    publisher: "Congressional Black Caucus",
    url: "https://cbc.house.gov/news/documentsingle.aspx?DocumentID=3228",
    kind: "OFFICIAL",
    note: "Official congressional source."
  },
  {
    title: "NAACP Office of General Counsel joins Nolan Wells family legal team",
    publisher: "NAACP",
    url: "https://naacp.org/articles/naacp-office-general-counsel-joins-nolan-wells-family-legal-team",
    kind: "ADVOCACY / PARTY SOURCE",
    note: "Direct statement from the civil-rights organization now participating in the family's legal effort."
  },
  {
    title: "Nolan Wells' mother subpoenas social-media and technology companies",
    publisher: "ABC News",
    url: "https://abcnews.com/US/nolan-wells-mother-subpoenas-social-media-tech-companies/story?id=135199602",
    kind: "REPUTABLE REPORTING",
    note: "Reporting based on Mississippi State Chancery Court records. The underlying subpoena filings remain a priority document set for the archive."
  },
  {
    title: "Death of Nolan Wells to go to Mississippi grand jury",
    publisher: "Reuters",
    url: "https://www.reuters.com/legal/government/death-black-teen-nolan-wells-go-mississippi-grand-jury-2026-07-24/",
    kind: "REPUTABLE REPORTING",
    note: "Straight-news reporting quoting Jackson County District Attorney Angel Myers McIlrath. Grand-jury proceedings themselves are confidential."
  },
  {
    title: "Private autopsy raises questions about Nolan Wells' death",
    publisher: "Reuters",
    url: "https://www.reuters.com/world/us/private-autopsy-raises-questions-about-death-mississippi-college-football-player-2026-07-22/",
    kind: "REPUTABLE REPORTING",
    note: "Reports the independent pathologist's stated limitations and findings without treating 'undetermined' as proof of homicide."
  }
];

const latarshaSources: CaseRecord["sources"] = [
  {
    title: "Commonwealth v. Sanders, SJC-13552 — official slip opinion (PDF)",
    publisher: "Massachusetts Supreme Judicial Court",
    url: "https://www.mass.gov/doc/commonwealth-v-sanders-sjc-f13552/download",
    kind: "PRIMARY",
    note: "Controlling appellate opinion dated Aug. 6, 2026. This is the preferred source for the new-trial ruling and legal reasoning."
  },
  {
    title: "Search Court Dockets, Calendars and Case Information",
    publisher: "Massachusetts Court System",
    url: "https://www.mass.gov/search-court-dockets-calendars-and-case-information",
    kind: "OFFICIAL",
    note: "Controlling source for Plymouth Superior Court post-remand scheduling and filings."
  },
  {
    title: "Brockton Mother Held Without Bail in Murder of Her Two Sons",
    publisher: "Plymouth County District Attorney",
    url: "https://plymouthda.com/news/2018-press-releases-news/brockton-mother-held-without-bail-murder-two-sons/",
    kind: "OFFICIAL",
    note: "Prosecution's contemporaneous charging account; it is not a neutral adjudication of disputed facts."
  },
  {
    title: "Brockton Woman To Serve Life In Prison For Murdering Her Sons",
    publisher: "Plymouth County District Attorney",
    url: "https://plymouthda.com/news/2022-press-releases/brockton-woman-to-serve-life-in-prison-for-murdering-her-sons/",
    kind: "OFFICIAL",
    note: "Prosecution release following the original convictions."
  },
  {
    title: "Massachusetts high court orders new trial for Latarsha Sanders",
    publisher: "WBUR",
    url: "https://www.wbur.org/news/2026/08/06/brockton-mother-murder-new-trial",
    kind: "REPUTABLE REPORTING",
    note: "Local public-radio reporting used for context; the SJC opinion controls the legal conclusions."
  }
];

const keshiaSources: CaseRecord["sources"] = [
  {
    title: "Clerk of the Circuit Court of Cook County",
    publisher: "Cook County Clerk of Court",
    url: "https://www.cookcountyclerkofcourt.org/",
    kind: "OFFICIAL",
    note: "Controlling source for docket, courtroom, and filing information. Direct public PDFs of the police reports and protection-order record have not yet been located in this source review."
  },
  {
    title: "Cook County Public Defender — Keshia Golden resources",
    publisher: "Law Office of the Cook County Public Defender",
    url: "https://www.cookcountypublicdefender.org/links",
    kind: "ADVOCACY / PARTY SOURCE",
    note: "Official defense-office source; useful for the defense position and links to reporting, but not a neutral adjudication of disputed facts."
  },
  {
    title: "Woman says she killed abusive boyfriend to save herself, unborn baby; now faces trial",
    publisher: "Chicago Sun-Times",
    url: "https://chicago.suntimes.com/crime/2026/02/24/chicago-crime-keshia-golden-domestic-violence-abuse-murder",
    kind: "REPUTABLE REPORTING",
    note: "Detailed local reporting citing police reports, court records, and on-record defense interviews."
  },
  {
    title: "Trial set for woman accused of killing abusive boyfriend after baby shower",
    publisher: "Chicago Sun-Times",
    url: "https://chicago.suntimes.com/crime/2026/04/07/chicago-crime-keshia-golden-domestic-violence",
    kind: "REPUTABLE REPORTING",
    note: "Local courthouse reporting on the trial setting and plea posture."
  },
  {
    title: "Chicago woman says she killed abusive boyfriend to save herself and their unborn child",
    publisher: "WBEZ",
    url: "https://www.wbez.org/crime/2026/02/25/chicago-crime-keshia-golden-domestic-violence-abuse-murder",
    kind: "REPUTABLE REPORTING",
    note: "Public-radio reporting; cites the order of protection and prior police responses while distinguishing prosecution and defense accounts."
  },
  {
    title: "Advocates urge Cook County prosecutors to drop charges against woman claiming self-defense",
    publisher: "CBS Chicago",
    url: "https://www.cbsnews.com/chicago/news/advocates-call-for-charges-to-be-dropped-keshia-golden-murder-boyfriend-calvin-sidney/",
    kind: "REPUTABLE REPORTING",
    note: "Recent courthouse reporting with attributed statements from advocates, defense counsel, and the state's attorney's office."
  }
];

export function applyEditorialOverrides(item: CaseRecord): CaseRecord {
  if (item.slug === "nolan-wells") {
    return {
      ...item,
      imageNote: "Photo archive",
      sources: nolanSources,
      editorialNote:
        "Nolan is a son, brother, friend, student, and athlete before he is a case file. This archive will not amplify accusations, partisan commentary, or internet theories as evidence. We will follow original records, direct family and counsel statements, official filings, and independently verifiable facts — and we will say clearly when an answer is still unknown."
    };
  }

  if (item.slug === "latarsha-sanders") {
    return {
      ...item,
      // The prior lead-photo data URI has been unreliable in the Pages build. The
      // verified contact sheet is used as the lead visual until the single-image
      // asset is replaced with a stable repository file.
      heroImage: caseMedia.latarshaGallery,
      imageNote: "Photo archive",
      sources: latarshaSources,
      editorialNote:
        "Latarsha's case should be read through the court record and with full human dignity. The new-trial ruling is not an exoneration; it is a judicial finding that excluded psychiatric evidence prejudiced the criminal-responsibility defense. Comparisons involving race, mental-health treatment, or other defendants should be measured against records rather than assumed from headlines."
    };
  }

  if (item.slug === "keshia-golden") {
    return {
      ...item,
      imageNote: "Photo archive",
      sources: keshiaSources,
      editorialNote:
        "Keshia's humanity and the life of Calvin Sidney both matter. The archive will distinguish the prosecution's account, the defense's self-defense claim, documented prior domestic-violence records, and facts established at trial. We will not use advocacy language as a substitute for evidence, and we will not erase the documented context of alleged abuse simply because it is contested in an active criminal case."
    };
  }

  return item;
}
