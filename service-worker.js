const CACHE = 'math-cache-v1';
const FILES = ['/', '/index.html'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(c => Promise.all(c.map(k => k !== CACHE && caches.delete(k))))));
