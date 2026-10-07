import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0];
          // Ensure all client-side routes rewrite directly to SPA index.html
          if (['/services', '/results', '/about', '/pricing', '/contact'].includes(url)) {
            req.url = '/index.html';
          }
          next();
        });
      }
    }
  ],
  server: {
    host: true,
    port: 3000,
    open: false
  }
});
