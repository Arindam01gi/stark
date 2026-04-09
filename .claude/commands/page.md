# Page

Generate a new Next.js App Router page for `$ARGUMENTS`.

## Steps

1. **Create the route directory**: Create `src/app/<route>/` directory for the new page
2. **Create `page.tsx`**: This is a Server Component by default. Implement the page layout using semantic HTML (`<main>`, `<section>`)
3. **Create `layout.tsx` (if needed)**: Only if this route needs a shared layout wrapper (e.g., sidebar, sub-navigation)
4. **Create `loading.tsx`**: Add a loading skeleton for Suspense fallback during navigation
5. **Create `error.tsx`**: Add an error boundary with `"use client"` for graceful error handling
6. **Add metadata**: Export a `metadata` object or `generateMetadata` function for SEO
7. **Wire up Suspense boundaries**: Wrap any async data fetching in `<Suspense>` with skeleton fallbacks

## Requirements

- Page files must be named `page.tsx` (Next.js convention)
- Pages are Server Components by default — only add `"use client"` if absolutely necessary
- Must export `metadata` or `generateMetadata` for SEO
- Must use `@/` path alias for all imports
- Must follow the project's responsive layout patterns

## Important Notes

- ALWAYS create a `loading.tsx` for non-trivial pages to ensure smooth navigation
- ALWAYS use semantic HTML for accessibility
- Route segments use lowercase kebab-case directories: `src/app/my-route/page.tsx`
- For dynamic routes: `src/app/[slug]/page.tsx`
- For route groups (no URL impact): `src/app/(group)/page.tsx`
