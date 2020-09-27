importScripts('/cache-polyfill.js');


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('projeto-front-end').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/css/main.css',
                '/js/main.js',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {

    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function (response) {

            return response || fetch(event.request);

        })

    );

});