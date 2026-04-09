# API Route

Create a Next.js Route Handler (API endpoint) for `$ARGUMENTS`.

## Steps

1. **Create the route file**: Create `src/app/api/<endpoint>/route.ts`
2. **Define HTTP methods**: Export named functions for each HTTP method: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`
3. **Parse request data**: Use `request.json()` for body, `request.nextUrl.searchParams` for query params
4. **Validate inputs**: Validate request body shape using TypeScript types (or Zod when added)
5. **Implement business logic**: Call service layer functions from `src/services/`
6. **Return typed responses**: Use `NextResponse.json()` with appropriate status codes
7. **Handle errors**: Wrap in try/catch, return proper error responses with status codes

## Requirements

- Route files must be named `route.ts` (Next.js convention)
- Must use `NextResponse` from `next/server` for responses
- Must handle errors with appropriate HTTP status codes
- Must validate inputs before processing
- Must not expose internal error details in responses

## Important Notes

- ALWAYS use `NextResponse.json()` — never use raw `Response` constructors
- Route Handlers are server-only — never import client-side code
- For streaming responses (e.g., Gemini AI), use `ReadableStream` with `new Response(stream)`
- Keep business logic in `src/services/` — Route Handlers should be thin wrappers
- Headers: set `Content-Type`, `Cache-Control` as appropriate
