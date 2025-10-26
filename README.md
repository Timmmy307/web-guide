# Ultraviolet Static Site

This is a minimal static deployment of **Ultraviolet** (TitaniumNetwork) suitable for GitHub + Cloudflare Pages (or any static host).

## Files
- `index.html` – launcher UI that normalizes input (auto-`https://` for bare domains; DuckDuckGo for searches).
- `uv.config.js` – points Ultraviolet to your **Bare** backend and sets paths.
- `uv.sw.js` – Ultraviolet service worker loader (must be at the site root).
- `register-sw.js` – safely registers the SW once core files exist.
- `_headers` – Cloudflare Pages headers (optional elsewhere).

## Required client files (add before deploying)
> Download from the Ultraviolet project/releases and place in this folder (same level as `index.html`):
- **`uv.bundle.js`**
- **`uv.handler.js`**

> The service worker will _not_ register until those two files are present (the site warns in the UI).

## Configure Bare backend
Deploy a tiny Cloudflare Worker that serves **/bare/** and put its URL into `uv.config.js`:

```
bare: 'https://YOUR-BARE-WORKER-URL/bare/'
```

A minimal Worker is included below (see project docs or the Worker file in your chat export).

## Deploy to Cloudflare Pages
- Push this folder to a GitHub repo.
- Create a Pages project pointing at the repo.
- Ensure `_headers` is kept; it sets `Service-Worker-Allowed: /` for `/uv.sw.js`.
- Hard refresh once after deploy so the SW installs/activates.

## Use
- Open the site, type `duckduckgo.com` → it adds `https://` and proxies.
- Type `cats and dogs` → it builds a DuckDuckGo search and proxies.
