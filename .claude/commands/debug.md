# Debug

Debug any issue in this project for `$ARGUMENTS`.

## Steps

1. **Reproduce the issue**: Identify the exact error message, stack trace, or unexpected behaviour. Check the terminal running `pnpm dev` for server-side errors and the browser console for client-side errors
2. **Isolate the component**: Determine which file(s) are involved. Check if the issue is in a Server Component (server logs) or Client Component (browser console)
3. **Check common pitfalls**:
   - Missing `"use client"` directive for components using hooks/state
   - Hydration mismatches (server HTML ≠ client render) — common with localStorage
   - Import path errors (must use `@/` alias, not relative `../`)
   - Tailwind v4 class not working — check `@theme inline` in `globals.css`
   - shadcn/ui component not installed — run `pnpx shadcn@latest add <name>`
4. **Inspect related files**: Read the component, its parent, and any services/hooks it imports
5. **Apply the fix**: Make minimal, targeted changes. Run `pnpx eslint --fix <file>` after editing
6. **Verify the fix**: Ensure `pnpx tsc --noEmit` passes and the dev server shows no errors

## Requirements

- Must identify root cause before applying any fix
- Must run type-check (`pnpx tsc --noEmit`) after fixing
- Must run lint (`pnpx eslint .`) after fixing
- Fixes must not introduce new TypeScript errors

## Important Notes

- ALWAYS check both server-side and client-side error outputs
- Hydration errors often stem from using `window`, `localStorage`, or `Date` in Server Components
- If a shadcn/ui component is missing, install it — don't recreate it manually
- Use `pnpm dev` (which runs `turbo next-dev`) to test — never `npm run dev`
