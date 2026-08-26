# FEAT-001: Implementation Plan

**Track:** Cloudflare Email Routing & Domain Setup
**Status:** In Progress
**Current Phase:** Phase 1

---

## Phase 1: Cloudflare DNS & Inbound Email Routing [checkpoint: pending]

### Objectives
- Configure DNS records for Cloudflare Email Routing on `shahotko.tech`.
- Enable routing rule for `ivan@shahotko.tech` to verified destination inbox.

### Tasks
- [ ] **Task 1.1:** Document required Cloudflare DNS entries (MX records, SPF TXT, DMARC TXT).
- [ ] **Task 1.2:** Configure destination email verification inside Cloudflare Dashboard.
- [ ] **Task 1.3:** Activate email routing rule for `ivan@shahotko.tech`.

### Quality Gates
- [ ] DNS propagation check confirms MX pointing to Cloudflare mail exchangers.
- [ ] Test email sent to `ivan@shahotko.tech` is successfully forwarded.

---

## Phase 2: Contact Form Serverless Dispatch Enhancement [checkpoint: pending]

### Objectives
- Enhance `/functions/api/contact.js` to support dual-channel delivery (Telegram + Email notification).
- Maintain 100% resilience with zero-failure guarantee.

### Tasks
- [ ] **Task 2.1:** Enhance `/functions/api/contact.js` to optionally support email dispatch API if configured.
- [ ] **Task 2.2:** Update `README.md` with environment variables for email integration.
- [ ] **Task 2.3:** Verify strict zero-comments policy and syntax validity.

### Quality Gates
- [ ] Contact form functions correctly with or without email API credentials.
- [ ] Client fallback to `@shtoo_on_tvorit` remains intact.

---

## Phase 3: Verification & Final Handshake [checkpoint: pending]

### Objectives
- End-to-end verification of inbound mail and form submission.
- Update track status and sync with conductor registry.

### Tasks
- [ ] **Task 3.1:** Run live submission test on Cloudflare Pages.
- [ ] **Task 3.2:** Update `conductor/tracks.md` with completed milestone.

### Quality Gates
- [ ] Zero lint/build errors.
- [ ] Git commit and push to `origin/main`.

---

## Progress Summary
| Phase | Status | Tasks Done | Tasks Total |
|-------|--------|------------|-------------|
| 1. DNS & Inbound Routing | [ ] Pending | 0 | 3 |
| 2. Contact Form Dispatch | [ ] Pending | 0 | 3 |
| 3. Verification & Handshake | [ ] Pending | 0 | 2 |

**Overall Progress:** 0 / 8 tasks (0%)
