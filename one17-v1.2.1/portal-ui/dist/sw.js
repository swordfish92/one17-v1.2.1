// One17 portal service worker (invariant 67c, Phase A PWA).
//
// Scope is deliberately narrow: this is what makes the portal
// INSTALLABLE and lets the app shell open when briefly offline — it is
// NOT an offline-data cache for account balances or holdings. Every
// /api/* request (and any other non-GET request) is left completely
// untouched, always hitting the network — a financial portal must
// never serve a stale balance from cache while looking live. Bump
// CACHE_VERSION on any app-shell change to invalidate old caches.
const CACHE_VERSION = 'one17-portal-v1';
const APP_SHELL = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Never intercept the API — account data must always be live, never
  // served from a service-worker cache.
  if (req.method !== 'GET' || url.pathname.startsWith('/api/')) return;

  // Navigations (loading the app itself): network-first so a signed-in
  // user always gets the latest build when online, falling back to the
  // cached shell only when genuinely offline (installed-app resilience,
  // not an offline-data feature).
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/').then((res) => res ?? Response.error())),
    );
    return;
  }

  // Static app-shell assets (icons, manifest, built JS/CSS): cache-first
  // with a network fallback that opportunistically re-caches.
  event.respondWith(
    caches.match(req).then((cached) => cached ?? fetch(req).then((res) => {
      if (res.ok) caches.open(CACHE_VERSION).then((cache) => cache.put(req, res.clone()));
      return res;
    })),
  );
});
