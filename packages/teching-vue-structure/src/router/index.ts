import MainLayout from '@/components/layouts/MainLayout.vue'
import { authRoutes } from '@/modules/authentication/routes'
import DashboardView from '@/modules/dashboard/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-layout',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashboardView
        }
      ]
    },
    ...authRoutes
  ]
})

export default router
