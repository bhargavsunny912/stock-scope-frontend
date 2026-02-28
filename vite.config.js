import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      "/yahoo": {
        target: "https://query1.finance.yahoo.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/yahoo/, ""),
      },
      "/api": {
        target: "http://127.0.0.1:8000", // Using explicit IPv4
        changeOrigin: true,
      },
      "/socket.io": {
        target: "http://127.0.0.1:8000", // Using explicit IPv4
        ws: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
})