//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v10'; //Changer le nom de version à chaque fois qu'on modifie les fichiers en cache
//Add list of files to cache here.
const FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    'pages/histoire.html',
    'pages/jeux.html',
    'css/bootstrap.css',
    'css/style.css',
    'img/baphomet-cover.jpg',
    'img/bg-accueil-tablette.jpg',
    'img/bg-cabane.jpg',
    'img/bg-foret1.jpg',
    'img/bg-foret2.jpg',
    'img/bg-foret6.jpg',
    'img/bg-foret7.jpg',
    'img/bg-foret8.jpg',
    'img/bg-historique3.jpg',
    'img/bg-historique-section3.jpg',
    'img/bg-jeux.jpg',
    'img/carmen-cover.jpg',
    'img/cubes2.jpg',
    'img/ernest-cover.jpg',
    'img/grotte-et-texte4.svg',
    'img/grotte-mobile1.svg',
    'img/ile-cover.jpg',
    'img/intro1.svg',
    'img/intro1-mobile.svg',
    'img/logo.svg',
    'img/logo-inverse.svg',
    'img/mur3.svg',
    'img/mur4.svg',
    'img/myst-cover.jpg',
    'img/nancy-cover.jpg',
    'img/souris6.svg',
    'img/souris-mobile1.svg',
    'img/submachine-cover.jpg',
    'img/submachine-screenshot2.jpg',
    'img/submachine-screenshot4.jpg',
    'img/submachine-screenshot5.jpg',
    'img/syberia-cover.jpg',
    'js/jquery-3.4.1.min.js',
    'js/main.js',
    'js/install.js',
];


self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
// Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
//Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache',
                        key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
//Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
// Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('/AEC_Front_End/Integration1/PointNClick/offline.html' );
                    });
            })
    );
});
