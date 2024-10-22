const CACHE_NAME = 'my-cache-v2';  

// Files to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/script.js'
];

// Install Service Worker and Cache Files
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting(); 
});

// Fetch Event to Serve Cached Files
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response; // Serve the cached response if available
            }
            // Clone the request and fetch it from the network
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response; // Return network response if invalid or not a basic response
                    }

                    // Clone the response and cache it
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                }
            );
        })
    );
});

// Activate New Service Worker and Delete Old Caches
self.addEventListener('activate', function(event) {
    console.log('Service Worker has been activated');
    const cacheWhitelist = [CACHE_NAME]; // Keep only the current cache

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName); // Delete old caches
                    }
                })
            );
        })
    );
    return self.clients.claim(); // Ensure that the active service worker takes control of all pages
});
