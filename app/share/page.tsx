import Link from "next/link";
import { Header } from "@/components/Header";
import { ShareIntake } from "@/components/ShareIntake";

export default function SharePage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage sharePage compactInnerPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Share a record</p>
        <h1>What would you like preserved?</h1>
        <p className="pageLead">Choose a submission type. Identity, contact permission, publication permission, and location precision are handled separately.</p>

        <ShareIntake />

        <div className="privacyNotice compactNotice">
          <strong>Privacy by design</strong>
          <p>Sensitive intake stays separate from public records. Submitting information never automatically grants permission to publish your identity, location, testimony, or files.</p>
        </div>
      </div>
    </main>
  );
}
