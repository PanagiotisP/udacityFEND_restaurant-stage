const staticCacheName = 'restaurant-app-static';
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            cache.addAll([
                './',
                './swRegister.js',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'index.html',
                'restaurant.html',
                'css/styles.css',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'data/restaurants.json'
            ]);
        }).then(self.skipWaiting())
    );
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cache) {
                    if (cache !== staticCacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(function (response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
});