const CACHE_NAME = "my-cache-v1"

const CACHE_ASSETS = [
    "/",
    "/revisaoPWA/about.html",
    "/revisaoPWA/app.js",
    "/revisaoPWA/index.html",
    "/revisaoPWA/manifest.json",
    "/revisaoPWA/icons/icon-192x192.png",
    "/revisaoPWA/offline.html"
]


self.addEventListener("install", (event) => { //self -> Objeto que representa nosso service worker
    console.log("Service worker instalado com sucesso!!");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll(CACHE_ASSETS);
        }) // "cache" pode ser qualquer nome porque é um parâmetro
    );


});


self.addEventListener("fetch", (event) => { //primeiro parametro é o nome do método e o segundo é o evento
    event.respondWith(   //Intercepta a chamada para o backend e retorna o que tiver no evento
        caches.match(event.request).then((response) => { //Match faz uma comparação com o que existe no cache
            return response || fetch(event.request);
        }).catch(() => {
            return caches.match("/offline.html");
        })
    )
});


