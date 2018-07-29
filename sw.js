var CACHE_NAME = 'huiyi-site';
var urlsToCache = [
  'https://huiyichia.com/assets/css/main.css',
  'https://huiyichia.com/assets/css/noscript.css'
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});