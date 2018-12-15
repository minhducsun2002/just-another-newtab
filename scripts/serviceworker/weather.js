self.addEventListener('install', (InstallEvent) => {
    console.log("[ServiceWorker][Weather] being installed");
})

self.addEventListener('activate', (ExtendableEvent) => {
    console.log("[ServiceWorker][Weather] activated");
})