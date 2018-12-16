var cacheName = 'weather';

self.addEventListener('install', (InstallEvent) => {
    console.log("[ServiceWorker][Weather] being installed");
})

self.addEventListener('activate', (ExtendableEvent) => {
    console.log("[ServiceWorker][Weather] activated");
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.open(cacheName).then((cache) => {
            return cache.match(event.request).then((response) => {
                return response || fetch(event.request).then((response) => {
                    cache.put(event.request, response.clone());
                    return response;
                })
            })
        })
    )
})

