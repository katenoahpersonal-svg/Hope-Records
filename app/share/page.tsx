import Link from "next/link";
import { Header } from "@/components/Header";

export default function SharePage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage sharePage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Share your story</p>
        <h1>What would you like preserved?</h1>
        <p className="pageLead">This prototype intentionally does not submit sensitive information yet. The production form will separate consent, identity, contact permission, publication permission, and location precision.</p>
        <div className="submissionChoices">
          {[
            ["My story", "An experience that happened to you."],
            ["Family or ancestor story", "Preserve oral history, documents, photographs, and memories."],
            ["An unresolved case", "Suggest a case that deserves structured documentation."],
            ["A document", "Contribute a record for verification and archival review."],
            ["A lead", "Privately share information related to an existing investigation."],
            ["Something overlooked", "Flag circumstances that may deserve further reporting."]
          ].map(([title, body]) => (
            <button className="submissionChoice" key={title} type="button">
              <strong>{title}</strong><span>{body}</span><b>→</b>
            </button>
          ))}
        </div>
        <div className="privacyNotice">
          <strong>Privacy by design</strong>
          <p>Exact locations, identities, contact information, private testimony, and unpublished uploads should never become public merely because they were submitted.</p>
        </div>
      </div>
    </main>
  );
}
