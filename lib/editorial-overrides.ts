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

const nolanTimeline: CaseRecord["timeline"] = [
  { date: "July 4, 2026 · 9:56 a.m.", title: "Boat leaves private dock", body: "Approximate departure time reported from Mississippi Department of Marine Resources GPS data. The original GPS export is not yet linked in the public archive.", label: "CORROBORATED", url: "https://www.wlox.com/2026/07/16/gps-data-tracks-boat-movement-before-nolan-wells-disappearance-death/", sourceLabel: "See reporting based on MDMR GPS data" },
  { date: "July 4, 2026 · 11:14 a.m.", title: "Boat reaches Horn Island", body: "Approximate arrival time reported from the same MDMR GPS data.", label: "CORROBORATED", url: "https://www.wlox.com/2026/07/16/gps-data-tracks-boat-movement-before-nolan-wells-disappearance-death/", sourceLabel: "See reporting based on MDMR GPS data" },
  { date: "July 4, 2026 · 4:31 p.m.", title: "Boat leaves Horn Island", body: "The vessel departed without Nolan aboard. Why he remained is disputed in public accounts; this timestamp does not establish motive or responsibility.", label: "DISPUTED", url: "https://www.wlox.com/2026/07/16/gps-data-tracks-boat-movement-before-nolan-wells-disappearance-death/", sourceLabel: "See GPS-source reporting" },
  { date: "July 6, 2026", title: "Nolan's body is recovered", body: "His body was recovered in the water off Horn Island and later identified using dental records.", label: "VERIFIED", url: "https://www.reuters.com/world/us/private-autopsy-raises-questions-about-death-mississippi-college-football-player-2026-07-22/", sourceLabel: "Reuters case chronology" },
  { date: "July 9, 2026", title: "Family, Ben Crump and Rev. Al Sharpton call for a transparent investigation", body: "Nolan's family and counsel publicly called for a full investigation and cautioned against premature conclusions about his death.", label: "ADVOCACY / PARTY SOURCE", url: "https://bencrump.com/press/ben-crump-al-sharpton-nolan-wells/", sourceLabel: "Direct family and counsel statement" },
  { date: "July 15, 2026", title: "Family and counsel meet with Jackson County District Attorney", body: "Family counsel described a meeting with the district attorney and requested that relevant evidence be presented for grand-jury review.", label: "ADVOCACY / PARTY SOURCE", url: "https://bencrump.com/press/ben-crump-nolan-wells-da-meeting/", sourceLabel: "Direct counsel statement" },
  { date: "July 22, 2026", title: "Independent autopsy findings announced", body: "The family-commissioned examination reported cause and manner of death as undetermined. That classification neither proves homicide nor proves accidental drowning.", label: "CORROBORATED", url: "https://bencrump.com/press/ben-crump-nolan-wells-autopsy-findings/", sourceLabel: "Family counsel forensic summary" },
  { date: "July 24, 2026", title: "District attorney says completed investigation will go to a grand jury", body: "Jackson County District Attorney Angel Myers McIlrath told Reuters the completed investigation would be presented to a grand jury. Grand-jury proceedings themselves are confidential.", label: "OFFICIAL ACCOUNT", url: "https://www.reuters.com/legal/government/death-black-teen-nolan-wells-go-mississippi-grand-jury-2026-07-24/", sourceLabel: "DA statement reported by Reuters" },
  { date: "Late July 2026", title: "Chancery Court subpoenas seek digital records", body: "Counsel for Nolan's mother filed subpoenas seeking records from technology and social-media companies. The archive is still seeking direct public copies of the filed subpoena documents.", label: "CORROBORATED", url: "https://abcnews.com/US/nolan-wells-mother-subpoenas-social-media-tech-companies/story?id=135199602", sourceLabel: "Reporting based on filed Chancery Court records" },
  { date: "Aug. 12–17, 2026", title: "Federal-review advocacy expands", body: "The Congressional Black Caucus sought federal review, and the NAACP's Office of General Counsel joined the family's legal effort.", label: "OFFICIAL ACCOUNT", url: "https://cbc.house.gov/news/documentsingle.aspx?DocumentID=3228", sourceLabel: "Congressional Black Caucus official statement" }
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

const latarshaTimeline: CaseRecord["timeline"] = [
  { date: "Feb. 5, 2018", title: "Police and emergency personnel respond", body: "Sanders's two sons were found dead in the Brockton apartment. She was arrested and charged. This entry links to the prosecution's contemporaneous release and should be read as the Commonwealth's account at the charging stage.", label: "OFFICIAL ACCOUNT", url: "https://plymouthda.com/news/2018-press-releases-news/brockton-mother-held-without-bail-murder-two-sons/", sourceLabel: "Plymouth County DA charging release" },
  { date: "Dec. 2022", title: "Jury convicts Sanders", body: "A jury convicted Sanders of two counts of first-degree murder; the prosecution reported concurrent mandatory life-without-parole sentences.", label: "VERIFIED", url: "https://plymouthda.com/news/2022-press-releases/brockton-woman-to-serve-life-in-prison-for-murdering-her-sons/", sourceLabel: "Plymouth County DA post-verdict release" },
  { date: "March 6, 2026", title: "Supreme Judicial Court hears appeal", body: "The appeal included the exclusion of psychiatric records central to the lack-of-criminal-responsibility defense. The controlling legal history is summarized in the court's final opinion.", label: "PRIMARY RECORD", url: "https://www.mass.gov/doc/commonwealth-v-sanders-sjc-f13552/download", sourceLabel: "Official SJC opinion PDF" },
  { date: "Aug. 6, 2026", title: "Massachusetts SJC vacates convictions and orders a new trial", body: "The SJC held that exclusion of psychiatric treatment records prejudiced Sanders's criminal-responsibility defense and remanded for retrial.", label: "PRIMARY RECORD", url: "https://www.mass.gov/doc/commonwealth-v-sanders-sjc-f13552/download", sourceLabel: "Read the official SJC opinion PDF" },
  { date: "As of Aug. 23, 2026", title: "Post-remand schedule remains to be verified", body: "The Massachusetts Trial Court docket is the controlling record for the next scheduling order or retrial date.", label: "INVESTIGATIVE QUESTION", url: "https://www.mass.gov/search-court-dockets-calendars-and-case-information", sourceLabel: "Massachusetts official docket search" }
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

const keshiaTimeline: CaseRecord["timeline"] = [
  { date: "June–Sept. 2022", title: "Multiple domestic-violence calls are reported", body: "Local reporting says police responded to five incidents involving Golden and Sidney, with allegations in both directions. The underlying reports remain a priority primary-record set and should not be replaced by summary prose.", label: "CORROBORATED", url: "https://chicago.suntimes.com/crime/2026/02/24/chicago-crime-keshia-golden-domestic-violence-abuse-murder", sourceLabel: "Sun-Times reporting citing police records" },
  { date: "July 2022", title: "Order of protection is reported", body: "Golden reportedly obtained an order of protection after alleging Sidney punched her. The archive is still seeking the direct public court file.", label: "CORROBORATED", url: "https://www.wbez.org/crime/2026/02/25/chicago-crime-keshia-golden-domestic-violence-abuse-murder", sourceLabel: "WBEZ reporting citing court records" },
  { date: "Oct. 23, 2022", title: "Fatal stabbing after baby shower", body: "Golden stabbed Sidney once in the thigh. He died from the femoral-artery injury. The circumstances immediately preceding the stabbing remain disputed between prosecution and defense.", label: "DISPUTED", url: "https://chicago.suntimes.com/crime/2026/02/24/chicago-crime-keshia-golden-domestic-violence-abuse-murder", sourceLabel: "Detailed local court-record reporting" },
  { date: "March 2026", title: "Probation plea offer reported", body: "Prosecutors reportedly offered a second-degree murder disposition with two years of probation; the defense rejected it while seeking dismissal.", label: "CORROBORATED", url: "https://chicago.suntimes.com/crime/2026/03/03/chicago-keshia-golden-crime-domestic-violence-murder-eileen-oneill-burke", sourceLabel: "Sun-Times courthouse reporting" },
  { date: "April 2026", title: "August trial setting reported", body: "A judge set the case for an August trial while first-degree murder charges remained pending.", label: "CORROBORATED", url: "https://chicago.suntimes.com/crime/2026/04/07/chicago-crime-keshia-golden-domestic-violence", sourceLabel: "Sun-Times courthouse reporting" },
  { date: "Aug. 24, 2026 · reported", title: "Trial week expected to begin", body: "Recent reporting places the trial in the week beginning Aug. 24. Exact courtroom logistics should be taken from the Cook County Clerk's docket, not advocacy calendars or social posts.", label: "UNVERIFIED", url: "https://www.cookcountyclerkofcourt.org/", sourceLabel: "Check official Cook County docket" }
];

export function applyEditorialOverrides(item: CaseRecord): CaseRecord {
  if (item.slug === "nolan-wells") {
    return {
      ...item,
      imageNote: "Photo archive",
      sources: nolanSources,
      timeline: nolanTimeline,
      editorialNote:
        "Nolan is a son, brother, friend, student, and athlete before he is a case file. This archive will not amplify accusations, partisan commentary, or internet theories as evidence. We will follow original records, direct family and counsel statements, official filings, and independently verifiable facts — and we will say clearly when an answer is still unknown."
    };
  }

  if (item.slug === "latarsha-sanders") {
    return {
      ...item,
      heroImage: caseMedia.latarshaGallery,
      imageNote: "Photo archive",
      sources: latarshaSources,
      timeline: latarshaTimeline,
      editorialNote:
        "Latarsha's case should be read through the court record and with full human dignity. The new-trial ruling is not an exoneration; it is a judicial finding that excluded psychiatric evidence prejudiced the criminal-responsibility defense. Comparisons involving race, mental-health treatment, or other defendants should be measured against records rather than assumed from headlines."
    };
  }

  if (item.slug === "keshia-golden") {
    return {
      ...item,
      imageNote: "Photo archive",
      sources: keshiaSources,
      timeline: keshiaTimeline,
      editorialNote:
        "Keshia's humanity and the life of Calvin Sidney both matter. The archive will distinguish the prosecution's account, the defense's self-defense claim, documented prior domestic-violence records, and facts established at trial. We will not use advocacy language as a substitute for evidence, and we will not erase the documented context of alleged abuse simply because it is contested in an active criminal case."
    };
  }

  return item;
}
