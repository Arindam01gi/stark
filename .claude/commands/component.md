# Component

Create a new React component for `$ARGUMENTS`.

## Steps

1. **Determine component type**: Decide if this is a Server Component (default) or Client Component (needs state, effects, or browser APIs — prefix with `"use client"`)
2. **Create the file**: Place in `src/components/` (domain component) or `src/components/ui/` (primitive). Use PascalCase naming: `MyComponent.tsx`
3. **Define the props interface**: Create a TypeScript `interface` for all props. Extend `React.HTMLAttributes<HTMLDivElement>` if the component wraps a DOM element
4. **Implement the component**: Use `forwardRef` if it wraps a single DOM element. Use `cn()` from `@/lib/utils` for class merging. Reference shadcn/ui primitives from `@/components/ui/` when applicable
5. **Add variants (if needed)**: Use `class-variance-authority` (`cva`) for components with multiple visual variants
6. **Export the component**: Use named exports (not default)

## Requirements

- Must use `@/` path alias for all imports
- Must use `cn()` for any Tailwind class merging
- Must have a fully typed props interface (no `any`)
- Must follow existing naming conventions (PascalCase file, PascalCase component)

## Important Notes

- ALWAYS check if a shadcn/ui primitive already exists before building from scratch (`pnpx shadcn@latest add <name>`)
- ALWAYS use Radix UI via shadcn/ui for interactive primitives (dialogs, dropdowns, tooltips)
- NEVER use raw `<img>` — always use `next/image`
- Client Components must have `"use client"` as the very first line
