# Project conventions

This is a Cloudflare Worker + Static Assets app deployed to `<name>.<your-domain>` (the parent domain is set as the `PARENT_DOMAIN` repo variable by the scaffolder).

## Stack
- `hono` for routing in `src/worker.js`
- Static assets in `public/` served by the Workers Assets binding
- HTMX for frontend interactivity — server returns HTML fragments, no JSON APIs needed
- D1 (SQLite) for persistence, if enabled

## Where things go
- New routes: add to `src/worker.js` as `app.get(...)` / `app.post(...)`
- Routes that swap HTML fragments: return `c.html(...)` with the partial
- Full pages: put static HTML in `public/` (it's served automatically)
- Styles: extend `public/style.css`

## Deploy
- `main` branch auto-deploys via `.github/workflows/deploy.yml`
- Local dev: `npm run dev`

## HTMX patterns
- Trigger: `hx-get` / `hx-post` on the button or form
- Target: `hx-target="#some-id"` selects what to replace
- Swap: `hx-swap="innerHTML"` (default), `outerHTML`, or `beforeend`
- Server returns the *fragment* (no `<html>` wrapper), HTMX inserts it
