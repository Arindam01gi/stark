# PROJECT_CONFIG.md — Stark

Concrete tooling, libraries, and configuration for the Stark codebase.

## Build System

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.1.6 | App Router, RSC, `next dev` / `next build` |
| Turborepo | latest | Task runner — `turbo next-dev`, `turbo build` |
| TypeScript | ^5 | Strict mode, `target: ES2017`, `moduleResolution: bundler` |
| PostCSS | via `@tailwindcss/postcss` ^4 | Single plugin pipeline |

## Package Manager

| Tool | Version | Lock file |
|---|---|---|
| pnpm | 9.1.0 | `pnpm-lock.yaml` |

**Commands:**
- `pnpm dev` — start development server (delegates to `turbo next-dev`)
- `pnpm build` — production build (delegates to `turbo build`)
- `pnpx` — execute binaries from packages

## UI & Styling

| Library | Version | Purpose |
|---|---|---|
| Tailwind CSS | ^4 | Utility-first CSS (v4 — CSS-first config) |
| @tailwindcss/postcss | ^4 | PostCSS integration for Tailwind v4 |
| tw-animate-css | ^1.4.0 | Animation utility classes |
| shadcn/ui | new-york style | Radix-based component primitives |
| Radix UI | ^1.4.3 | Accessible headless primitives |
| Lucide React | ^0.575.0 | Icon library |
| class-variance-authority | ^0.7.1 | Variant-driven component styling |
| clsx | ^2.1.1 | Conditional class merging |
| tailwind-merge | ^3.5.0 | Intelligent Tailwind class deduplication |

## Fonts

| Font | Provider | CSS Variable |
|---|---|---|
| Geist | `next/font/google` | `--font-geist-sans` |
| Geist Mono | `next/font/google` | `--font-geist-mono` |

## Linting

| Tool | Version | Config |
|---|---|---|
| ESLint | ^9 | `eslint.config.mjs` (flat config) |
| eslint-config-next | 16.1.6 | Core Web Vitals + TypeScript rules |

**Run:** `pnpx eslint .`

## Paths & Aliases

| Alias | Maps to |
|---|---|
| `@/*` | `./src/*` |

## Project Structure

```
src/
├── app/             # Next.js App Router pages, layouts, globals.css
├── components/
│   └── ui/          # shadcn/ui primitives
├── context/         # React context providers (empty — to be built)
├── hooks/           # Custom React hooks (empty — to be built)
├── lib/             # Utilities (cn() helper)
└── services/        # External API clients (empty — to be built)
```

## Design Tokens (CSS Variables)

- Colour space: **oklch**
- Theme toggle: `:root` (light) / `.dark` (dark) via CSS custom properties
- Custom variant: `@custom-variant dark (&:is(.dark *))`
- Border radius base: `--radius: 0.625rem`
- Full token set: `src/app/globals.css`

## Important Notes

- **No formatter configured** — consider adding Prettier or Biome for consistent formatting
- **No test runner configured** — consider adding Vitest when tests are needed
- **No CI/CD pipeline** — consider adding GitHub Actions for linting and build checks
- The `pnpm-workspace.yaml` only contains `ignoredBuiltDependencies` — this is not a multi-package monorepo
- `components.json` drives `shadcn/ui` CLI; add new primitives with `pnpx shadcn@latest add <name>`
