import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root URL on Vercel — keep base '/' for clean asset paths.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
