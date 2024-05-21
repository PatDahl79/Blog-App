import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // Ensure proper MIME type handling
    mimeTypes: {
      'application/javascript': ['js']
    },
  },
})


