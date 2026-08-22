# Security & Editorial Safety

The Living Record is intended to handle sensitive testimony and source material. Security is part of the product definition, not a launch-day add-on.

## Non-negotiable design rules

1. Public editorial data and private intake are separate data domains.
2. A submission is never public merely because it was received.
3. Exact location is private by default. Public maps should use generalized locations unless precision is editorially necessary and safe.
4. Source identity, contact information, unpublished testimony, and private uploads must not be stored in public tables.
5. Browser clients never receive service-role credentials or other secrets.
6. Published factual claims should be traceable to one or more source records.
7. Allegations, disputes, testimony, and investigative questions remain visibly labeled.
8. Sensitive documents require a private storage bucket with explicit access policies.
9. Add rate limiting, bot/abuse prevention, malware scanning, file validation, audit logs, encryption, retention rules, and a deletion workflow before accepting public submissions.
10. Obtain qualified media/privacy/security counsel before opening anonymous public intake at scale.

## Prototype warning

The `/share` page is intentionally non-submitting in v0.1. Do not connect the buttons to production intake until the privacy and abuse controls above are implemented.
