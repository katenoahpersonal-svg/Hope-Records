"use client";

import { FormEvent, useEffect, useState } from "react";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@hoperecord.com";
const validTopics = new Set(["general", "family-or-case-contact", "correction", "media", "partnership", "researcher-access"]);

export function GeneralContactForm() {
  const [topic, setTopic] = useState("general");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("topic");
    if (requested && validTopics.has(requested)) setTopic(requested);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const organization = String(form.get("organization") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = `Hope Record contact · ${topic}`;
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
    <form className="generalContactForm polishedContactForm" onSubmit={submit}>
      <div className="contactFormWarning fullField">
        <strong>General correspondence only.</strong>
        <p>For private testimony, confidential evidence, precise safety locations, or anonymous tips, use private intake instead.</p>
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
        <span>Organization</span>
        <input name="organization" type="text" placeholder="Optional" />
      </label>

      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" />
      </label>

      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" />
      </label>

      <label className="fullField">
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="How can we help?" />
      </label>

      <div className="contactSubmitRow fullField">
        <span>Replies open through <strong>contact@hoperecord.com</strong></span>
        <button className="primaryButton" type="submit">Open email →</button>
      </div>
    </form>
  );
}
