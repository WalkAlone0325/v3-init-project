import App from './App.vue'
import { setupStore } from '@/stores'
import { setupRouter, setupRouterGuard } from '@/router'

import '@/assets/style/main.css'

function bootstrap() {
  const app = createApp(App)

  // stores
  setupStore(app)

  // router
  setupRouter(app)

  // router guard
  setupRouterGuard()

  // mount
  app.mount('#app')
}

bootstrap()
