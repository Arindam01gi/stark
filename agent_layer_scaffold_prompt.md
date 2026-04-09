# 🧠 AI Agent Layer Scaffold — Master Meta-Prompt

> **Purpose**: Give this entire prompt to an AI coding agent (Claude Code, Cursor, Copilot Workspace, etc.) at the root of any project.  
> The agent will **analyse the codebase first**, then **generate a complete, specialised `.claude/` agent vertical layer** following the best practices below.  
> Supports any stack: React · Next.js · NestJS · FastAPI · Monorepos · and beyond.

---

## 🎯 YOUR MISSION

You are acting as a **Principal Prompt Engineer & AI Agent Architect**.  
Your task is to scaffold a production-grade AI agent vertical layer for **this specific codebase**.

The layer lives in a `.claude/` directory (or equivalent agent config folder if the tool differs) and contains:

| Artifact | Purpose |
|---|---|
| [CLAUDE.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/CLAUDE.md) | Primary AI context file — framework guidance, conventions, available slash commands |
| [PROJECT_CONFIG.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/PROJECT_CONFIG.md) | Project-specific config — tooling, packages, aliases, constraints |
| [settings.json](file:///e:/office/nspire/atlas/apps/dopplr/.claude/settings.json) | Permissions, environment variables, lifecycle hooks |
| `agents/` | Sub-agent specialists (one [.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/CLAUDE.md) per domain) |
| `commands/` | Slash-command definitions (one [.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/CLAUDE.md) per command) |
| `scripts/` | Utility scripts the agent can invoke |

**DO NOT** create a TDD specialist agent. Testing references belong inside relevant domain agents only as secondary guidance.

---

## 📋 PHASE 1 — CODEBASE DISCOVERY (Always run first)

Before writing a single file, perform a deep-read analysis:

### 1.1 — Detect the Stack

```
- Read: package.json / pyproject.toml / Cargo.toml / go.mod (whichever exists)
- Read: tsconfig.json / next.config.* / nest-cli.json / vite.config.* / rsbuild.config.*
- Read: .eslintrc.* / .prettierrc.* / biome.json
- Read: docker-compose.yml / Dockerfile
- Read: README.md, CONTRIBUTING.md (if they exist)
- Scan: src/ or app/ top-level structure (max 2 levels deep)
```

### 1.2 — Fill the Discovery Checklist

Answer each item from what you read (never guess):

**Runtime & Language**
- [ ] Primary language (TypeScript / JavaScript / Python / Go / Rust …)
- [ ] Runtime (Node.js version / Python version / …)
- [ ] Strict mode? (TS strict, mypy strict, …)

**Framework**
- [ ] Frontend: React / Next.js App Router / Next.js Pages / Vue / Svelte / None
- [ ] Backend: NestJS / Express / Fastify / FastAPI / Django / Hono / None
- [ ] Fullstack monorepo? Which workspaces / apps?

**Build & Tooling**
- [ ] Bundler: Webpack / Vite / RSBuild / Turbo / esbuild / None
- [ ] Package manager: pnpm / yarn / npm / bun / pip / poetry / uv
- [ ] Linter: ESLint / Biome / Ruff / Flake8
- [ ] Formatter: Prettier / Biome / Black / Ruff
- [ ] Type checker invocation command

**State & Data**
- [ ] State management libraries (if frontend)
- [ ] ORM / query layer (Prisma / TypeORM / SQLAlchemy / Drizzle / …)
- [ ] HTTP client (Axios / Fetch / ky / httpx / …)
- [ ] Data-fetching layer (TanStack Query / SWR / RTK Query / …)

**Styling (frontend only)**
- [ ] Tailwind / CSS Modules / styled-components / Emotion / None
- [ ] Component library (Radix / shadcn/ui / MUI / Ant Design / …)

**Testing (secondary, for agent awareness only)**
- [ ] Test runner (Vitest / Jest / Pytest / Go test / …)
- [ ] E2E (Playwright / Cypress / …)
- [ ] Test file co-location pattern

**Deployment & Environment**
- [ ] CI (GitHub Actions / GitLab CI / …)
- [ ] Env file structure (.env / .env.local / …)
- [ ] Container usage

**Monorepo layout** (if applicable)
- [ ] Root tooling (Turborepo / Nx / …)
- [ ] Shared packages / internal libs

---

## 📝 PHASE 2 — GENERATE THE AGENT LAYER

After discovery, generate all files below. Every file must reflect only what was discovered — no invented frameworks, no placeholder text.

---

### FILE 1: [CLAUDE.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/CLAUDE.md)

**Format rules:**
- H1 = `# CLAUDE.md — <FrameworkName> Application`  
- Must contain: Project Type, available slash commands table, framework-specific guidelines, file naming conventions, recommended libraries (actual ones, from discovery)
- Length: 60–120 lines

**Template:**

```markdown
# CLAUDE.md — {FRAMEWORK} Application

This file provides guidance to AI coding agents when working with this {FRAMEWORK} codebase.

## Project Type
{one-paragraph description of what this project is and its stack}

## Available Slash Commands

| Command | Purpose |
|---|---|
{dynamically generated rows from commands/ you will create}

## Framework-Specific Guidelines

### Architecture & Patterns
{bullet list derived from actual project structure}

### {State / Data} Layer
{derived from discovery — only relevant items}

### Performance Considerations
{framework-appropriate patterns only}

### Error Handling
{project-appropriate error handling conventions}

## File Naming Conventions
{derived from actual files found — PascalCase, kebab-case, etc.}

## Key Constraints
{pnpm only? Node >=20? Python >=3.11? Non-negotiable rules found in package.json / pyproject.toml}
```

---

### FILE 2: [PROJECT_CONFIG.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/PROJECT_CONFIG.md)

**Format rules:**
- Document every concrete tool, library, and version found during discovery
- Group by: Build System, State/Data Management, Styling, API Integration, Paths/Aliases, Performance, Important Notes
- Never include tools NOT found in the codebase
- Length: 50–100 lines

---

### FILE 3: [settings.json](file:///e:/office/nspire/atlas/apps/dopplr/.claude/settings.json)

Generate a [settings.json](file:///e:/office/nspire/atlas/apps/dopplr/.claude/settings.json) with the following structure, adapting commands to the actual package manager and toolchain discovered:

```jsonc
{
  "permissions": {
    "allow": [
      // Always include:
      "Bash", "Edit", "MultiEdit", "Write",
      // Package manager (only the one found):
      "Bash({pm}:*)", "Bash({pm}x:*)",
      // Always include:
      "Bash(node:*)", "Bash(git:*)",
      // Linter found:
      "Bash({linter}:*)",
      // Formatter found:
      "Bash({formatter}:*)",
      // Type checker:
      "Bash(tsc:*)",        // only if TypeScript
      "Bash(mypy:*)",       // only if Python + mypy
      // Build tool found:
      "Bash({bundler}:*)"
    ],
    "deny": [
      "Bash(curl:*)", "Bash(wget:*)", "Bash(rm -rf:*)"
    ],
    "defaultMode": "acceptEdits"
  },
  "env": {
    "BASH_DEFAULT_TIMEOUT_MS": "60000",
    "BASH_MAX_OUTPUT_LENGTH": "20000",
    "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR": "1",
    "NODE_ENV": "development"          // only if Node.js project
  },
  "includeCoAuthoredBy": true,
  "cleanupPeriodDays": 30,
  "hooks": {
    "PreToolUse": [
      // Hook: log every bash command for auditability
      {
        "matcher": "Bash",
        "hooks": [{
          "type": "command",
          "command": "jq -r '\"\\(.tool_input.command) - \\(.tool_input.description // \"No description\")\"' >> ~/.claude/bash-command-log.txt"
        }]
      },
      // Hook: block console.log in production files (JS/TS only)
      // Hook: audit dependencies on package.json change (JS only, uses actual pm)
    ],
    "PostToolUse": [
      // Hook: auto-format file after write/edit (use actual formatter)
      // Hook: type-check after TS file save (TS only)
      // Hook: lint after write/edit (use actual linter)
      // Hook: security scan if requirements.txt or package.json changes
    ],
    "Notification": [
      {
        "matcher": "",
        "hooks": [{
          "type": "command",
          "command": "echo \"Agent notification: $(date)\" >> ~/.claude/notifications.log"
        }]
      }
    ],
    "Stop": []
  }
}
```

> **Hook generation rules:**  
> - Use `prettier --write` only if Prettier is the formatter  
> - Use `biome format --write` only if Biome is the formatter  
> - Use `ruff format` only if Ruff is the formatter  
> - Use `eslint --fix` only if ESLint is the linter  
> - Use `ruff check --fix` only if Ruff is the linter  
> - Use `pnpx tsc --noEmit` only if TypeScript  
> - Use `mypy` only if Python + mypy  
> - Adapt package manager prefix (`pnpx`, `npx`, `bunx`) to match what was found  
> - Always write real shell commands — no placeholder strings

---

### FILE 4: `agents/` — Specialist Sub-Agents

Create **3–6 specialist agents** based on what the project actually needs.  
Do **NOT** create a TDD specialist.  
Use the following decision table:

| Condition | Create Agent |
|---|---|
| Has React / Next.js frontend | `frontend-specialist.md` |
| Has complex state (Redux / Zustand / XState / Pinia) | [state-management.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/state-management.md) |
| Has NestJS / Express / Fastify / Hono | `backend-api.md` |
| Has FastAPI / Django / Flask | `python-api.md` |
| Has Prisma / TypeORM / SQLAlchemy / Drizzle | `data-layer.md` |
| Has auth (JWT / OAuth / session / NextAuth) | `auth-security.md` |
| Has CI/CD / Docker / infra files | `devops-infra.md` |
| Is a monorepo with shared packages | `monorepo-architect.md` |
| Has performance-sensitive frontend | [performance-optimization.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/agents/react-performance-optimization.md) |

**Agent file format** (strictly follow this YAML frontmatter):

```markdown
---
name: {agent-name}
description: {One sentence description}. Use PROACTIVELY for {specific trigger scenarios}. Examples: <example>Context: {realistic scenario}. user: '{realistic request}' assistant: 'I'll use the {agent-name} agent to {action}' <commentary>{why this agent}</commentary></example>
color: {blue|green|purple|orange|red|yellow}
tools: Read, Write, Edit, MultiEdit, Bash
model: sonnet
---

You are a {DOMAIN} specialist for the **{PROJECT STACK}** codebase.

## Core Expertise
{bullet list of 5–8 specific expertise areas, all grounded in discovered stack}

## When to Use This Agent
{concrete, specific triggers — not generic}

## {Key Domain Section 1}
{Concrete patterns, code examples using actual libraries found in project}

## {Key Domain Section 2}
{Concrete patterns}

## Best Practices
{Actionable, opinionated rules derived from the project's actual conventions}

Always {primary directive aligned to the domain}.
```

**Agent content rules:**
- All code examples must use **actual libraries found in the project** (e.g., if Zustand is used, show Zustand; if Redux Toolkit, show RTK)
- No generic placeholder implementations
- Reference the project's actual path aliases (e.g., `@/`, `~/`, `src/`)
- If the project has a `src/services/` or similar API folder, reference it
- Length per agent: 80–300 lines depending on complexity

---

### FILE 5: `commands/` — Slash Commands

Create one [.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/CLAUDE.md) file per slash command.  
Base the command set on the framework and project type:

**Universal commands (always create):**
- [debug.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/debug.md) — Debug any issue in this project
- [refactor.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/refactor.md) — Refactor code following project conventions
- [lint.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/lint.md) — Run linting and fix issues

**Conditional commands (create if applicable):**

| Condition | Command |
|---|---|
| React / Next.js | [component.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/component.md) |
| Any frontend | [hooks.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/hooks.md) (if hooks-based) |
| Next.js | `page.md`, `api-route.md` |
| NestJS | `module.md`, `controller.md`, `service.md` |
| FastAPI | `router.md`, `schema.md` |
| Any TS project | [typescript-migrate.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/typescript-migrate.md) |
| Any project with package.json | [npm-scripts.md](file:///e:/office/nspire/atlas/apps/dopplr/.claude/commands/npm-scripts.md) (or `pnpm-scripts.md`) |
| Has DB / ORM | `migration.md` |
| Has auth | `auth-flow.md` |

**Command file format:**

```markdown
# {Command Name}

{What this command does} for `$ARGUMENTS`.

## Steps

1. **{Step 1}**: {Description grounded in actual project conventions}
2. **{Step 2}**: ...
{3–8 steps total}

## Requirements

- {Concrete requirement 1}
- {Concrete requirement 2}

## Important Notes

- ALWAYS {critical rule derived from project conventions}
- {Additional constraint}
```

---

### FILE 6: [scripts/context-monitor.py](file:///e:/office/nspire/atlas/apps/dopplr/.claude/scripts/context-monitor.py)

Always generate this utility script. It provides real-time context window usage monitoring for the agent session.

The script must:
- Read JSON from `stdin` (Claude Code hook format)
- Parse `usage.input_tokens`, `cache_read_input_tokens`, `cache_creation_input_tokens`
- Display a color-coded progress bar (🟢 < 50%, 🟡 50–74%, 🟠 75–89%, 🔴 90–94%, 🚨 ≥ 95%)
- Show: `[ModelName] 📁 {directory} 🧠 {bar} {percent}% | 💰 {cost} ⏱ {duration} 📝 {lines_changed}`
- Gracefully fall back on any error

---

## 🏗️ PHASE 3 — QUALITY GATES

After generating all files, validate each one against these gates:

### Gate 1: No Hallucinated Tools
- Search every generated file for tool/library names
- Cross-reference against the discovery checklist
- REMOVE any tool not confirmed in the codebase

### Gate 2: Hook Shell Commands Are Executable
- Every hook `command` value must be a real, runnable shell command
- No missing variable quotes, no `TODO` placeholders
- Commands reference the actual package manager and tool

### Gate 3: Agent Descriptions Have Examples
- Every `agents/*.md` YAML frontmatter must contain at least 1 `<example>` block
- Examples must be realistic for this specific project type

### Gate 4: Slash Commands Reference Actual Project Patterns
- Every `commands/*.md` must reference the project's real folder structure
- (e.g., if API routes live in `src/app/api/`, commands reference that path)

### Gate 5: Project Constraints Are Enforced
- If only `pnpm` is allowed → no `npm` or `yarn` commands anywhere
- If Python project → no Node.js commands in hooks unless confirmed Node is also present
- If monorepo → commands must account for workspace scope

### Gate 6: settings.json Is Valid JSON
- Parse and validate the output JSON before finalising

---

## 📐 PHASE 4 — FINAL STRUCTURE SUMMARY

After generating all files, print a summary table:

```
.claude/
├── CLAUDE.md                          ✅ {line count} lines
├── PROJECT_CONFIG.md                  ✅ {line count} lines
├── settings.json                      ✅ {hook count} hooks, {permission count} permissions
├── agents/
│   ├── {agent-1}.md                   ✅ {expertise areas count} expertise areas
│   ├── {agent-2}.md                   ✅ ...
│   └── ...
├── commands/
│   ├── {command-1}.md                 ✅
│   ├── {command-2}.md                 ✅
│   └── ...
└── scripts/
    └── context-monitor.py             ✅

Stack detected:    {Framework} + {Language} + {Package Manager}
Agents created:    {N} (no TDD specialist)
Commands created:  {N}
Quality gates:     6/6 passed
```

---

## ⚠️ HARD RULES — NEVER VIOLATE

1. **Discover before you generate** — Never write a single file before completing Phase 1
2. **No TDD specialist agent** — Testing awareness belongs inside relevant domain agents only
3. **No hallucinated libraries** — Only reference libraries confirmed to exist in the project
4. **Real shell commands only** — Every hook command must be executable as-is
5. **Agent examples must be realistic** — Generic placeholders are forbidden
6. **Adapt to monorepos** — In a monorepo, ask which app/package to target before generating, or generate one `.claude/` per package if appropriate
7. **Match the project's package manager exactly** — Never mix `npm`, `pnpm`, `yarn`, `bun`, `pip`, `poetry`, `uv`
8. **settings.json must be valid JSON** — No JSONC comments in the final output
9. **File lengths are guidelines, not limits** — If a project is complex, go deeper
10. **Python projects get Python hooks** — `ruff`, `mypy`, `pytest`, `uvicorn` — never Node hooks on a pure Python project

---

## 🚀 EXECUTION ORDER

```
Phase 1: Discovery  →  Phase 2: Generate  →  Phase 3: Quality Gates  →  Phase 4: Summary
```

Start Phase 1 immediately by reading the project files. Do not ask for permission. Do not show a plan first. Just do it.
