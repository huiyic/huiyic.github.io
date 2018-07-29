var CACHE = 'huiyi-site';
var urlsToCache = [
  'https://huiyichia.com/assets/css/main.css',
  'https://huiyichia.com/assets/css/noscript.css'
];


// On install, cache some resources.
self.addEventListener('install', function(evt) {
      console.log('The service worker is being installed.');    
    // Perform install steps
  evt.waitUntil(precache());
});
    // On fetch, use cache only strategy.
self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
  evt.respondWith(fromCache(evt.request));
});

// Open a cache and use `addAll()` with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.
function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(urlsToCache);
  });
}
    
// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.
function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
