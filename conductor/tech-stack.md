# Technology Stack: shahotko.tech

## Core Architecture
- **Type**: Multi-Page Application (MPA) of pure static files.
- **Hosting & Infrastructure**: Cloudflare Pages serving from root `/`.
- **Build Pipeline**: None (No Build Step). Instant deployment directly from Git.

## Frontend Technologies
- **HTML**: Чистый семантический HTML5 (`index.html`, `ai/index.html`, `repair/index.html`). Строго до 40 КБ на страницу.
- **CSS**: Один общий файл `assets/style.css`. Нативный CSS3, CSS Custom Properties (Variables), Flexbox/Grid, без препроцессоров и без Tailwind CDN.
- **JavaScript**: Минимальный нативный Vanilla ES6+ JS только для динамического поиска и калькулятора моделей Apple (`repair/apple-prices.json`).
- **Data**: Локальный статический JSON `repair/apple-prices.json` с моделями и формулой расчета в BYN.

## Strict Prohibitions (Жёсткие ограничения)
- ❌ Tailwind CSS (CDN / CLI)
- ❌ React / Vue / Svelte и любые другие SPA-фреймворки
- ❌ Google Fonts и внешние веб-шрифты
- ❌ Внешние иконочные шрифты (FontAwesome и др.)
- ❌ Серверные функции / Cloudflare Functions / Workers (только нативные `mailto:` и `https://t.me/` ссылки)

## SEO, Discovery & Standards
- Schema.org `ProfessionalService` JSON-LD разметка (Минск, Беларусь).
- OpenGraph теги и канонические ссылки (`https://shahotko.tech/`).
- Статические `robots.txt` и `sitemap.xml`.
