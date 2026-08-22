import Link from "next/link";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ExploreMap } from "@/components/ExploreMap";
import { CaseCard } from "@/components/CaseCard";
import { DocumentCard } from "@/components/DocumentCard";
import { RecordGraph } from "@/components/RecordGraph";
import { cases, documents } from "@/lib/mock-data";

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

          <section className="contentSection" id="investigations">
            <div className="sectionHeading">
              <p className="eyebrow">Featured research workspaces</p>
              <Link href="/#investigations">View all cases →</Link>
            </div>
            <div className="featuredGrid">
              <div className="caseGrid">
                {cases.map((item) => <CaseCard item={item} key={item.slug} />)}
              </div>
              <aside className="sharePanel">
                <p className="eyebrow">Share your story</p>
                <h2>What would you like preserved?</h2>
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
                <Link className="primaryButton" href="/share">Get started</Link>
              </aside>
            </div>
          </section>

          <section className="contentSection vaultPreview">
            <div className="sectionHeading">
              <p className="eyebrow">Document vault</p>
              <Link href="/vault">View all documents →</Link>
            </div>
            <div className="documentGrid">
              {documents.map((item) => <DocumentCard item={item} key={item.id} />)}
            </div>
          </section>

          <RecordGraph />
        </div>
      </div>
    </main>
  );
}
