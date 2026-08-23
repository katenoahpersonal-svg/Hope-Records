"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "./Badge";
import type { CaseRecord } from "@/lib/types";

type TabKey = "overview" | "timeline" | "questions" | "media" | "sources";

const tabs: Array<{ id: TabKey; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "questions", label: "Questions" },
  { id: "media", label: "Photos" },
  { id: "sources", label: "Sources" }
];

export function CaseWorkspaceTabs({ item }: { item: CaseRecord }) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [galleryFailed, setGalleryFailed] = useState(false);

  const tabIds = useMemo(() => new Set<TabKey>(tabs.map((tab) => tab.id)), []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as TabKey;
    if (tabIds.has(hash)) setActiveTab(hash);
  }, [tabIds]);

  function selectTab(tab: TabKey) {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    document.querySelector(".caseTabButtons")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="compactCaseWorkspace">
      <nav className="caseTabs caseTabButtons" aria-label="Case sections">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={activeTab === tab.id ? "caseTabButton active" : "caseTabButton"}
            onClick={() => selectTab(tab.id)}
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="caseTabPanel">
        {activeTab === "overview" ? (
          <div className="caseTabStack">
            <article className="workspaceCard evidenceStandardCard compactEvidenceCard">
              <div>
                <p className="eyebrow">Evidence standard</p>
                <h2>Fact, account, dispute, and question stay separate.</h2>
              </div>
              <p>A source can prove that a statement was made without proving the underlying claim. Every label below tells you what kind of evidence supports the statement.</p>
              <div className="badgeRow roomy">
                <Badge>PRIMARY RECORD</Badge><Badge>VERIFIED</Badge><Badge>CORROBORATED</Badge><Badge>DISPUTED</Badge><Badge>UNVERIFIED</Badge><Badge>INVESTIGATIVE QUESTION</Badge>
              </div>
            </article>

            <div className="findingGrid compactFindingGrid">
              {item.findings.map((finding) => (
                <article className="workspaceCard findingCard" key={finding.title}>
                  <Badge>{finding.label}</Badge>
                  <h2>{finding.title}</h2>
                  <p>{finding.body}</p>
                </article>
              ))}
            </div>

            <article className="workspaceCard publicationCaution compactPromiseCard">
              <p className="eyebrow">Editorial promise</p>
              <h2>Care before conclusion.</h2>
              <p>{item.editorialNote}</p>
            </article>
          </div>
        ) : null}

        {activeTab === "timeline" ? (
          <article className="workspaceCard tabFeatureCard">
            <p className="eyebrow">Timeline</p>
            <h2>Source-backed chronology</h2>
            <p className="tabLead">Where a public record is available, the event links directly to the record supporting it.</p>
            <div className="timelineResearch compactTimeline">
              {item.timeline.map((event) => (
                <div className="timelineResearchItem" key={`${event.date}-${event.title}`}>
                  <span className="timelineDot" aria-hidden="true" />
                  <div>
                    <small>{event.date}</small>
                    <strong>{event.title}</strong>
                    <p>{event.body}</p>
                    <div className="timelineEvidenceRow">
                      {event.label ? <Badge>{event.label}</Badge> : null}
                      {event.url ? (
                        <a className="timelineSourceLink" href={event.url} target="_blank" rel="noreferrer">
                          {event.sourceLabel ?? "Open supporting record"} ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ) : null}

        {activeTab === "questions" ? (
          <article className="workspaceCard tabFeatureCard">
            <p className="eyebrow">Unanswered questions</p>
            <h2>What evidence would materially change the file?</h2>
            <p className="tabLead">Questions are kept separate from conclusions. Their purpose is to identify the next record, witness, filing, or forensic fact that could move the investigation forward.</p>
            <ol className="questionList researchQuestions compactQuestions">
              {item.questions.map((question) => <li key={question}>{question}</li>)}
            </ol>
          </article>
        ) : null}

        {activeTab === "media" ? (
          <article className="workspaceCard mediaCard tabFeatureCard">
            <div className="mediaHeading">
              <div>
                <p className="eyebrow">Photo archive</p>
                <h2>Remembering the people at the center of the record</h2>
              </div>
            </div>
            <div className="casePhotoGrid">
              <img className="casePhotoTile leadPhotoTile" src={item.heroImage} alt={`${item.name} case photograph`} />
              {!galleryFailed && item.galleryImage !== item.heroImage ? (
                <img
                  className="casePhotoTile archivePhotoTile"
                  src={item.galleryImage}
                  alt={`${item.name} photo archive`}
                  onError={() => setGalleryFailed(true)}
                />
              ) : null}
            </div>
          </article>
        ) : null}

        {activeTab === "sources" ? (
          <article className="workspaceCard tabFeatureCard">
            <p className="eyebrow">Source trail</p>
            <h2>Primary records, direct voices, official sources, and careful reporting</h2>
            <p className="sourceIntro">Original court and government records come first. Direct family or counsel statements establish what those people say or request; they do not automatically establish a disputed underlying fact. Reporting is used when it clearly identifies the evidence beneath the story.</p>
            <div className="sourceList compactSourceList">
              {item.sources.map((source) => (
                <a className="sourceRow" href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                  <div>
                    <span>{source.kind}</span>
                    <strong>{source.title}</strong>
                    <small>{source.publisher}{source.note ? ` · ${source.note}` : ""}</small>
                  </div>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}
