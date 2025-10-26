// Register the Ultraviolet service worker with root scope
(async () => {
  try {
    // Ensure core assets exist before registering (avoids SW importScripts failure)
    const need = ['/uv.bundle.js', '/uv.handler.js'];
    const checks = await Promise.allSettled(need.map(p => fetch(p, { method: 'HEAD', cache: 'no-store' })));
    const ok = checks.every(r => r.status === 'fulfilled' && r.value.ok);
    if (!ok) {
      console.warn('uv.bundle.js / uv.handler.js not found yet; skipping SW registration.');
      return;
    }
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.register('/uv.sw.js', { scope: '/' });
    }
  } catch (e) {
    console.error('SW registration failed:', e);
  }
})();
