import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const srcDir = fileURLToPath(new URL('./src/', import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const lighthouseBefore = env.VITE_LIGHTHOUSE_BEFORE === '1'

  return {
    plugins: [vue()],
    resolve: {
      alias: [
        ...(lighthouseBefore
          ? [
              {
                find: /^@\/router\/index\.js$/,
                replacement: fileURLToPath(new URL('./src/router/index.lighthouse-before.js', import.meta.url))
              }
            ]
          : []),
        { find: /^@\//, replacement: srcDir }
      ]
    },
    build: {
      rollupOptions: {
        output: lighthouseBefore
          ? {}
          : {
              manualChunks(id) {
                if (id.includes('node_modules/vue-router')) return 'vue-router'
                if (id.includes('node_modules/pinia')) return 'pinia'
              }
            }
      }
    }
  }
})
