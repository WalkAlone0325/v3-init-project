import type { RouteRecordRaw } from 'vue-router'
import appRoutes from './modules'
import PageLayout from '@/layout/PageLayout.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-view.vue')
  },
  {
    path: '/',
    name: 'root',
    component: PageLayout,
    children: appRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found.vue')
  }
]

export default constantRoutes
