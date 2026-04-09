# Refactor

Refactor code following project conventions for `$ARGUMENTS`.

## Steps

1. **Analyse the target**: Read the file(s) to be refactored. Identify code smells: duplication, large components, mixed concerns, untyped code
2. **Plan the refactor**: Determine the specific improvements — extraction, composition, type safety, naming
3. **Extract components**: If a component is > 150 lines, extract sub-components. Place domain components in `src/components/`, primitives in `src/components/ui/`
4. **Extract hooks**: If stateful logic is reused or makes a component complex, extract to `src/hooks/useXxx.ts`
5. **Extract utilities**: If pure functions are buried in components, move to `src/lib/`
6. **Improve types**: Replace `any` with proper interfaces. Add return types to functions. Use discriminated unions where appropriate
7. **Run quality checks**: Execute `pnpx tsc --noEmit` and `pnpx eslint .` to verify no regressions

## Requirements

- Must not change external behaviour (refactor ≠ feature change)
- Must maintain or improve TypeScript type coverage
- Must use `@/` path alias for all imports
- Must use `cn()` for Tailwind class merging
- Must follow existing naming conventions

## Important Notes

- ALWAYS preserve `"use client"` directives when extracting from client components
- ALWAYS keep Server Components as the default — don't accidentally make things client-side
- Move state management logic to hooks, presentation to components, data fetching to services
- Prefer composition over inheritance
- After refactoring, verify the dev server still works: `pnpm dev`
