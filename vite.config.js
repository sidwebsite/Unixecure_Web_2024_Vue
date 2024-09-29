import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const apiBaseUrl = 'https://10.13.202.198:7070'
// const getApiUrl = () => {
//   const api175Url = import.meta.env.VITE_API_175_URL
//   const api198Url = import.meta.env.VITE_API_198_URL
//   const api118Url = import.meta.env.VITE_API_118_URL
//   const apiUnixecureUrl = import.meta.env.VITE_API_UNIXECURE_URL
//   const currentUrl = window.location.origin
//   let apiBaseUrl = null
//   switch (currentUrl) {
//       case api175Url:
//           apiBaseUrl = api175Url
//           break;
//       case 'https://10.13.202.198:7071':
//           apiBaseUrl = api198Url
//           break;
//       case api118Url:
//           apiBaseUrl = api118Url
//           break;
//       case 'https://www.unixecure.com':
//               apiBaseUrl = apiUnixecureUrl
//           break;
//       default:
//           break;
//   }
//   return apiBaseUrl
// }

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: apiBaseUrl,
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