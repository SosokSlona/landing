# FEAT-002: Advanced SEO, Telegram OpenGraph & Search Indexing

## 1. Overview
Complete search engine optimization and rich link preview generation focused on Telegram link previews, structured Schema.org JSON-LD data for Google/Yandex, canonical tags, `sitemap.xml`, and `robots.txt` across the entire portfolio.

## 2. Functional Requirements
1. **OpenGraph & Social Meta Tags (Telegram Focus):**
   - Full `og:*` and `twitter:*` tags on `index.html` and all case studies.
   - Branded 1200x630 OpenGraph preview image (`assets/og-image.png`) in dark tech-brutalist theme.
2. **Schema.org Structured Data (JSON-LD):**
   - `index.html`: `Person` and `ProfessionalService` schema.
   - `cases/*.html`: `TechArticle` schema with author, tech keywords, and date.
3. **Search Engine Discovery:**
   - `robots.txt` with crawling rules, host, and sitemap reference.
   - `sitemap.xml` with priorities and lastmod timestamps for all site URLs.

## 3. Non-Functional Requirements
- Zero-comment compliance in all code.
- 100% valid HTML5 and XML.
- Fast loading image assets.

## 4. Acceptance Criteria
- [ ] Rich link preview renders cleanly when sharing `https://shahotko.tech/` in Telegram.
- [ ] JSON-LD structured data validates with zero errors.
- [ ] `/sitemap.xml` and `/robots.txt` are served correctly with HTTP 200.
