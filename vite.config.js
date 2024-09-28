import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: {
      origin: import.meta.env.VITE_API_198_URL,
      methods: ['POST'],
      allowedHeaders: ['Content-Type', 'application/json'], 
    },
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_198_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('Sending Request to the Target:', req.method, options.target + proxyReq.path);
          });

          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('Receiving Response from the Target:', req.method, options.target + req.url);
          });

          proxy.on('error', (err) => {
            console.log('Error Occurred:', err);
          });
        }
      },
    },
  },
  plugins: [
    vue(),
  ],
  base: '/Unixecure_Web_2024_Vue/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})