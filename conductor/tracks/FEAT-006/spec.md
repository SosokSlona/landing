# FEAT-006: Branded 404 Terminal Page with Typewriter Ping Animation

## 1. Overview
Create a custom, high-conversion `404.html` error page following the Dark Tech-Brutalism design system and strict zero-comments policy. It automatically intercepts all broken or missing URL requests on Cloudflare Pages and presents an interactive retro-modern terminal with a realistic `ping` 404 packet loss sequence and a lively typewriter animation (*"Тут никаго"* -> backspaces *"аго"* -> types *"ого нет... Зато есть боевые кейсы и рабочие сервисы:"*), followed by quick navigation cards to Home, all 3 Case Studies, and a direct Telegram contact button.

## 2. Functional Requirements
1. **Interactive Terminal & Ping Animation:**
   - Linux-style window header with terminal controls (`● ● ●`).
   - Ping command outputting packet loss 100%.
   - Typewriter animation typing "Тут никаго", backspacing 3 letters, and re-typing "ого нет...".
2. **Quick Navigation Matrix:**
   - Home link (`/`).
   - 3 Case study cards.
   - High-contrast Telegram CTA (`@shtoo_on_tvorit`).
3. **Cloudflare Pages Support:**
   - File placed at `/404.html`.

## 3. Non-Functional Requirements
- Zero-comment compliance in all code.
- 100% responsive, mobile-first design.
- Zero dependencies.

## 4. Acceptance Criteria
- [ ] Navigating to a non-existent URL displays `404.html`.
- [ ] Ping and typewriter animations execute smoothly with realistic typing cadences.
- [ ] All quick navigation links and Telegram button function properly.
- [ ] All code conforms to the zero-comments rule.
