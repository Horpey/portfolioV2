const version = '0.6.18';
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache
        .addAll([
          //CSS Cache
          `/`,
          `/index.html`,
          `/assets/css/bootstrap.min.css`,
          `/assets/css/now-ui-kit.css?v=1.2.0`,
          `/assets/demo/demo.css`,
          `/assets/css/custom-old.css`,
          `/assets/css/custom.css`,
          `/assets/css/texttransform.css`,
          `/assets/js/plugins/magneticmouse/magnetic-mouse.css`,
          //JS Cache
          `/assets/js/core/jquery.min.js`,
          `//cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/1.4.3/jquery.scrollTo.min.js`,
          `/assets/js/core/bootstrap.min.js`,
          `/assets/js/now-ui-kit.js?v=1.2.0`,
          `https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js`,
          `/assets/js/plugins/magneticmouse/paper-core.min.js`,
          `/assets/js/plugins/magneticmouse/simplex-noise.min.js`,
          `/assets/js/plugins/magneticmouse/magnetic-mouse.js`,
          `/assets/js/plugins/magneticmouse/magnetic-mouse.css`
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
