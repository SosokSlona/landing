# FEAT-001: Implementation Plan

**Track:** Cloudflare Email Routing & Domain Setup
**Status:** In Progress
**Current Phase:** Phase 3

---

## Phase 1: Cloudflare DNS & Inbound Email Routing [checkpoint: passed]

### Objectives
- Configure DNS records for Cloudflare Email Routing on `shahotko.tech`.
- Enable routing rule for `ivan@shahotko.tech` to verified destination inbox.

### Tasks
- [x] **Task 1.1:** Document required Cloudflare DNS entries (MX records, SPF TXT, DMARC TXT).
- [x] **Task 1.2:** Configure destination email verification inside Cloudflare Dashboard.
- [x] **Task 1.3:** Activate email routing rule for `ivan@shahotko.tech`.

### Quality Gates
- [x] DNS propagation check confirms MX pointing to Cloudflare mail exchangers (`route1/2/3.mx.cloudflare.net`).
- [x] Inbound authentication verified (SPF/DKIM enforcement verified).

---

## Phase 2: Contact Form Serverless Dispatch Enhancement [checkpoint: passed]

### Objectives
- Enhance `/functions/api/contact.js` to support direct email delivery (Resend API) + Telegram.
- Maintain 100% resilience with zero-failure guarantee.

### Tasks
- [x] **Task 2.1:** Enhance `/functions/api/contact.js` with structured HTML/text email payload to `ivan@shahotko.tech`.
- [x] **Task 2.2:** Update `README.md` with environment variables for email integration (`RESEND_API_KEY`, `NOTIFICATION_EMAIL`).
- [x] **Task 2.3:** Verify strict zero-comments policy and syntax validity.

### Quality Gates
- [x] Contact form functions correctly with or without email API credentials.
- [x] Client fallback remains intact.

---

## Phase 3: Verification & Final Handshake [checkpoint: pending]

### Objectives
- End-to-end verification of inbound mail and form submission.
- Update track status and sync with conductor registry.

### Tasks
- [ ] **Task 3.1:** Add `RESEND_API_KEY` in Cloudflare Pages Dashboard.
- [ ] **Task 3.2:** Send live test lead and confirm delivery to `ivan@shahotko.tech`.

### Quality Gates
- [ ] Zero lint/build errors.
- [ ] Git commit and push to `origin/main`.

---

## Progress Summary
| Phase | Status | Tasks Done | Tasks Total |
|-------|--------|------------|-------------|
| 1. DNS & Inbound Routing | [x] Completed | 3 | 3 |
| 2. Contact Form Dispatch | [x] Completed | 3 | 3 |
| 3. Verification & Handshake | [ ] Pending | 0 | 2 |

**Overall Progress:** 6 / 8 tasks (75%)
