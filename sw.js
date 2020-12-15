const VERSION = 'v1'

//como el this pero de los service workers
self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  //extraemos la petición
  const request = event.request

  //solo las peticiones get
  if(request.method !== 'GET') {
    return
  }

  //buscar en cache
  event.respondWith(cachedResponse(request))

  //actualizar el cache
  event.waitUntil(updateCache(request))
})

async function precache() {
  const cache = await caches.open(VERSION)
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/videoaleph.mp4',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request)
  return response || fetch(request)
}

async function updateCache(request) {
  //abrimos la cache
  const cache = await caches.open(VERSION)
  //hacemos el fetch normal
  const response = await fetch(request)
  //sustituimos en cache la respuesta actualizada
  return cache.put(request, response)
}