# Ultraviolet Static Site (Query Mode)

This repo is a static Ultraviolet launcher optimized for GitHub Pages:
- Root page handles input and builds `/?service=<encoded>`
- After load, it hops to `/service/<encoded>` (intercepted by UV SW)
- Includes `404.html` SPA fallback for GH Pages

## Files
- `index.html` – input + `/?service=` logic (auto-https for domains; DuckDuckGo for searches)
- `uv.config.js` – point `bare:` to your Cloudflare Worker URL ending with `/bare/`
- `uv.sw.js` – Ultraviolet service worker loader (must be at site root)
- `register-sw.js` – registers SW with `{ scope: '/' }` (HTTPS required)
- `_headers` – Cloudflare Pages headers (SW scope + caching)
- `404.html` – SPA redirect so deep links work on GH Pages

## Add UV core files (required)
Drop these at the repo root next to `index.html` **before deploying**:
- `uv.bundle.js`
- `uv.handler.js`

## Bare backend
Deploy a Cloudflare Worker that serves `/bare/` (minimal example in your chat). Put its URL in `uv.config.js`.
