# Lint

Run linting and fix issues for `$ARGUMENTS`.

## Steps

1. **Run ESLint**: Execute `pnpx eslint .` to identify all linting issues across the project
2. **Auto-fix**: Execute `pnpx eslint --fix .` to automatically fix safe issues (formatting, import order, unused imports)
3. **Type-check**: Execute `pnpx tsc --noEmit` to catch TypeScript errors
4. **Review remaining issues**: Read the output and fix any issues that couldn't be auto-fixed
5. **Re-run checks**: Execute both commands again to confirm zero issues

## Requirements

- Must use project's ESLint flat config (`eslint.config.mjs`)
- Must use pnpx (not npx, not global eslint)
- Must fix all auto-fixable issues
- Must report any issues that require manual intervention

## Important Notes

- ALWAYS run `pnpx tsc --noEmit` alongside ESLint — type errors are equally important
- The project uses ESLint 9 with flat config — `eslint.config.mjs`
- Next.js specific rules are provided by `eslint-config-next` (Core Web Vitals + TypeScript)
- If linting a single file: `pnpx eslint --fix src/components/MyComponent.tsx`
