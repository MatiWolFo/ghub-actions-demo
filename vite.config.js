import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // raiz o root del proyecto
  base: "https://matiwolfo.github.io/ghub-actions-demo/",
  plugins: [react()],
})
