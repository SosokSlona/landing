# Product Guidelines: Ivan Shakhotko Portfolio

## 1. Visual Design & Aesthetic (Tech Brutalism / Engineering Rigor)
- **Philosophy:** Utilitarian, dense, structured, and confident. Zero corporate fluff, generic illustrations, or fake AI aesthetic tropes.
- **Color Palette:**
  - Base Background: Deep Zinc 950 (`#09090b`) with engineered dot-grid overlay (`radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)` with `28px` spacing).
  - Card Surfaces: Zinc 900 (`#141417`) and Zinc 850 (`#1c1c21`).
  - Borders: Zinc 800 (`#27272a`) and Zinc 700 (`#3f3f46`) on hover.
  - Accent / Status: Emerald 500 (`#10b981`) and Emerald 400 (`#34d399`) for live status indicators, SLA benchmarks, and verified checks.
  - Text Hierarchy: Primary text in `#fafafa` (Zinc 50), secondary in `#d4d4d8` (Zinc 300), muted captions in `#a1a1aa` (Zinc 400) and `#71717a` (Zinc 500).
- **Typography:**
  - `Inter` for primary UI, navigation, and body prose.
  - `JetBrains Mono` for tech tags, code snippets, metrics, dates, and architectural pipeline steps.

## 2. Technical Quality & Code Conventions
- **Strict Zero-Comments Rule:** No HTML (`<!-- -->`), CSS (`/* */`), or JavaScript (`//`) comments in public code files. The code and markup must be self-documenting.
- **Zero Build Tooling:** CDN-based Tailwind CSS & Lucide Icons, zero npm/vite build dependencies, standalone HTML execution.
- **100% Responsive Node Architecture:** Responsive grid pipeline cards (`grid-cols-1 sm:grid-cols-4`) with directional arrows instead of fixed-width ASCII art.
- **Dual-Mode Fallback Channels:** Form submissions fallback seamlessly to pre-filled direct Telegram dialogs (`https://t.me/shtoo_on_tvorit?text=...`) if Cloudflare environment variables are unconfigured.

## 3. Voice, Tone & Communication
- **Tone:** Authoritative, pragmatic, concise, and engineering-focused. Senior Systems / Automation Architect persona.
- **Concrete Metrics:** Lead with hard numbers and SLAs (e.g. "TTFT < 140ms", "350k lots/day", "6.2x ZSTD compression", "0% data leak").
- **Clear CTAs:** High-intent direct action prompts ("Отправить заявку", "Написать в Telegram", "Обсудить проект").
