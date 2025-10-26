// Register the Ultraviolet service worker with root scope
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/uv.sw.js', { scope: '/' }).catch(console.error);
}
