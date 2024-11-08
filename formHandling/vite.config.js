import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will allow Vite to listen on all addresses, including your local IP.
    port: 5175  // Optional: You can specify the port if needed (default is 5174).
  }
})
