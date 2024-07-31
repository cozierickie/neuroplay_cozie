import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/neuroplay_cozie/',
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
