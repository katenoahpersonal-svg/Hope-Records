"use client";

import { FormEvent, useState } from "react";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export function GeneralContactForm() {
  const [topic, setTopic] = useState("general");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contactEmail) return;

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const organization = String(form.get("organization") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = `Hope Records contact · ${topic}`;
    const body = [
      `Name: ${name}`,
      `Reply email: ${email}`,
      organization ? `Organization: ${organization}` : "",
      `Topic: ${topic}`,
      "",
      message
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="generalContactForm" onSubmit={submit}>
      <div className="contactFormWarning">
        <strong>General correspondence only.</strong>
        <p>Do not put private testimony, confidential evidence, precise safety locations, or anonymous tips in this form. Use the private intake route for those.</p>
      </div>

      <label>
        <span>What is this about?</span>
        <select value={topic} onChange={(event) => setTopic(event.target.value)}>
          <option value="general">General question</option>
          <option value="family-or-case-contact">Family or case representative</option>
          <option value="correction">Correction to a published record</option>
          <option value="media">Media inquiry</option>
          <option value="partnership">Partnership or collaboration</option>
          <option value="researcher-access">Researcher access</option>
        </select>
      </label>

      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" />
      </label>

      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" />
      </label>

      <label>
        <span>Organization</span>
        <input name="organization" type="text" placeholder="Optional" />
      </label>

      <label className="fullField">
        <span>Message</span>
        <textarea name="message" rows={6} placeholder="General correspondence only…" />
      </label>

      {contactEmail ? (
        <button className="primaryButton fullField" type="submit">Open email to Hope Records</button>
      ) : (
        <div className="contactChannelPending fullField">
          <strong>General inbox connection pending.</strong>
          <p>The page is ready; the remaining setup step is choosing the public Hope Records contact email and adding it as <code>NEXT_PUBLIC_CONTACT_EMAIL</code> in the GitHub Pages build environment.</p>
        </div>
      )}
    </form>
  );
}
