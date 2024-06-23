import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, 
    strictPort: true,
    host: true,
    origin: process.env.ORIGIN || "http://localhost:5173", 
  },
  preview: {
    port: process.env.PREVIEW_PORT || 5173, 
    strictPort: true,
  },
  define: {
    "process.env.BASE_URL": JSON.stringify(process.env.BASE_URL),
  },
});