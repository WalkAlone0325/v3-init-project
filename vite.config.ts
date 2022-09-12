import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    vueJsx(),
    AutoImport({
      // 自动导入相关 Api
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: []
    }),
    // 自动导入 src/components 下的所有组件，并自动解析 UI 库的组件，提供 TS 类型提示
    Components({
      dirs: ['src/components'],
      resolvers: []
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
