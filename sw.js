// Minimal service worker: lets browsers offer "Install app". It does not cache anything, so you always get the latest site.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
