import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  base: mode == 'development' ? '/': '/doctorsbookingapp',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
}))