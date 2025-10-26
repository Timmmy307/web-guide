// Ultraviolet service worker loader
// Order matters: bundle -> config -> handler
importScripts('/uv.bundle.js');
importScripts('/uv.config.js');
importScripts('/uv.handler.js');

const sw = new UVServiceWorker();
self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
