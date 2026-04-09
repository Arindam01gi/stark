# Hooks

Create a custom React hook for `$ARGUMENTS`.

## Steps

1. **Create the file**: Place in `src/hooks/`. Use camelCase naming prefixed with `use`: `useMyHook.ts`
2. **Add `"use client"` directive**: All hooks that use React state, effects, or browser APIs need the client directive
3. **Define return type**: Create a TypeScript interface or type for the hook's return value
4. **Implement the hook**: Follow React hook rules — call hooks at the top level, prefix with `use`
5. **Handle cleanup**: If using `useEffect`, always return a cleanup function to prevent memory leaks
6. **Export the hook**: Use named export

## Requirements

- Must be placed in `src/hooks/`
- Must be prefixed with `use`
- Must have explicit TypeScript return types
- Must include `"use client"` if using React state/effects/browser APIs
- Must use `@/` path alias for imports

## Important Notes

- ALWAYS handle error states — hooks should never silently fail
- ALWAYS clean up effects (event listeners, timers, subscriptions)
- For localStorage hooks, handle SSR hydration mismatches by initialising in `useEffect`
- For data fetching hooks, provide loading, error, and data states
