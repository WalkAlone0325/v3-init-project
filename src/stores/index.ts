import type { App } from 'vue'

// 导出模块下的 store
// 可以使用 import.meta.glob
export { useCounterStore } from './modules/counter'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}
