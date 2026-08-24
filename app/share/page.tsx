import Link from "next/link";
import { Header } from "@/components/Header";
import { ShareIntake } from "@/components/ShareIntake";

export default function SharePage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage sharePage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Share your story</p>
        <h1>What would you like preserved?</h1>
        <p className="pageLead">Choose the kind of record you want to share. Identity, contact permission, publication permission, and location precision stay separate so one choice never silently grants another.</p>

        <ShareIntake />

        <div className="privacyNotice">
          <strong>Privacy by design</strong>
          <p>Exact locations, identities, contact information, private testimony, and unpublished uploads should never become public merely because they were submitted. Sensitive intake will remain separate from public case records.</p>
        </div>
      </div>
    </main>
  );
}
