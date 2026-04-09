# PNPM Scripts

Run or inspect available pnpm scripts for `$ARGUMENTS`.

## Steps

1. **List available scripts**: Read `package.json` to show all available scripts
2. **Identify the target**: Determine which script the user wants to run or inspect
3. **Execute the script**: Run the appropriate `pnpm <script>` command
4. **Monitor output**: Watch for errors, warnings, or success messages
5. **Report results**: Summarise what happened — build stats, errors, or server URL

## Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `pnpm dev` | Start dev server via Turborepo (`turbo next-dev`) |
| `next-dev` | `pnpm next-dev` | Start Next.js dev server directly |
| `build` | `pnpm build` | Production build via Turborepo (`turbo build`) |

## Requirements

- Must use `pnpm` — never `npm`, `yarn`, or `bun`
- Must run from the project root (`e:\projects\stark`)

## Important Notes

- ALWAYS use `pnpm dev` to start the development server (port 3000 by default)
- For production builds, use `pnpm build` and check the output for bundle size warnings
- To add new scripts, edit `package.json` in the `scripts` section
- The Turborepo config (`turbo.json`) controls caching — `dev` and `next-dev` have caching disabled
