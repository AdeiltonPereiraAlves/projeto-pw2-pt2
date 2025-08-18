// service-worker.js
const CACHE_NAME = "minha-loja-cache-v1";
const API_URL = "http://localhost:3333/produtos"; // URL da sua API

// Lista de arquivos estáticos que você quer pré-cachear
const STATIC_ASSETS = [
  "/",
  "/index.html",
  
  "/index.css",
  // Adicione aqui os assets do Tailwind gerados em /assets se necessário
];

// Install: pré-cacheia arquivos estáticos
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Instalando...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: limpa caches antigos
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Ativando...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: intercepta requisições
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignora arquivos do Vite e React Refresh
  if (
    request.url.includes("@vite") ||
    request.url.includes("@react-refresh") ||
    request.url.endsWith(".ts") ||
    request.url.endsWith(".tsx")
  ) {
    return;
  }

  // Cache-first para API de produtos
  if (request.url.includes("/produtos")) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        try {
          const networkResponse = await fetch(request);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch {
          const cachedResponse = await cache.match(request);
          return (
            cachedResponse ||
            new Response("[]", { headers: { "Content-Type": "application/json" } })
          );
        }
      })
    );
    return;
  }

  // Cache-first para arquivos estáticos com fallback
  event.respondWith(
    caches.match(request).then(async (cached) => {
      if (cached) return cached;

      try {
        const response = await fetch(request);
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, response.clone());
        return response;
      } catch {
        // fallback para HTML
        if (request.destination === "document") {
          return new Response(
            "<h1>Offline</h1><p>Conecte-se à internet para ver o conteúdo.</p>",
            { headers: { "Content-Type": "text/html" } }
          );
        }
        return new Response(null, { status: 503, statusText: "Service Unavailable" });
      }
    })
  );
});
