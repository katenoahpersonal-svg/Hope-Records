"use client";

import { FormEvent, useEffect, useState } from "react";

const intakeKinds = [
  {
    id: "my-story",
    title: "My story",
    body: "An experience that happened to you.",
    prompt: "Tell us what happened in your own words. You decide what identifying details to include."
  },
  {
    id: "family-history",
    title: "Family or ancestor story",
    body: "Preserve oral history, documents, photographs, and memories.",
    prompt: "Tell us whose story you want preserved, what you know, and what records or memories may support it."
  },
  {
    id: "unresolved-case",
    title: "An unresolved case",
    body: "Suggest a case that deserves structured documentation.",
    prompt: "Share the person's name, the case or event, why it deserves review, and the strongest sources you already know about."
  },
  {
    id: "document",
    title: "A document",
    body: "Contribute a record for verification and archival review.",
    prompt: "Describe the document, who issued or created it, what case or story it relates to, and where it came from."
  },
  {
    id: "lead",
    title: "A lead",
    body: "Privately share information related to an existing investigation.",
    prompt: "Share only what you are comfortable preserving for private editorial review. Distinguish what you personally witnessed from what you heard from someone else."
  },
  {
    id: "overlooked",
    title: "Something overlooked",
    body: "Flag circumstances that may deserve further reporting.",
    prompt: "Tell us what you believe was overlooked and, most importantly, what record, witness, timeline point, or source could help test it."
  }
] as const;

type IntakeKind = (typeof intakeKinds)[number];

export function ShareIntake() {
  const [selected, setSelected] = useState<IntakeKind | null>(null);
  const [identity, setIdentity] = useState("private");
  const [contactPermission, setContactPermission] = useState("no");
  const [publication, setPublication] = useState("review-only");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("type");
    const match = intakeKinds.find((kind) => kind.id === requested);
    if (match) setSelected(match);
  }, []);

  function choose(kind: IntakeKind) {
    setSelected(kind);
    window.history.replaceState(null, "", `?type=${kind.id}`);
  }

  function handlePrototypeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <div className="submissionChoices">
        {intakeKinds.map((kind) => (
          <button
            className={selected?.id === kind.id ? "submissionChoice active" : "submissionChoice"}
            key={kind.id}
            type="button"
            onClick={() => choose(kind)}
          >
            <strong>{kind.title}</strong><span>{kind.body}</span><b>→</b>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="secureIntakeWrap" id="intake">
          <div className="intakeHeading">
            <div>
              <p className="eyebrow">Private intake · {selected.title}</p>
              <h2>Preserve the record without giving up control of it.</h2>
            </div>
            <button type="button" className="textButton" onClick={() => setSelected(null)}>Choose another type</button>
          </div>

          <form className="secureIntakeForm" onSubmit={handlePrototypeSubmit}>
            <label className="fullField">
              <span>Your account or submission</span>
              <small>{selected.prompt}</small>
              <textarea rows={8} name="story" placeholder="Write only what you are comfortable entering on this device…" />
            </label>

            <label>
              <span>Person, case, or record name</span>
              <small>Optional. A name, case title, agency, institution, or document title.</small>
              <input name="subject" type="text" placeholder="Example: Jane Doe / Case 123 / court filing" />
            </label>

            <label>
              <span>Approximate date or time period</span>
              <small>Exact dates are helpful when known; estimates are okay.</small>
              <input name="date" type="text" placeholder="Example: July 2026 or around 2018" />
            </label>

            <label>
              <span>General location</span>
              <small>City/state/country is enough at intake. Do not enter a private home address unless it is essential.</small>
              <input name="location" type="text" placeholder="City, state or general area" />
            </label>

            <label>
              <span>Source or document links</span>
              <small>One link per line. Primary records are especially useful.</small>
              <textarea rows={4} name="links" placeholder="Court docket, government record, article, public post, archive link…" />
            </label>

            <fieldset className="intakeChoiceGroup fullField">
              <legend>How should your identity be treated?</legend>
              <label><input type="radio" name="identity" value="private" checked={identity === "private"} onChange={() => setIdentity("private")} /> <span><strong>Keep me private</strong><small>Do not publish my identity.</small></span></label>
              <label><input type="radio" name="identity" value="named" checked={identity === "named"} onChange={() => setIdentity("named")} /> <span><strong>I may be named</strong><small>Permission can still be revisited before publication.</small></span></label>
              <label><input type="radio" name="identity" value="later" checked={identity === "later"} onChange={() => setIdentity("later")} /> <span><strong>Decide with me later</strong><small>Keep identity private until a direct conversation happens.</small></span></label>
            </fieldset>

            <fieldset className="intakeChoiceGroup fullField">
              <legend>May Hope Records contact you?</legend>
              <label><input type="radio" name="contact" value="no" checked={contactPermission === "no"} onChange={() => setContactPermission("no")} /> <span><strong>No contact</strong><small>Preserve the submission without requesting follow-up.</small></span></label>
              <label><input type="radio" name="contact" value="yes" checked={contactPermission === "yes"} onChange={() => setContactPermission("yes")} /> <span><strong>Yes, follow up with me</strong><small>Contact details will be collected only after the encrypted intake endpoint is connected.</small></span></label>
            </fieldset>

            <fieldset className="intakeChoiceGroup fullField">
              <legend>Publication permission</legend>
              <label><input type="radio" name="publication" value="review-only" checked={publication === "review-only"} onChange={() => setPublication("review-only")} /> <span><strong>Private review only</strong><small>Nothing may be published from this submission.</small></span></label>
              <label><input type="radio" name="publication" value="ask-first" checked={publication === "ask-first"} onChange={() => setPublication("ask-first")} /> <span><strong>Ask me before publishing anything</strong><small>No publication permission is granted yet.</small></span></label>
              <label><input type="radio" name="publication" value="may-quote" checked={publication === "may-quote"} onChange={() => setPublication("may-quote")} /> <span><strong>Material may be considered for publication</strong><small>Editorial verification and safety review still come first.</small></span></label>
            </fieldset>

            <div className="intakeSafety fullField">
              <strong>Nothing entered here is transmitted yet.</strong>
              <p>The secure submission endpoint is intentionally not connected until encryption, abuse protection, file handling, and reviewer access controls are configured. Do not use this prototype for urgent safety needs.</p>
            </div>

            <div className="intakeActions fullField">
              <button className="primaryButton intakeSubmitDisabled" type="submit" disabled>Submit securely · backend connection next</button>
              <button className="secondaryButton" type="reset">Clear this form</button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
