# Ivan Shakhotko — Systems Automation & Backend Engineer

Production portfolio and deep-dive architectural NDA case studies.

## Tech Stack
- **Backend:** Go, Python (3.12+), REST API, WebSocket, gRPC
- **Infrastructure:** Linux, Docker, CI/CD, Reverse Proxy, Cloudflare Zero Trust / Pages
- **Data & Storage:** PostgreSQL (pgvector), Redis, ClickHouse, SQLite
- **AI & Automation:** Local LLMs (vLLM / Ollama), ETL Pipelines, Telegram Bot API

## Structure
- `index.html` — Main landing page & direct Telegram contact form
- `cases/llm-gateway-rate-limiter.html` — High-Performance LLM Gateway on Go
- `cases/autonomous-market-intelligence.html` — Real-Time ETL & Scoring on Python & ClickHouse
- `cases/enterprise-rag-automation.html` — Private Enterprise RAG & Local LLM Platform
- `functions/api/contact.js` — Cloudflare Pages Function for instant Telegram notifications

## Cloudflare Pages Configuration
- **Build command:** *(leave empty)*
- **Build output directory:** `/` *(or leave empty)*
- **Environment variables:**
  - `TELEGRAM_BOT_TOKEN` — Bot token from `@BotFather`
  - `TELEGRAM_CHAT_ID` — Chat ID to receive instant lead pings
