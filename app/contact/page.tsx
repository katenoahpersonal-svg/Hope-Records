import Link from "next/link";
import { Header } from "@/components/Header";
import { GeneralContactForm } from "@/components/GeneralContactForm";

const contactRoutes = [
  {
    title: "Share a private lead",
    body: "Information related to an existing investigation that should not be placed in general email.",
    href: "/share?type=lead"
  },
  {
    title: "Correct a record",
    body: "Flag something we may have missed, misstated, or sourced incompletely.",
    href: "/share?type=overlooked"
  },
  {
    title: "Contribute a document",
    body: "Offer a court record, public filing, photograph, archive item, or other source for verification.",
    href: "/share?type=document"
  },
  {
    title: "Family or case representative",
    body: "Share context, corrections, records, or a direct connection to a case.",
    href: "/share?type=unresolved-case"
  }
];

export default function ContactPage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage contactPage compactInnerPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Contact</p>
        <h1>Choose the right channel.</h1>
        <p className="pageLead">Sensitive material goes through private intake. General questions, media, partnerships, and researcher requests stay separate.</p>

        <section className="contactRouteGrid" aria-label="Contact routes">
          {contactRoutes.map((route) => (
            <Link className="contactRouteCard" href={route.href} key={route.title}>
              <strong>{route.title}</strong>
              <span>{route.body}</span>
              <b>Open route →</b>
            </Link>
          ))}
        </section>

        <section className="generalContactSection" id="general-contact">
          <div className="contactSectionHeading">
            <div>
              <p className="eyebrow">General correspondence</p>
              <h2>Questions, media, partnerships, researcher access</h2>
            </div>
            <p>Keep confidential testimony, anonymous tips, and private files out of general email.</p>
          </div>
          <GeneralContactForm />
        </section>

        <section className="researcherAccessNote compactResearcherNote" id="researcher-access">
          <p className="eyebrow">Researcher access</p>
          <h2>Restricted access will require permissions and audit controls.</h2>
          <p>Until that portal exists, journalists, attorneys, historians, advocates, and researchers can use general correspondence to request access or collaboration.</p>
        </section>
      </div>
    </main>
  );
}
