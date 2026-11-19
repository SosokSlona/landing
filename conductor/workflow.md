# Project Workflow: shahotko.tech

## Guiding Principles

1. **The Plan is the Source of Truth:** All work must be tracked in `plan.md`.
2. **Atomic File Tasks:** Every implementation task covers strictly ONE file. No multi-file batching in a single task.
3. **Commit per File:** Every completed file task MUST conclude with an individual git commit and recorded commit SHA in `plan.md`.
4. **Strict Skill Verification Gates:** Each task and phase must be validated through:
   - `seo` (meta tags, semantic markup, OpenGraph, JSON-LD Schema.org)
   - `accessibility` (WCAG 2.2 AA compliance, keyboard navigation, contrast, ARIA)
   - `best-practices` (clean HTML5/CSS, no CDN dependencies, page weight < 40 KB)
5. **No Build Step:** Direct Cloudflare Pages serving from root `/`.

## Task Workflow

All tasks follow a strict lifecycle:

### Standard Task Workflow

1. **Select Task:** Choose the next available task from `plan.md` in sequential order.
2. **Mark In Progress:** Edit `plan.md` and change the task status from `[ ]` to `[~]`.
3. **Implementation:**
   - Implement the changes strictly for the single target file of the task.
   - Adhere to `product-guidelines.md` (Thomann light aesthetic, `#FFFFFF`/`#F4F5F7`, `#008B8B` teal, system fonts).
   - Enforce page weight limit (< 40 KB).
4. **Verification Gates:**
   - Run verification with `seo`, `accessibility`, and `best-practices`.
   - Ensure zero external dependencies (no Tailwind CDN, no Google Fonts, no font icons).
5. **Commit Code Changes:**
   - Stage the single target file.
   - Commit with conventional commit format (e.g., `feat(html): implement ai/index.html catalog`).
6. **Record Task Commit SHA:**
   - Update `plan.md`, change status from `[~]` to `[x]` and append the 7-character commit SHA.
7. **Commit Plan Update:**
   - Stage and commit `plan.md` (`conductor(plan): Mark task '<Task>' as complete`).

### Phase Completion Verification and Checkpointing Protocol

1. **Phase Verification:** Review all files implemented in the phase against `GEMINI.md` and guidelines.
2. **Quality Audit:** Confirm responsive layout, SEO metadata, semantic integrity, and form/link actions (`mailto:` and `https://t.me/shtoo_on_tvorit`).
3. **Record Phase Checkpoint:** Append checkpoint SHA to the phase heading in `plan.md` and commit the plan update.

## Quality Gates Checklist

Before marking any task complete, verify:
- [ ] Strictly one file modified/created per task
- [ ] Valid semantic HTML5 / clean CSS / minimal Vanilla JS
- [ ] Page weight strictly under 40 KB
- [ ] Passed SEO checks (title, description, canonical, OG, JSON-LD)
- [ ] Passed Accessibility checks (contrast, focus, alt texts, ARIA labels)
- [ ] Passed Best Practices checks (no console errors, no CDN scripts/styles, secure links)
- [ ] Git commit created for the file, SHA recorded in `plan.md`
