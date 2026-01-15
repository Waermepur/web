import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web/', // 🔥 WICHTIG für GitHub Pages
  plugins: [react()],
})
