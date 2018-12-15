// install service worker to cache weather :
// we cannot fetch weather every time the content gets loaded
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('scripts/serviceworker/weather.js').then(
            (registration) => {
                console.log('[init.js] Weather service worker :: registration succeeded. Scope : ', registration.scope);
            }, 
            (err) => {
                console.log('[init.js] Weather service worker :: registration failed. Error : ', err);
            }
        )
    })
}

// initialize Materialize sidenav
document.addEventListener('DOMContentLoaded', () => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
})