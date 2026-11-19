# Implementation Plan: MVP — Commercial Static Catalog Website shahotko.tech

> **Track ID:** `mvp_shahotko_20261119`  
> **Status:** New  
> **Workflow:** Atomic 1-file tasks, commit per file, seo/accessibility/best-practices gates.

## Phase 1: Unified Stylesheet (`assets/style.css`)

- [x] Task: Create `assets/style.css` (83a3b3a)
  - [x] Implement CSS custom properties for palette (`#FFFFFF`, `#F4F5F7`, `#DCE0E5`, `#181A1F`, `#4A5058`, `#008B8B`, `#006D6D`)
  - [x] Implement base reset, typography with system sans-serif stack and monospace prices
  - [x] Implement Thomann aesthetic components: tables, cards, badges, buttons, form inputs
  - [x] Implement responsive media queries (table-to-card reflow for <=768px, zero horizontal overflow)
  - [x] Enforce weight under 15 KB and WCAG 2.2 AA contrast
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [checkpoint: 83a3b3a]

## Phase 2: Main Navigation Portal (`index.html`)

- [x] Task: Create `index.html` (899fdeb)
  - [x] Implement semantic HTML5 header with `SHAHOTKO.TECH`, nav links, and Telegram button
  - [x] Implement hero section with engineer positioning in Minsk and Belarus
  - [x] Build two equal choice cards for `/ai/` and `/repair/`
  - [x] Implement benefits section and footer with NPD self-employed status and contacts
  - [x] Add SEO meta tags, OpenGraph tags, and Schema.org `ProfessionalService` JSON-LD
  - [x] Validate weight under 40 KB, run `seo`, `accessibility`, and `best-practices` checks
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [checkpoint: 899fdeb]

## Phase 3: Business & Systems Catalog (`ai/index.html`)

- [x] Task: Create `ai/index.html` (ccd392f)
  - [x] Implement page header, breadcrumb navigation, and introduction for B2B services
  - [x] Build tabular catalog with all 6 services and exact BYN prices
  - [x] Add direct Telegram buttons with pre-filled service inquiry parameters
  - [x] Implement 3-step workflow block («Как строится работа») and 2 authentic case studies
  - [x] Add SEO meta tags, OpenGraph tags, and Schema.org `ProfessionalService` JSON-LD
  - [x] Validate weight under 40 KB, run `seo`, `accessibility`, and `best-practices` checks
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [checkpoint: ccd392f]

## Phase 4: Apple Pricing Dataset (`repair/apple-prices.json`)

- [x] Task: Create `repair/apple-prices.json` (2679791)
  - [x] Construct structured array of models with category, name, fixed BYN price, and turnaround
  - [x] Populate entries: Watch/iPad from 470 BYN, iPhone 11-15 from 870 BYN, Pro models from 1350 BYN, Pro Max/17 from 1740 BYN
  - [x] Include legal ownership disclaimer metadata
  - [x] Validate valid JSON syntax and schema
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) [checkpoint: 2679791]

## Phase 5: Repair Catalog & Apple Unlock Widget (`repair/index.html`)

- [ ] Task: Create `repair/index.html`
  - [ ] Implement page header, breadcrumbs, and repair services table (5 items with BYN prices)
  - [ ] Build interactive Apple unlock widget with category/model selector and S/N or IMEI input (10–15 char validation)
  - [ ] Implement Vanilla JS calculator fetching `repair/apple-prices.json` and dynamically rendering price and lead time
  - [ ] Implement zero-server buttons for mailto (`ivan@shahotko.tech`) and Telegram (`https://t.me/shtoo_on_tvorit`) with pre-filled legal text
  - [ ] Add prominent legal disclaimer regarding legal device ownership
  - [ ] Add SEO meta tags, OpenGraph tags, and Schema.org `ProfessionalService` JSON-LD
  - [ ] Validate weight under 40 KB, run `seo`, `accessibility`, and `best-practices` checks
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 6: Technical SEO & Documentation (`robots.txt`, `sitemap.xml`, `README.md`)

- [ ] Task: Create `robots.txt`
  - [ ] Set User-agent: * Allow: / and Sitemap reference to `https://shahotko.tech/sitemap.xml`
- [ ] Task: Create `sitemap.xml`
  - [ ] Generate valid XML sitemap indexing `/`, `/ai/`, and `/repair/`
- [ ] Task: Update `README.md`
  - [ ] Update documentation to reflect Cloudflare Pages zero-build architecture, file structure, and services
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
