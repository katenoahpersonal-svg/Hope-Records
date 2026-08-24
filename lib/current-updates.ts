import type { CaseRecord } from "./types";

const pleaReport = {
  title: "Keshia Golden, who said she killed boyfriend in self-defense, accepts plea deal",
  publisher: "The 19th / syndicated report",
  url: "https://currently.att.yahoo.com/att/keshia-golden-said-she-killed-174859442.html",
  kind: "REPUTABLE REPORTING" as const,
  note: "Aug. 24, 2026 report: Golden accepted an involuntary-manslaughter plea with 24 months of probation and no jail time. The official Cook County plea order or transcript remains the controlling primary record to obtain."
};

export function applyCurrentCaseUpdates(item: CaseRecord): CaseRecord {
  if (item.slug !== "keshia-golden") return item;

  return {
    ...item,
    status: "PLEA ACCEPTED",
    dateLabel: "Plea accepted · Aug. 24, 2026",
    summary:
      "On Aug. 24, 2026, Keshia Golden accepted a plea to involuntary manslaughter after nearly four years facing a first-degree murder prosecution. Current reporting says the agreement carries 24 months of probation, no jail time, and no violent-offender registration. Golden has consistently said she stabbed Calvin Sidney once in the leg to stop an assault while she was eight months pregnant; the prosecution disputed that sequence. The archive is seeking the official plea order or transcript so the final disposition can be linked as a primary record.",
    tags: ["Plea Accepted", "Domestic Violence Record", "Clemency Advocacy"],
    findings: [
      {
        label: "CORROBORATED",
        title: "Golden accepted an involuntary-manslaughter plea on Aug. 24, 2026.",
        body: "Current reporting says the plea avoids incarceration and carries 24 months of probation. The archive will replace this secondary-source description with the official Cook County plea order or transcript as soon as that primary record is publicly accessible."
      },
      {
        label: "CORROBORATED",
        title: "The plea does not erase the domestic-violence record that preceded the prosecution.",
        body: "Public reporting has cited repeated police involvement and an order of protection involving Golden and Sidney. The 19th reported, attributing the figures to Golden's attorneys, more than 50 calls to police and four arrests of Sidney for allegedly harming her. Those counts should still be checked against the underlying call-for-service, arrest, protection-order, and disposition records before being treated as independently established totals."
      },
      {
        label: "DISPUTED",
        title: "The central factual dispute over the final confrontation was never resolved by a trial verdict.",
        body: "Golden has said she used the knife to stop an assault while pregnant. Prosecutors have described a different sequence in which the immediate danger had ended. Because the case ended by plea rather than trial, those competing accounts should remain attributed rather than rewritten as a single established narrative."
      },
      {
        label: "INVESTIGATIVE QUESTION",
        title: "The official plea record is now the highest-value document to obtain.",
        body: "The archive should obtain the plea agreement, factual basis, sentencing order, transcript, and any written conditions of probation. Those records will establish the exact offense of conviction, the court's findings, and the collateral consequences more reliably than news summaries."
      }
    ],
    timeline: [
      ...item.timeline.filter((event) => !event.date.includes("Aug. 24, 2026")),
      {
        date: "Aug. 24, 2026",
        title: "Golden accepts plea to involuntary manslaughter",
        body: "Reporting published the day trial was scheduled to begin says Golden accepted an involuntary-manslaughter plea carrying 24 months of probation and no jail time. The report also says the disposition avoids violent-offender registration. The official Cook County plea order or transcript remains the controlling record to obtain.",
        label: "CORROBORATED",
        url: pleaReport.url,
        sourceLabel: "Read the Aug. 24 plea report"
      }
    ],
    questions: [
      "What does the official plea agreement, factual basis, sentencing order, and transcript say word for word?",
      "Which collateral consequences remain after the involuntary-manslaughter conviction, including employment, housing, licensing, custody, and record-access consequences?",
      "What do the underlying police call-for-service records, arrest records, protection-order file, medical records, and dispositions establish about the reported history of abuse?",
      "What legal and factual considerations led prosecutors to move from first-degree murder to the final involuntary-manslaughter disposition?",
      "If Golden seeks executive clemency, what relief would she request: a pardon, a pardon authorizing expungement, or other relief permitted under Illinois law?",
      "What broader reforms could prevent survivors with documented histories of abuse from spending years under severe criminal charges before that context is meaningfully reflected in the disposition?"
    ],
    sources: [
      pleaReport,
      ...item.sources,
      {
        title: "Illinois executive-clemency procedure — 730 ILCS 5/3-3-13",
        publisher: "Illinois General Assembly",
        url: "https://ilga.gov/legislation/ILCS/details?ActID=1999&ActName=Unified+Code+of+Corrections.&ChapAct=730%20ILCS%205/&Chapter=&ChapterID=55&MajorTopic=&SeqEnd=24500000&SeqStart=500000",
        kind: "PRIMARY",
        note: "Illinois law provides that petitions seeking a pardon, commutation, or reprieve are addressed to the Governor and filed with the Prisoner Review Board, which makes recommendations on executive clemency."
      },
      {
        title: "Applying for executive clemency in Illinois",
        publisher: "Illinois Legal Aid Online",
        url: "https://www.illinoislegalaid.org/legal-information/filing-petition-executive-clemency",
        kind: "REPUTABLE REPORTING",
        note: "Plain-language guide to Illinois clemency procedure, including pardons and expungement-related relief."
      }
    ],
    editorialNote:
      "Hope Records' editorial position is that this case should never have required Keshia Golden to spend nearly four years facing a first-degree murder prosecution before reaching a non-custodial plea. That is an advocacy judgment, not a court finding. The documented and reported domestic-violence context should have been treated as central from the beginning. Hope Records supports Golden pursuing executive clemency from the Governor of Illinois, including a pardon and, if legally appropriate, authorization to seek expungement. We will keep that advocacy clearly separated from the evidentiary record and will continue to publish the prosecution's position, the defense's position, and the underlying documents side by side."
  };
}
