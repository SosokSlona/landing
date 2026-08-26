# Technology Stack: Ivan Shakhotko Portfolio & Systems Engineering

## 1. Web Platform & Edge Runtime
- **Markup & Styling:**
  - Semantic HTML5 (Single-file Autonomous Pages, zero build step)
  - Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) with custom zinc dark palette extension
  - Lucide Icons via CDN (`https://unpkg.com/lucide@latest`)
  - Typography: Google Fonts `Inter` (UI/body) + `JetBrains Mono` (code/metrics/badges)
- **Serverless & Edge Functions:**
  - Cloudflare Pages Functions (`/functions/api/contact.js`) on Cloudflare Workers V8 runtime
  - External Integrations: Telegram Bot API (`https://api.telegram.org/bot<TOKEN>/sendMessage`)
- **Hosting & Infrastructure:**
  - Cloudflare Pages with automatic Git deployment on push to `main`
  - Zero-build configuration (`build_command: ""`, `build_output_dir: "/"`)

## 2. Core Systems & Engineering Competencies (Case Studies)
- **Backend & Systems Programming:**
  - **Go (1.23+):** High-concurrency reverse proxy, zero-alloc SSE streaming, `sync.Pool` buffer management, net/http microservices.
  - **Python (3.12+):** Asynchronous ETL (`asyncio`, `uvloop`, `aiohttp`), FastAPI microservices, data scraping, statistical scoring.
- **Storage & Databases:**
  - **PostgreSQL 16+:** Relational storage, `pgvector` extension with HNSW vector index, `tsvector` full-text search.
  - **Redis 7:** In-memory caching, atomic rate-limiting via Lua scripting (`Token Bucket`), Redis Streams for ingestion queues.
  - **ClickHouse:** High-throughput columnar OLAP database, `ReplacingMergeTree` table engine with `ZSTD` compression.
  - **SQLite:** Embedded transactional storage for local state and lightweight tooling.
- **AI & Machine Learning Infrastructure:**
  - **Local LLM Orchestration:** vLLM (PagedAttention KV-cache management), Ollama, Llama 3, DeepSeek.
  - **Information Retrieval:** Hybrid Search (Reciprocal Rank Fusion of BM25 lexical + dense cosine embeddings), strict hallucination guardrails.
- **DevOps, Telemetry & Security:**
  - **OS & Containers:** Linux (Debian / Ubuntu / Alpine), Docker, Docker Compose, systemd.
  - **Observability:** Prometheus metrics exporter, Grafana dashboards, TTFT and P95/P99 latency tracking.
  - **Security & Network:** Cloudflare Zero Trust, Reverse Proxies (Nginx, Caddy, Envoy), air-gapped on-premise deployments.
