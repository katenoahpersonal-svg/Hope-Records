import Link from "next/link";
import { Header } from "@/components/Header";
import { GeneralContactForm } from "@/components/GeneralContactForm";

const contactRoutes = [
  {
    title: "Share a private lead",
    body: "Information related to an existing investigation that should not be placed in general email.",
    href: "/share?type=lead#intake"
  },
  {
    title: "Correct or challenge a record",
    body: "Flag something we may have missed, misstated, or sourced incompletely.",
    href: "/share?type=overlooked#intake"
  },
  {
    title: "Contribute a document",
    body: "Offer a court record, public filing, photograph, archive item, or other source for verification.",
    href: "/share?type=document#intake"
  },
  {
    title: "Family or case representative",
    body: "Tell us who you are connected to and what context, correction, or record you want preserved.",
    href: "/share?type=unresolved-case#intake"
  }
];

export default function ContactPage() {
  return (
    <main className="appShell">
      <Header />
      <div className="innerPage contactPage">
        <Link className="backLink" href="/">← Back home</Link>
        <p className="eyebrow">Contact Hope Records</p>
        <h1>Use the channel that protects the kind of information you are sharing.</h1>
        <p className="pageLead">A correction, family message, private lead, and media inquiry should not all travel through the same doorway. Sensitive material routes to private intake; ordinary correspondence stays separate.</p>

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
            <p className="eyebrow">General correspondence</p>
            <h2>Questions, media, partnerships, and researcher access</h2>
            <p>Keep confidential testimony, anonymous tips, private files, and urgent safety information out of general email.</p>
          </div>
          <GeneralContactForm />
        </section>

        <section className="researcherAccessNote" id="researcher-access">
          <p className="eyebrow">Researcher access</p>
          <h2>The researcher portal will come after permissions and audit controls.</h2>
          <p>For now, requests from journalists, attorneys, historians, advocates, researchers, or collaborating organizations belong in general correspondence. Access to restricted records should never be granted by a public-page button alone.</p>
        </section>
      </div>
    </main>
  );
}
