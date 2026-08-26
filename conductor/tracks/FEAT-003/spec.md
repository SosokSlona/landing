# FEAT-003: Interactive Token Bucket Rate Limiter Simulation Playground

## 1. Overview
Design and implement a zero-dependency, ultra-fast client-side simulation widget of the distributed Token Bucket (TPM/RPM) rate limiting algorithm powered by the exact Redis Lua logic described in the case study. This widget is integrated into `cases/llm-gateway-rate-limiter.html` and available as a compact live demo in `index.html`.

## 2. Functional Requirements
1. **Simulation Engine:**
   - Token Bucket algorithm with live token refill based on `performance.now()`.
   - Real-time token capacity, consumption, and burst limit calculation.
2. **Interactive Controls:**
   - Sliders for Capacity (1k - 50k TPM), Refill Rate (200 - 10k tok/s), and Request Size (500 - 8k tok).
   - Action triggers: Single Request, Stress-test / Burst (10 parallel), Reset.
3. **Visual Output & Logs:**
   - Dynamic fill gauge with color thresholds (emerald -> amber -> red).
   - Real-time terminal log stream with microsecond latency simulation.
   - Counters for Total, 200 OK, 429 Throttled, and GPU VRAM protection.
4. **Integration:**
   - Full playground in `cases/llm-gateway-rate-limiter.html`.
   - Compact demo in `index.html` Case #01.

## 3. Non-Functional Requirements
- Zero-comment compliance in all code.
- 100% responsive and touch-friendly on mobile.
- Lightweight & zero external dependencies.

## 4. Acceptance Criteria
- [ ] Users can interact with sliders and test buttons to simulate rate limiting in real time.
- [ ] Terminal log streams instant atomic simulation feedback.
- [ ] Both case study and main landing page widgets function without errors.
