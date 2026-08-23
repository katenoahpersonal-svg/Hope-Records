import type { CaseRecord, DocumentRecord } from "./types";
import { caseMedia } from "./media";

// Publication posture: evidence first. Facts, allegations, disputed accounts, and
// investigative questions are deliberately separated rather than blended.
export const cases: CaseRecord[] = [
  {
    slug: "nolan-wells",
    name: "Nolan Xavier Wells",
    status: "UNRESOLVED",
    location: "Horn Island, Mississippi",
    dateLabel: "Source review · Aug. 23, 2026",
    summary:
      "Nolan Xavier Wells, 18, disappeared during a July Fourth trip to Horn Island and was found dead two days later. Public records establish key boat-movement timestamps, while witness accounts about why he remained on the island conflict. An independent autopsy classified his cause and manner of death as undetermined pending further investigation.",
    heroImage: caseMedia.nolanHero,
    galleryImage: caseMedia.nolanGallery,
    imageNote: "User-supplied research media. Photographer/source and republication rights should be confirmed before broader reuse.",
    tags: ["Unresolved Death", "Timeline Reconstruction", "Forensic Records"],
    findings: [
      {
        label: "VERIFIED",
        title: "The boat left Horn Island without Nolan.",
        body: "GPS data attributed to the Mississippi Department of Marine Resources places the boat at Horn Island from about 11:14 a.m. until about 4:31 p.m. on July 4. Reporting based on that data shows the vessel departed without Nolan. The public record does not establish why he was not aboard."
      },
      {
        label: "DISPUTED",
        title: "Accounts of Nolan's intended departure conflict.",
        body: "Authorities initially relayed an account that Nolan chose to stay behind. His family disputes that characterization. Later reporting also described a conflicting account from a young woman who said she believed Nolan planned to leave with his friends. The underlying interview recordings have not been publicly released."
      },
      {
        label: "VERIFIED",
        title: "The independent autopsy did not determine a cause or manner of death.",
        body: "The family-commissioned examination reported the cause and manner as undetermined. Decomposition and the prior state examination limited what the independent pathologist could assess. 'Undetermined' is not a finding of homicide, and it is not a finding of accidental drowning."
      },
      {
        label: "OFFICIAL ACCOUNT",
        title: "The investigation remained active and public evidence was being withheld.",
        body: "Authorities said the state examination and other evidence would not be publicly released while the criminal investigation and anticipated grand-jury review were ongoing. No person had been publicly named as a suspect or charged in Nolan's death in the reliable reporting reviewed for this update."
      },
      {
        label: "ADVOCACY / PARTY SOURCE",
        title: "National civil-rights groups are pressing for additional review.",
        body: "The Congressional Black Caucus asked federal officials for an independent review, and the NAACP's Office of General Counsel joined the Wells family's legal team. Those developments document advocacy for scrutiny; they do not independently establish a cause of death or criminal responsibility."
      }
    ],
    timeline: [
      { date: "July 4, 2026 · 9:56 a.m.", title: "Boat leaves private dock", body: "Approximate departure time reported from Mississippi Department of Marine Resources GPS data.", label: "CORROBORATED" },
      { date: "July 4, 2026 · 11:14 a.m.", title: "Boat reaches Horn Island", body: "Approximate arrival time reported from the same GPS data.", label: "CORROBORATED" },
      { date: "July 4, 2026 · 4:31 p.m.", title: "Boat leaves Horn Island", body: "The vessel departed without Nolan aboard. Why he remained is disputed in the public accounts.", label: "DISPUTED" },
      { date: "July 6, 2026", title: "Nolan's body is recovered", body: "His body was recovered in the water off Horn Island and later identified using dental records.", label: "VERIFIED" },
      { date: "July 22, 2026", title: "Independent autopsy findings announced", body: "The family-commissioned autopsy reported the cause and manner of death as undetermined pending further investigation.", label: "VERIFIED" },
      { date: "Aug. 12–17, 2026", title: "Calls for federal review expand", body: "The Congressional Black Caucus sought federal review, followed by the NAACP joining the family's legal team.", label: "OFFICIAL ACCOUNT" }
    ],
    questions: [
      "What is Nolan's last independently verified sighting, and what timestamped photo, video, phone, or witness evidence supports it?",
      "What do the original recorded witness interviews say about Nolan's plan to leave the island, and when were those statements first made?",
      "What do the state autopsy, toxicology, recovery documentation, retained specimens, and scene records establish?",
      "What does Nolan's phone and other electronic evidence show about location, communications, and chain of custody?",
      "Do the reported boat mechanical or distress-call issues have any demonstrable relationship to Nolan's final hours?"
    ],
    sources: [
      { title: "Horn Island Wilderness", publisher: "U.S. National Park Service", url: "https://home.nps.gov/guis/learn/nature/horn-island-wilderness.htm", kind: "PRIMARY", note: "Official location and wilderness context." },
      { title: "GPS data tracks boat movement before Nolan Wells' disappearance and death", publisher: "WLOX", url: "https://www.wlox.com/2026/07/16/gps-data-tracks-boat-movement-before-nolan-wells-disappearance-death/", kind: "REPUTABLE REPORTING", note: "Reports MDMR GPS timeline." },
      { title: "GPS data tracks boat Nolan Wells was on before he went missing", publisher: "CBS News", url: "https://www.cbsnews.com/news/nolan-wells-boat-gps-data-mississippi-horn-island/", kind: "REPUTABLE REPORTING" },
      { title: "Independent autopsy of Nolan Wells finds 'undetermined' cause of death", publisher: "Associated Press", url: "https://apnews.com/article/b620c2bedf4c05d2a460b5bb1e7ee02e", kind: "REPUTABLE REPORTING" },
      { title: "Congressional Black Caucus urges federal review", publisher: "Congressional Black Caucus", url: "https://cbc.house.gov/news/documentsingle.aspx?DocumentID=3228", kind: "OFFICIAL" },
      { title: "NAACP Office of General Counsel Joins Nolan Wells' Family Legal Team", publisher: "NAACP", url: "https://naacp.org/articles/naacp-office-general-counsel-joins-nolan-wells-family-legal-team", kind: "ADVOCACY / PARTY SOURCE" },
      { title: "US civil rights group joins team seeking answers in death of Black teen Nolan Wells", publisher: "Reuters", url: "https://www.reuters.com/legal/government/us-civil-rights-group-joins-team-seeking-answers-death-black-teen-nolan-wells-2026-08-17/", kind: "REPUTABLE REPORTING" }
    ],
    editorialNote: "Do not publish social-media accusations identifying a killer or suspect unless supported by official records or independently corroborated evidence. The public record reviewed here supports an unresolved-death investigation, not a conclusion about criminal responsibility."
  },
  {
    slug: "latarsha-sanders",
    name: "Latarsha Sanders",
    status: "NEW TRIAL ORDERED",
    location: "Brockton / Plymouth County, Massachusetts",
    dateLabel: "SJC decision · Aug. 6, 2026",
    summary:
      "The Massachusetts Supreme Judicial Court vacated Latarsha Sanders's first-degree murder convictions and ordered a new trial after finding that exclusion of psychiatric treatment records prejudiced her lack-of-criminal-responsibility defense. The appellate ruling is not an exoneration; the case returns to Superior Court for retrial.",
    heroImage: caseMedia.latarshaHero,
    galleryImage: caseMedia.latarshaGallery,
    imageNote: "User-supplied research media. Photographer/source and republication rights should be confirmed before broader reuse.",
    tags: ["New Trial", "Mental Health Evidence", "Appellate Record"],
    findings: [
      {
        label: "PRIMARY RECORD",
        title: "The SJC vacated the murder convictions and ordered a new trial.",
        body: "In Commonwealth v. Sanders, SJC-13552, the Massachusetts Supreme Judicial Court held that psychiatric treatment records central to Sanders's lack-of-criminal-responsibility defense were wrongly excluded and that the error was prejudicial."
      },
      {
        label: "VERIFIED",
        title: "Identity was not the disputed trial issue.",
        body: "The SJC opinion states that Sanders killed her sons, Edson 'Marlon' Brito and La'Son Brito. The live legal issue was whether mental disease or defect rendered her not criminally responsible under Massachusetts law at the time."
      },
      {
        label: "PRIMARY RECORD",
        title: "Both defense and Commonwealth evaluators identified serious mental illness.",
        body: "The appellate opinion describes the defense expert's diagnosis of a psychotic disorder and lack-of-criminal-responsibility opinion. It also states that the Commonwealth's evaluator diagnosed paranoid-type schizophrenia and considered it highly likely Sanders was symptomatic around the killings, while not reaching a definitive legal-responsibility conclusion."
      },
      {
        label: "PRIMARY RECORD",
        title: "The SJC also flagged an unsupported closing-argument theory.",
        body: "For retrial guidance, the court said a prosecution suggestion linking a Law & Order: SVU episode to Sanders's explanations lacked an evidentiary foundation and should not be repeated absent support."
      },
      {
        label: "INVESTIGATIVE QUESTION",
        title: "Comparisons to other maternal mental-health prosecutions need measurable evidence.",
        body: "The site should compare charging decisions, expert evidence, judicial rulings, prosecutorial language, and media framing only where primary records or systematically collected coverage support the comparison. Similarity alone does not prove discriminatory treatment."
      }
    ],
    timeline: [
      { date: "Feb. 5, 2018", title: "Police and emergency personnel respond", body: "Sanders's two sons were found dead in the Brockton apartment. She was later arrested and charged.", label: "OFFICIAL ACCOUNT" },
      { date: "Dec. 2022", title: "Jury convicts Sanders", body: "A jury convicted Sanders of two counts of first-degree murder; she received concurrent mandatory life-without-parole sentences.", label: "VERIFIED" },
      { date: "March 6, 2026", title: "SJC hears the appeal", body: "The appeal challenged, among other issues, exclusion of psychiatric records central to the criminal-responsibility defense.", label: "PRIMARY RECORD" },
      { date: "Aug. 6, 2026", title: "Massachusetts SJC orders a new trial", body: "The court vacated the first-degree murder convictions and remanded the case for retrial.", label: "PRIMARY RECORD" },
      { date: "As of Aug. 23, 2026", title: "Post-remand schedule not yet verified", body: "No reliable source reviewed for this update announced a new retrial date. The Plymouth Superior Court docket is the controlling next record.", label: "INVESTIGATIVE QUESTION" }
    ],
    questions: [
      "What is the complete Plymouth Superior Court post-remand docket, and what retrial date or scheduling orders are entered?",
      "Which psychiatric records will be admitted on retrial, and how will each expert use them?",
      "How do contemporaneous observations, diagnoses, treatment notes, and behavior map onto the legal test for criminal responsibility?",
      "What prosecution theories or closing arguments from the first trial will change after the SJC ruling?",
      "If comparing this case to Lindsay Clancy or others, what specific differences can be documented in charging, expert evidence, rulings, plea posture, and media language?"
    ],
    sources: [
      { title: "Commonwealth v. Sanders, SJC-13552", publisher: "Massachusetts Supreme Judicial Court via Justia", url: "https://law.justia.com/cases/massachusetts/supreme-court/2026/sjc-13552.html", kind: "PRIMARY", note: "Controlling appellate opinion." },
      { title: "Search Court Dockets, Calendars and Case Information", publisher: "Massachusetts Court System", url: "https://www.mass.gov/search-court-dockets-calendars-and-case-information", kind: "OFFICIAL", note: "Controlling source for post-remand docket updates." },
      { title: "Brockton Mother Held Without Bail in Murder of Her Two Sons", publisher: "Plymouth County District Attorney", url: "https://plymouthda.com/news/2018-press-releases-news/brockton-mother-held-without-bail-murder-two-sons/", kind: "OFFICIAL", note: "Prosecution's initial charging account." },
      { title: "Brockton Woman To Serve Life In Prison For Murdering Her Sons", publisher: "Plymouth County District Attorney", url: "https://plymouthda.com/news/2022-press-releases/brockton-woman-to-serve-life-in-prison-for-murdering-her-sons/", kind: "OFFICIAL", note: "Prosecution sentencing release." },
      { title: "Mass. high court orders new trial for Brockton mother convicted of killing her sons", publisher: "WBUR", url: "https://www.wbur.org/news/2026/08/06/brockton-mother-murder-new-trial", kind: "REPUTABLE REPORTING" },
      { title: "Brockton mom who killed 2 of her kids granted new trial", publisher: "NBC Boston", url: "https://www.nbcboston.com/news/local/brockton-latarsha-sanders-new-trial-massachusetts-supreme-judicial-court/3993229/", kind: "REPUTABLE REPORTING" }
    ],
    editorialNote: "A new trial is not an exoneration. Publish the SJC's legal holding precisely: the convictions were vacated because exclusion of psychiatric records prejudiced the criminal-responsibility defense. Avoid sensational framing that substitutes cultural labels for the appellate issue."
  },
  {
    slug: "keshia-golden",
    name: "Keshia Golden",
    status: "TRIAL SCHEDULED",
    location: "Cook County, Chicago, Illinois",
    dateLabel: "Reported trial week · Aug. 24, 2026",
    summary:
      "Keshia Golden is charged with first-degree murder in the 2022 death of Calvin Sidney. Golden has said she stabbed Sidney once in the leg to stop an assault while she was eight months pregnant; prosecutors describe a materially different sequence in which the immediate confrontation had ended before the stabbing. Trial reporting places the case on the calendar for the week of Aug. 24, 2026.",
    heroImage: caseMedia.keshiaHero,
    galleryImage: caseMedia.keshiaGallery,
    imageNote: "User-supplied research media. Photographer/source and republication rights should be confirmed before broader reuse.",
    tags: ["Self-Defense Claim", "Domestic Violence Records", "Active Trial"],
    findings: [
      {
        label: "VERIFIED",
        title: "The fatal physical act is largely undisputed in public reporting.",
        body: "Golden, then eight months pregnant, stabbed Sidney once in the thigh. The wound struck his femoral artery and he died. The central dispute is the sequence immediately before the stabbing and whether the force was legally justified as self-defense."
      },
      {
        label: "DISPUTED",
        title: "Prosecution and defense describe different sequences.",
        body: "Publicly reported prosecution accounts say the couple had been separated, Sidney was unarmed, and Golden approached the bedroom with a knife. Defense accounts say Sidney's assault was continuing and that Golden stabbed his leg to make him stop. The trial record, eyewitness testimony, and physical evidence are the proper tools for testing those accounts."
      },
      {
        label: "CORROBORATED",
        title: "Public reporting points to a documented prior domestic-violence history.",
        body: "The Chicago Sun-Times reported, citing police and court records, that police responded to five domestic-violence incidents involving the couple between June and September 2022 and that Golden obtained an order of protection after alleging Sidney punched her. Each underlying report still needs record-by-record review."
      },
      {
        label: "CORROBORATED",
        title: "Golden rejected a plea offer and chose to proceed toward trial.",
        body: "The Sun-Times reported that prosecutors offered a second-degree murder disposition with two years of probation in March 2026. Her defense rejected the proposal while continuing to seek dismissal."
      },
      {
        label: "UNVERIFIED",
        title: "Exact courtroom logistics still need official docket confirmation.",
        body: "Current reporting places the trial in the week beginning Aug. 24, 2026. A community court-support listing reported Monday, Aug. 24, at 11 a.m.; because that is not the Cook County Clerk's official docket, the precise time and courtroom should be treated as provisional until confirmed."
      }
    ],
    timeline: [
      { date: "June–Sept. 2022", title: "Multiple domestic-violence calls reported", body: "The Sun-Times later reported five police responses involving Golden and Sidney, with allegations running in both directions. Underlying reports remain a priority record set.", label: "CORROBORATED" },
      { date: "July 2022", title: "Order of protection reported", body: "Golden reportedly obtained an order of protection after alleging Sidney punched her in the face.", label: "CORROBORATED" },
      { date: "Oct. 23, 2022", title: "Fatal stabbing after baby shower", body: "Golden stabbed Sidney once in the thigh. He later died from the femoral-artery injury. The circumstances immediately preceding the stabbing are disputed.", label: "DISPUTED" },
      { date: "March 2026", title: "Probation plea offer reported", body: "Prosecutors reportedly offered second-degree murder with two years of probation; the defense rejected the proposed disposition.", label: "CORROBORATED" },
      { date: "April 2026", title: "August trial set", body: "A judge set the case for an August trial while the first-degree murder charge remained pending.", label: "CORROBORATED" },
      { date: "Aug. 24, 2026 · reported", title: "Trial expected to begin", body: "Recent reporting says the trial is scheduled for the week of Aug. 24. Exact courtroom logistics remain subject to official docket confirmation.", label: "UNVERIFIED" }
    ],
    questions: [
      "Was the danger to Golden ongoing or imminent at the instant she used the knife?",
      "Who moved toward whom after relatives attempted to separate the couple?",
      "What do the first eyewitness statements, 911/CAD records, body-camera footage, scene photographs, and room layout show?",
      "What injuries to Golden, if any, were documented contemporaneously, and what does the medical record show?",
      "What do the five prior domestic-violence reports, the protection-order file, and their dispositions establish record by record?",
      "How do trial testimony and physical evidence support or contradict the prosecution and defense timelines?"
    ],
    sources: [
      { title: "Woman says she killed abusive boyfriend to save herself, unborn baby; now faces trial", publisher: "Chicago Sun-Times", url: "https://chicago.suntimes.com/crime/2026/02/24/chicago-crime-keshia-golden-domestic-violence-abuse-murder", kind: "REPUTABLE REPORTING", note: "Detailed reporting citing police and court records." },
      { title: "Probation offered to Chicago woman accused of killing abusive boyfriend — but her lawyers want case dropped", publisher: "Chicago Sun-Times", url: "https://chicago.suntimes.com/crime/2026/03/03/chicago-keshia-golden-crime-domestic-violence-murder-eileen-oneill-burke", kind: "REPUTABLE REPORTING" },
      { title: "Trial set for woman accused of killing abusive boyfriend after baby shower", publisher: "Chicago Sun-Times", url: "https://chicago.suntimes.com/crime/2026/04/07/chicago-crime-keshia-golden-domestic-violence", kind: "REPUTABLE REPORTING" },
      { title: "Advocates urge Cook County prosecutors to drop charges against woman claiming self-defense", publisher: "CBS Chicago", url: "https://www.cbsnews.com/chicago/news/advocates-call-for-charges-to-be-dropped-keshia-golden-murder-boyfriend-calvin-sidney/", kind: "REPUTABLE REPORTING", note: "Recent trial-week reporting and both-side framing." },
      { title: "Woman says she killed abusive boyfriend to save herself, unborn baby; now faces trial", publisher: "WBEZ", url: "https://www.wbez.org/crime/2026/02/25/chicago-crime-keshia-golden-domestic-violence-abuse-murder", kind: "REPUTABLE REPORTING" },
      { title: "Clerk of the Circuit Court of Cook County", publisher: "Cook County Clerk of Court", url: "https://www.cookcountyclerkofcourt.org/", kind: "OFFICIAL", note: "Controlling source for official docket and courtroom updates." }
    ],
    editorialNote: "Do not describe either side's sequence as established fact before the trial record supports it. Prior domestic-violence allegations should be tied to the underlying police, court, medical, and disposition records rather than generalized into a single conclusion."
  }
];

export const documents: DocumentRecord[] = [
  {
    id: "doc-nolan-gps",
    title: "Boat GPS timeline reported from MDMR data",
    type: "Government-derived GPS record",
    issuer: "Mississippi Department of Marine Resources / reported by WLOX & CBS",
    date: "July 2026",
    relatedCase: "Nolan Xavier Wells",
    status: ["CORROBORATED"],
    url: "https://www.wlox.com/2026/07/16/gps-data-tracks-boat-movement-before-nolan-wells-disappearance-death/"
  },
  {
    id: "doc-nolan-autopsy",
    title: "Independent autopsy findings",
    type: "Forensic examination",
    issuer: "Family-commissioned forensic pathologist / reported by AP",
    date: "July 22, 2026",
    relatedCase: "Nolan Xavier Wells",
    status: ["VERIFIED"],
    url: "https://apnews.com/article/b620c2bedf4c05d2a460b5bb1e7ee02e"
  },
  {
    id: "doc-sanders-sjc",
    title: "Commonwealth v. Sanders, SJC-13552",
    type: "Supreme Judicial Court opinion",
    issuer: "Massachusetts Supreme Judicial Court",
    date: "Aug. 6, 2026",
    relatedCase: "Latarsha Sanders",
    status: ["PRIMARY RECORD", "VERIFIED"],
    url: "https://law.justia.com/cases/massachusetts/supreme-court/2026/sjc-13552.html"
  },
  {
    id: "doc-golden-records",
    title: "Prior domestic-violence record set",
    type: "Police / court records to obtain",
    issuer: "Chicago Police Department / Cook County courts",
    date: "June–Sept. 2022",
    relatedCase: "Keshia Golden",
    status: ["INVESTIGATIVE QUESTION"]
  }
];
