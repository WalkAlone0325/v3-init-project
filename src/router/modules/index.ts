import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/tsx',
    name: 'tsx',
    component: () => import('@/views/tsx-view.vue'),
    meta: {
      title: 'Tsx 测试'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: '关于'
    }
  }
]

export default appRoutes
