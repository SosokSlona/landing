# FEAT-001: Cloudflare Email Routing & Domain Setup

**Status:** Ready for Implementation
**Priority:** P1
**Type:** Infrastructure / Feature
**Created:** 2026-08-26

---

## Overview
Configure Cloudflare Email Routing and DNS authentication for the custom domain `shahotko.tech`. This enables legitimate receipt and forwarding of business inquiries sent to `ivan@shahotko.tech` directly to the primary personal inbox, protects domain reputation with SPF/DKIM/DMARC, and establishes a secondary serverless notification channel for the portfolio contact form.

## Objectives
1. **Primary:** Enable receiving and forwarding emails from `ivan@shahotko.tech` with zero bounce rate and proper anti-spoofing security.
2. **Secondary:** Support optional dual-channel dispatch (Telegram + Email) inside `/functions/api/contact.js` when email credentials are configured.

## Requirements

### Functional Requirements
- [ ] **FR-1:** Configure Cloudflare Email Routing MX and SPF DNS records for `shahotko.tech`.
- [ ] **FR-2:** Set up forwarding rule for `ivan@shahotko.tech` pointing to verified personal destination mailbox.
- [ ] **FR-3:** Configure DMARC DNS record (`_dmarc.shahotko.tech`) with `v=DMARC1; p=none;` policy.
- [ ] **FR-4:** Extend `/functions/api/contact.js` to optionally dispatch email notifications alongside Telegram alerts.

### Non-Functional Requirements
- [ ] **NFR-1: Deliverability:** Zero SPF/DKIM rejection on incoming customer messages.
- [ ] **NFR-2: Resilience:** Form submissions must never fail if email provider is temporarily unavailable (Telegram + client fallback remain guaranteed).
- [ ] **NFR-3: Standards:** Strict zero-comment compliance across all codebase modifications.

## Acceptance Criteria
- **Scenario 1: Direct Inbound Email**
  - **Given** an external client sending an email to `ivan@shahotko.tech`,
  - **When** the message is processed by Cloudflare Email Routing,
  - **Then** it arrives in the designated destination mailbox without deliverability errors.
- **Scenario 2: Contact Form Lead Routing**
  - **Given** a lead submitted through the portfolio contact form,
  - **When** `/api/contact` executes,
  - **Then** the message is pushed to Telegram, and if email API keys are set, an email alert is also dispatched.

## Dependencies
| Dependency | Type | Status |
|------------|------|--------|
| Cloudflare DNS & Pages | Infrastructure | Active |
| Domain `shahotko.tech` | Infrastructure | Configured on Cloudflare |
| Destination Email | Account | Pending Verification |

## Constraints
- Cloudflare Email Routing handles inbound forwarding; outbound sending via Cloudflare Pages Function requires API transport (e.g. Resend, MailChannels, or Postmark) or direct Telegram delivery.
