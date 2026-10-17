# Security Policy

## Reporting a vulnerability

**Do not open a public issue, pull request, or Discussion for a security problem.**
This repository is public, so a report filed here is visible to everyone, including
anyone who would rather exploit the issue than see it fixed.

Use one of these private channels instead:

| Channel | Where |
| --- | --- |
| Preferred | [Report a vulnerability](https://github.com/dolor-studio/dolor-studio/security/advisories/new) (Security tab, "Report a vulnerability"). Private between you and our maintainers. |
| Email | [support@dolor-studio.com](mailto:support@dolor-studio.com), monitored by our support team and routed to engineering. |

Helpful reports include what you found, the steps to reproduce it, the impact you
believe it has, and anything you already tried. Please stay inside your own test
account while investigating.

## What to expect

The full policy, including safe harbor and disclosure terms, is published at
[dolor-studio.com/security](https://www.dolor-studio.com/security). In short:

- **Response time.** We are a small team and do not guarantee one. Reports go to a
  monitored mailbox and are routed to engineering. Complex reports take longer to triage.
- **Disclosure.** 90-day coordinated disclosure when feasible, subject to investigation
  requirements. Please give us a reasonable window before going public.
- **Rewards.** We do not run a bug bounty program and do not pay for vulnerability
  reports, in cash, gift cards, subscription credit or any equivalent. This applies to
  every report, however severe. What we offer is that we read it, act on what is valid,
  and tell you what we decided.
- **Safe harbor.** If you act in good faith, stay within your own test account, and give
  us reasonable time to fix an issue, we will not pursue legal action against you for
  that research. We cannot waive claims belonging to our customers or other third parties.
- **Recognition.** On request, we credit you by name in the disclosure thread once a fix
  ships. We do not maintain a public researcher listing or hall of fame.

If [dolor-studio.com/security](https://www.dolor-studio.com/security) and this file ever disagree,
the published policy is the one that applies.

## Scope

This repository holds documentation, guides, and media. Please report vulnerabilities in
the **DOLOR-STUDIO product** itself, which is what the private channels above are for: the web
app, the mobile and desktop apps, the public API, DOLOR-STUDIO Genesis apps, and AI agents.

A broken link, a wrong price in a table, or an outdated screenshot in this repository is
a documentation bug, not a vulnerability. Open a normal issue for those.

## Not a vulnerability report?

- **Product bugs and account questions:** [dolor-studio.com/contact](https://www.dolor-studio.com/contact)
- **Docs corrections in this repository:** [open an issue](https://github.com/dolor-studio/dolor-studio/issues)

## Never commit secrets

This repository is public and secret scanning with push protection is enabled. Do not
commit `.env` files, API tokens, private keys, or customer data, and use placeholder
values in every example. If you do commit a credential, rotate it immediately, then see
[GitHub: removing sensitive data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

Generate and revoke your own API tokens at
[dolor-studio.com/settings/api](https://www.dolor-studio.com/settings/api).
