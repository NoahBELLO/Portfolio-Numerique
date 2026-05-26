import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE_URL est défini dans GitHub Actions → /Portfolio-Numerique/
// En développement local, la valeur par défaut '/' est utilisée
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
})
