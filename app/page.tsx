import Link from "next/link";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ExploreMap } from "@/components/ExploreMap";
import { CaseCard } from "@/components/CaseCard";
import { DocumentCard } from "@/components/DocumentCard";
import { RecordGraph } from "@/components/RecordGraph";
import { cases } from "@/lib/mock-data";
import { applyEditorialOverrides } from "@/lib/editorial-overrides";
import { verifiedDocuments } from "@/lib/verified-documents";

const featuredCases = cases.map(applyEditorialOverrides);

export default function HomePage() {
  return (
    <main className="appShell">
      <Header />
      <div className="homeGrid">
        <Sidebar />
        <div className="mainColumn">
          <section className="hero">
            <div className="heroCopy">
              <p className="eyebrow">Public-interest archive</p>
              <h1>A record is not the end.<br />It’s the beginning of understanding.</h1>
            </div>
            <label className="searchBox">
              <span aria-hidden="true">⌕</span>
              <input aria-label="Search the record" placeholder="Search a person, case, place, institution, or document" />
            </label>
            <ExploreMap />
            <p className="missionLine">Every story deserves a record. Every record deserves context.</p>
          </section>

          <section className="contentSection prioritySection" id="investigations">
            <div className="sectionHeading priorityHeading">
              <div>
                <p className="eyebrow">Featured records · evidence review Aug. 24, 2026</p>
                <h2>Nolan Wells · Latarsha Sanders · Keshia Golden</h2>
              </div>
              <Link href="/#investigations">Three living records →</Link>
            </div>
            <p className="priorityIntro">Three people, three families, three records deserving care. We begin with primary documents and direct voices, separate what is known from what is disputed, and leave room for unanswered questions without turning uncertainty into accusation.</p>
            <div className="caseGrid priorityCaseGrid">
              {featuredCases.map((item) => <CaseCard item={item} key={item.slug} />)}
            </div>
            <div className="editorialRibbon">
              <strong>Dignity before drama.</strong>
              <span>Every file begins with a human being, not a theory. Court records and public documents guide the work; family voices are heard directly; uncertainty stays visible; love never requires us to abandon rigor.</span>
            </div>
          </section>

          <section className="contentSection vaultPreview">
            <div className="sectionHeading">
              <p className="eyebrow">Verified record vault</p>
              <Link href="/vault">View all records →</Link>
            </div>
            <div className="documentGrid">
              {verifiedDocuments.slice(0, 4).map((item) => <DocumentCard item={item} key={item.id} />)}
            </div>
          </section>

          <section className="contentSection homeShareSection">
            <aside className="sharePanel">
              <p className="eyebrow">Share your story</p>
              <h2>What would you like preserved?</h2>
              <div className="homeShareOptions">
                {[
                  ["My Story", "Share your experience"],
                  ["Family History", "Preserve your family’s record"],
                  ["Upload a Document", "Add a verifiable record"],
                  ["Report a Case", "Bring attention to a case"]
                ].map(([title, sub]) => (
                  <Link href="/share" className="shareOption" key={title}>
                    <span><strong>{title}</strong><small>{sub}</small></span><b>›</b>
                  </Link>
                ))}
              </div>
              <Link className="primaryButton" href="/share">Get started</Link>
            </aside>
          </section>

          <RecordGraph />
        </div>
      </div>
    </main>
  );
}
