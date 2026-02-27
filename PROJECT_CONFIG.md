# 🏗️ Impact-Archive: Build Roadmap

This roadmap is designed for a **Principal Full-Stack Architect** workflow: high-performance, stateless, and focused on shipping real impact.

---

## Phase 1: The Foundation (Infrastructure)
**Goal:** Setup the Next.js shell and secure local state for BYOK (Bring Your Own Key).

- [ ] **Initialize Project**
    - [ ] Run `npx create-next-app@latest` (Next 15, Tailwind, App Router, `src/` dir).
    - [ ] Install core dependencies: `lucide-react`, `clsx`, `tailwind-merge`, `zod`, `framer-motion`.
- [ ] **State Persistence (BYOK)**
    - [ ] Create `src/hooks/useLocalStorage.ts` to handle client-side key storage (Gemini & GitHub).
    - [ ] Implement `ApiKeyProvider` to manage global key availability without prop-drilling.
- [ ] **The Settings Vault**
    - [ ] Build a high-contrast Modal/Dialog for `GEMINI_API_KEY` and `GITHUB_PAT`.
    - [ ] Add Zod validation to check for correct key formats before saving.
- [ ] **Theme Configuration**
    - [ ] Force `dark` mode in `tailwind.config.ts`.
    - [ ] Define the "Executive-Modern" palette: Pure Black (#000), Stark White (#FFF), and accent Slate.

---

## Phase 2: The Evidence Fetcher (GitHub API)
**Goal:** Automate data entry by pulling real context from Pull Requests.

- [ ] **URL Utility**
    - [ ] Create `src/lib/parse-github-url.ts` to extract `owner`, `repo`, and `pull_number` from a pasted link.
- [ ] **GitHub Service Layer**
    - [ ] Create `src/services/github.ts` using the browser `fetch` API.
    - [ ] Function: `getPullRequestDetails` to fetch the PR Title and Body.
    - [ ] Function: `getPullRequestDiff` to fetch the raw code changes (the "Evidence").
- [ ] **Command Bar UI**
    - [ ] Build a single, bold Input field for the PR Link.
    - [ ] Implement a "Fetching" state with a high-contrast progress indicator.
- [ ] **Context Sanitizer**
    - [ ] Create a utility to strip unnecessary noise from the Diff before sending it to the AI to save tokens.

---

## Phase 3: The Logic Layer (AI Orchestration)
**Goal:** Translate code diffs into high-impact business narratives.

- [ ] **Gemini Client Setup**
    - [ ] Install `@google/generative-ai`.
    - [ ] Initialize the model in `src/services/gemini.ts` using the key from Local Storage.
- [ ] **The "Architect" System Prompt**
    - [ ] Define persona: "Principal Architect focused on ROI, performance, and shipping."
    - [ ] Logic: "Analyze this PR. Identify the core Problem, the Technical Solution, and the Business Impact."
- [ ] **Streaming Implementation**
    - [ ] Use `model.generateContentStream()` for real-time feedback.
    - [ ] Build a `useGemini` hook to handle chunk updates and error states (429/401).
- [ ] **Structured Output**
    - [ ] Force the model to return a structured JSON-like object for the Bento display.

---

## Phase 4: The Impact UI (Bento Display)
**Goal:** Visualize the results in a bold, high-conversion format.

- [ ] **The Bento Grid**
    - [ ] Build a responsive CSS Grid: `Problem` (Small), `Solution` (Medium), `Impact` (Large/Bold).
- [ ] **Typography System**
    - [ ] Implement oversized, brutalist headers for metrics (e.g., "120ms saved").
    - [ ] Use clean, tight-leading body text for technical descriptions.
- [ ] **Interactive Elements**
    - [ ] Add an "Edit" mode so the user can refine the AI's output manually before exporting.
    - [ ] Use `framer-motion` for a staggered entry of the Bento boxes.

---

## Phase 5: Export & Shipping
**Goal:** Make the "Impact" shareable and launch the open-source repo.

- [ ] **Image Generation**
    - [ ] Install `html-to-image`.
    - [ ] Add a "Download as PNG" button formatted for LinkedIn/Twitter.
- [ ] **Markdown Export**
    - [ ] Create a "Copy for GitHub Profile" button that formats the case study in clean Markdown.
- [ ] **Deployment**
    - [ ] Deploy the production build to Vercel.
- [ ] **Documentation**
    - [ ] Write the `README.md` focusing on "How to run for $0" and the BYOK privacy model.

---

### Progress Tracking

| Phase | Title | Status |
| :--- | :--- | :--- |
| 1 | Foundation | ⚪ Not Started |
| 2 | GitHub Fetcher | ⚪ Not Started |
| 3 | AI Orchestration | ⚪ Not Started |
| 4 | Bento UI | ⚪ Not Started |
| 5 | Shipping | ⚪ Not Started |