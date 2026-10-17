import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const pageEntries = [
  'index.html',
  'about.html',
  'services.html',
  'work.html',
  'case-studies.html',
  'experience.html',
  'team.html',
  'contact.html',
  'social.html',
]

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pageEntries.map((page) => [
          page.replace('.html', ''),
          fileURLToPath(new URL(page, import.meta.url)),
        ]),
      ),
    },
  },
})
