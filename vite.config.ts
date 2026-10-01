import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const host = env.HOST || '0.0.0.0'
  const port = Number(env.PORT || 5173)

  return {
    plugins: [react()],
    server: { host, port },
    preview: { host, port },
  }
})
