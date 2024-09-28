import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: {
      origin: 'https://10.13.202.198:7070',
      methods: ['GET', 'POST', 'PUT'],
      allowedHeaders: ['Content-Type', 'application/json'], 
    },
    proxy: {
      '/api': {
        target: 'https://10.13.202.198:7070',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
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
