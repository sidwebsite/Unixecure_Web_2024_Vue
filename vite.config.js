import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    cors:  {
      origin: '*', 
      methods: ['GET', 'POST', 'PUT', 'DELETE'], 
      allowedHeaders: ['Content-Type', 'Authorization'], 
      credentials: true,
    },
    proxy: {
      '/api': {
        target: 'https://10.13.202.198:7070/api/contact_us/test',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/175': {
        target: 'https://10.13.202.175:8080',
        changeOrigin: true,
        bypass(req, res, options) {
          const proxyUrl = options.target + options.rewrite(req.url)
          res.setHeader('x-req-proxtUrl', proxyUrl)
        },
        rewrite: (path) => path.replace(/^\/175/, '')
      },
      '/198': {
        target: 'https://10.13.202.198:7070',
        changeOrigin: true,
        bypass(req, res, options) {
          const proxyUrl = options.target + options.rewrite(req.url)
          res.setHeader('x-req-proxtUrl', proxyUrl)
        },
        rewrite: (path) => path.replace(/^\/198/, '')
      },
      '/118': {
        target: 'https://118.163.244.11:8080',
        changeOrigin: true,
        bypass(req, res, options) {
          const proxyUrl = options.target + options.rewrite(req.url)
          res.setHeader('x-req-proxtUrl', proxyUrl)
        },
        rewrite: (path) => path.replace(/^\/118/, '')
      },
      '/unixecure': {
        target: 'https://211.72.80.147:8080',
        changeOrigin: true,
        bypass(req, res, options) {
          const proxyUrl = options.target + options.rewrite(req.url)
          res.setHeader('x-req-proxtUrl', proxyUrl)
        },
        rewrite: (path) => path.replace(/^\/unixecure/, '')
      },
    },
  },
  base: '/Unixecure_Web_2024_Vue/',
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
