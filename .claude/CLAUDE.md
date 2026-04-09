# CLAUDE.md — Next.js 16 Application

This file provides guidance to AI coding agents when working with this Next.js 16 codebase.

## Project Type

**Stark** is a full-stack Next.js 16 App Router application built with TypeScript (strict mode), Tailwind CSS v4, and shadcn/ui (Radix UI primitives). It follows a BYOK (Bring Your Own Key) architecture for AI-powered PR impact analysis — pulling GitHub diffs, summarising them via Gemini, and rendering results in a bold Bento-grid UI. The project uses pnpm and Turborepo for task orchestration.

## Available Slash Commands

| Command | Purpose |
|---|---|
| `/component` | Scaffold a new React component following project conventions |
| `/hooks` | Create a custom React hook with proper TypeScript types |
| `/page` | Generate a new Next.js App Router page with layout |
| `/api-route` | Create a Next.js Route Handler (API endpoint) |
| `/debug` | Debug any issue in this project |
| `/refactor` | Refactor code following project conventions |
| `/lint` | Run linting and fix issues |
| `/pnpm-scripts` | Run or inspect available pnpm scripts |

## Framework-Specific Guidelines

### Architecture & Patterns
- **App Router only** — all routes live in `src/app/` using the file-system conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`)
- **React Server Components (RSC)** are the default; mark client components explicitly with `"use client"`
- **Path alias**: use `@/` which maps to `src/` (e.g. `import { cn } from "@/lib/utils"`)
- **Component organisation**: reusable UI primitives in `src/components/ui/`, domain components in `src/components/`
- **Hooks**: custom hooks belong in `src/hooks/`
- **Services**: external API integrations (GitHub, Gemini) belong in `src/services/`
- **Context**: React context providers belong in `src/context/`
- **Utilities**: shared helpers belong in `src/lib/`

### Styling Layer
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.ts` file; configuration lives in `src/app/globals.css` using `@theme inline`
- **shadcn/ui** (new-york style, RSC enabled, Lucide icons) — all primitives installed via `pnpx shadcn@latest add <component>`
- **CSS variables** use oklch colour space; defined in `:root` and `.dark` selectors
- **Utility function**: always use `cn()` from `@/lib/utils` to merge Tailwind classes (wraps `clsx` + `tailwind-merge`)
- **Animations**: `tw-animate-css` is available for Tailwind animation utilities

### Performance Considerations
- Prefer Server Components; only use `"use client"` when interactivity is needed
- Use `next/image` for all images (auto-optimisation, lazy loading)
- Use `next/font/google` for fonts (currently Geist and Geist Mono)
- Leverage React 19 streaming and Suspense boundaries
- Ensure critical CSS is inlined via the default Tailwind/PostCSS pipeline

### Error Handling
- Use `error.tsx` boundary files per route segment
- Service layer functions should throw typed errors; catch in Server Actions or Route Handlers
- Never expose raw API keys or internal errors to the client

## File Naming Conventions
- **Components**: PascalCase files (`Button.tsx`, `CommandBar.tsx`)
- **Hooks**: camelCase prefixed with `use` (`useLocalStorage.ts`, `useGemini.ts`)
- **Utilities / libs**: kebab-case (`parse-github-url.ts`) or camelCase (`utils.ts`)
- **Pages / layouts**: lowercase Next.js conventions (`page.tsx`, `layout.tsx`, `loading.tsx`)
- **Services**: kebab-case (`github.ts`, `gemini.ts`)
- **CSS**: `globals.css` at app root

## Key Constraints
- **pnpm only** — never use `npm`, `yarn`, or `bun` commands
- **TypeScript strict mode** is enabled — zero `any` types, exhaustive checks required
- **React 19.2** — use the latest React APIs (use hook, Actions, Suspense)
- **Next.js 16.1** — App Router exclusively, no Pages Router
- **Tailwind v4** — no legacy `tailwind.config.js`; all config in CSS `@theme`
- **Node ≥ 20** recommended (pnpm 9.1 requirement)
- **No `console.log`** in production code — use proper error boundaries or server logs
