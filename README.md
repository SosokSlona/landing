# Ivan Shakhotko — Systems Automation & Backend Engineer

Production portfolio and deep-dive architectural NDA case studies.

## Tech Stack
- **Backend:** Go, Python (3.12+), REST API, WebSocket, gRPC
- **Infrastructure:** Linux, Docker, CI/CD, Reverse Proxy, Cloudflare Zero Trust / Pages
- **Data & Storage:** PostgreSQL (pgvector), Redis, ClickHouse, SQLite
- **AI & Automation:** Local LLMs (vLLM / Ollama), ETL Pipelines, Telegram Bot API

## Structure
- `index.html` — Main landing page & direct feedback form
- `cases/llm-gateway-rate-limiter.html` — High-Performance LLM Gateway on Go
- `cases/autonomous-market-intelligence.html` — Real-Time ETL & Scoring on Python & ClickHouse
- `cases/enterprise-rag-automation.html` — Private Enterprise RAG & Local LLM Platform
- `functions/api/contact.js` — Cloudflare Pages Function for instant Email and Telegram lead delivery

## Cloudflare Pages Configuration
- **Build command:** *(leave empty)*
- **Build output directory:** `/` *(or leave empty)*
- **Environment variables (Settings → Environment Variables):**
  - `RESEND_API_KEY` — API key from [resend.com](https://resend.com) to receive leads directly by email
  - `NOTIFICATION_EMAIL` — Destination address (defaults to `ivan@shahotko.tech`)
  - `RESEND_FROM_EMAIL` — Sender address (defaults to `onboarding@resend.dev` or `leads@shahotko.tech`)
  - `TELEGRAM_BOT_TOKEN` — *(Optional)* Bot token from `@BotFather`
  - `TELEGRAM_CHAT_ID` — *(Optional)* Telegram chat ID for dual-channel alerts
