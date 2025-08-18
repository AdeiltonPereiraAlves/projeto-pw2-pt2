import { generateSW } from 'workbox-build';

// Gera o service-worker baseado nos arquivos do build do Vite
generateSW({
  globDirectory: 'dist',
  globPatterns: [
    '**/*.{js,css,html,svg,png,woff,woff2}'
  ],
  swDest: 'dist/service-worker.js',
  runtimeCaching: [
    {
      urlPattern: /\/produtos/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 }
      }
    },
    {
      urlPattern: /.*/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'assets-cache',
        expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 60 * 60 }
      }
    }
  ]
}).then(({ count, size }) => {
  console.log(`SW gerado, ${count} arquivos, ${size} bytes`);
});
