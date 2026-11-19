# Specification: MVP — Commercial Static Catalog Website shahotko.tech

## 1. Overview
Full implementation of the commercial static website for Ivan Shakhotko (`shahotko.tech`), a systems and automation engineer based in Minsk, Republic of Belarus. The website presents two key areas of expertise:
1. `/ai` — B2B catalog of AI bots, RAG pipelines, data parsers, Linux kiosks/servers, MikroTik, and workstation assembly.
2. `/repair` — B2C catalog of operating system installations, firmware restoration, device maintenance, and an interactive Apple unlock pricing widget for legal owners.
3. Common navigation hub `index.html`, global styling `assets/style.css`, and search engine configuration (`robots.txt`, `sitemap.xml`).

## 2. Architecture & Tech Constraints
- **Hosting**: Cloudflare Pages from root `/` (No build step).
- **Stack**: Pure semantic HTML5, one shared `assets/style.css`, minimal native Vanilla ES6+ JS for Apple unlock search.
- **Strict Prohibitions**: Tailwind CDN, React/Vue, Google Fonts, external icon fonts, Cloudflare Functions/Workers or server endpoints.
- **Design System**: Thomann catalog aesthetic — light minimalist theme, `#FFFFFF` and `#F4F5F7`, cards/tables `1px solid #DCE0E5` with `4px` border-radius, text `#181A1F` / `#4A5058`, accent teal `#008B8B` (hover `#006D6D`), system sans-serif font stack, monospace font for BYN prices and technical parameters.
- **Performance Budget**: Every HTML document strictly under 40 KB; stylesheet under 15 KB.

## 3. Functional Requirements

### 3.1 Design System (`assets/style.css`)
- Light theme without gradients or box-shadows. Base background `#FFFFFF`, alternating section background `#F4F5F7`, cards and catalog rows `#FFFFFF` with `1px solid #DCE0E5` and `border-radius: 4px`.
- Colors: Main text `#181A1F`, secondary text `#4A5058`, solid teal accent `#008B8B` (hover `#006D6D`).
- Typography: System sans-serif (`system-ui, -apple-system, sans-serif`) and `monospace` for BYN prices and lead times.
- Responsive grid: Strict tabular layout on desktop (Service / Description / Turnaround / Price / Action button). On mobile screens (<=768px), automatic conversion of rows into compact vertical cards without horizontal scrolling. File weight under 15 KB.

### 3.2 Main Portal (`index.html`)
- Minimalist header: `SHAHOTKO.TECH` branding, navigation links («Для бизнеса и систем» `/ai/`, «Ремонт и прошивка» `/repair/`), teal action button «Написать в Telegram» (`https://t.me/shtoo_on_tvorit`).
- Hero section: Clear positioning of systems engineer and developer in Minsk and Belarus without English jargon.
- Two equal primary choice cards:
  1. «Бизнесу и сложные системы» (`/ai/`) — AI-боты менеджеры, парсеры, Linux-серверы, MikroTik, кассы, сборка ПК.
  2. «Частным клиентам и устройства» (`/repair/`) — установка Windows/Linux/macOS, прошивка телефонов, разблокировка Apple и Android, чистка ПК.
- Value proposition block (direct work without studio markups, transparent BYN pricing, remote & on-site across Belarus).
- Footer with NPD self-employed status (самозанятый, налог на профессиональный доход), Telegram `@shtoo_on_tvorit`, and email `ivan@shahotko.tech`.
- Schema.org `ProfessionalService` JSON-LD, OpenGraph tags, canonical URL.

### 3.3 B2B / Business & Systems Catalog (`ai/index.html`)
- Breadcrumbs / back link to main page.
- Compact tabular catalog of services with exact starting prices in BYN and direct Telegram order links (`https://t.me/shtoo_on_tvorit?text=Здравствуйте!%20Интересует:%20...`):
  1. AI-боты менеджеры и RAG по прайсам/документам — от 450 BYN
  2. Парсеры цен, остатков и площадок (Kufar, маркетплейсы) — от 350 BYN
  3. Реанимация касс и киосков на лёгкий Linux с автоподъёмом — от 180 BYN
  4. Серверная настройка Linux (VPS, Docker, VPN, бэкапы) — от 90 BYN
  5. Базовая настройка MikroTik (VPN, маршруты, резерв каналов) — от 65 BYN
  6. Оптимизация и сборка ПК под ключ (подбор, монтаж, BIOS, тесты) — от 110 BYN
- Workflow block «Как строится работа» (3 steps: Task Assessment -> Fixed Scope / Milestones -> Handover with documentation).
- Two authentic case studies in «Задача -> Решение -> Результат» format (no simulated widgets).
- Schema.org `ProfessionalService` JSON-LD, OpenGraph tags, canonical URL.

### 3.4 Apple Pricing Dataset (`repair/apple-prices.json`)
- Structured JSON array of Apple models with categories (`apple_watch`, `ipad`, `iphone`), model names, fixed prices in BYN, and estimated turnaround times following `RUB * 0.038 + margin`:
  - Apple Watch / iPad Wi-Fi без SIM (including iPad 11) — 470 BYN
  - iPhone 11 / 12 / 13 / 14 / 15 (base & Plus) — 870 BYN
  - iPhone 13 Pro / 14 Pro / 15 Pro / 16 / 16 Pro — 1350 BYN
  - iPhone 16 Pro Max / 17 / 17 Pro / 17 Pro Max — 1740 BYN
- Explicit legal ownership condition noted in data structure.

### 3.5 B2C / Repair & Apple Unlock Catalog (`repair/index.html`)
- Tabular catalog of personal services with direct Telegram links:
  1. Установка Windows / Linux + драйверы и базовый софт — от 55 BYN
  2. Установка macOS (OpenCore / совместимые устройства Apple) — от 85 BYN
  3. Прошивка Android, кастомные ОС (Ubuntu Touch), восстановление загрузчика — от 45 BYN
  4. Снятие забытых паролей / Google FRP / Mi-аккаунта (законным владельцам) — от 50 BYN
  5. Чистка ноутбука/ПК от пыли + замена термопасты — от 65 BYN
- Interactive widget «Расчёт и заявка на разблокировку Apple (iCloud / Apple ID)»:
  - Reads data dynamically from `repair/apple-prices.json`.
  - Dropdown / search selection by category and model.
  - Serial Number / IMEI input field with 10–15 character validation.
  - Instant display of fixed BYN price and estimated time.
  - Two zero-server dispatch buttons:
    1. «Отправить на почту» (`mailto:ivan@shahotko.tech?subject=...&body=...`)
    2. «Отправить в Telegram» (`https://t.me/shtoo_on_tvorit?text=...`)
    Pre-filled template: "Заявка на разблокировку [Модель]. S/N или IMEI: [Номер]. Расчётная стоимость: [Цена] BYN. Подтверждаю, что являюсь законным владельцем."
  - Legal disclaimer emphasizing service is strictly for legal owners.
- Schema.org `ProfessionalService` JSON-LD, OpenGraph tags, canonical URL.

### 3.6 SEO & Discovery Configuration (`robots.txt`, `sitemap.xml`, `README.md`)
- `robots.txt` allowing indexing for all agents and specifying `Sitemap: https://shahotko.tech/sitemap.xml`.
- `sitemap.xml` listing `/`, `/ai/`, and `/repair/` with priorities, changefreq, and lastmod.
- Updated `README.md` reflecting Cloudflare Pages zero-build architecture.

## 4. Acceptance Criteria
- [ ] Strictly semantic HTML5, zero external CDNs, 100% functional without build step.
- [ ] Each HTML page weighs strictly under 40 KB; CSS under 15 KB.
- [ ] Thomann design system strictly observed: `#FFFFFF`, `#F4F5F7`, `#DCE0E5`, `#181A1F`, `#4A5058`, `#008B8B`.
- [ ] All prices in BYN matching specified values.
- [ ] Apple Unlock calculator calculates prices live and formats pre-filled URLs correctly.
- [ ] Full WCAG 2.2 AA accessibility and clean SEO metadata across all pages.
- [ ] Each file implemented in its own atomic task with individual git commit.
