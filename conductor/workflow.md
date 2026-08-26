# Conductor Development Workflow

## 1. Guiding Principles
- **Spec-Driven Development (SDD):** Every track, phase, and task starts with a concrete specification and verifiable plan before implementation.
- **Test-Driven Development (TDD):** Implementations must be tested and verified against real criteria.
- **Git Hygiene:** Clean commit messages following conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`).

## 2. Track Lifecycle
1. **Planning (`conductor-new-track`):** Create track spec and plan with numbered phases and subtasks.
2. **Implementation (`conductor-implement`):** Execute tasks sequentially, verifying each step.
3. **Review (`conductor-review`):** Verify code against product guidelines and plan requirements.
4. **Status (`conductor-status`):** Monitor overall project progress and track states.

## 3. Standards Compliance
- Adhere strictly to the project's `product-guidelines.md` and `code_styleguides/`.
- Ensure zero-comment compliance across all front-facing code.
- Test deployments and responsiveness across multiple viewports.
