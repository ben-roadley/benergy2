import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HomeView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/workout/:id',
      name: 'workout',
      component: () => import('@/components/WorkoutSessionView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/workouts/new',
      name: 'workout-create',
      component: () => import('@/components/WorkoutEditorView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/workouts/:id/edit',
      name: 'workout-edit',
      component: () => import('@/components/WorkoutEditorView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/workouts/:id/logs',
      name: 'workout-logs',
      component: () => import('@/components/WorkoutLogsView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/workouts/:id/insights',
      name: 'workout-insights',
      component: () => import('@/components/WorkoutInsightsView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/workouts/start',
      name: 'workout-start',
      component: () => import('@/components/WorkoutSessionsView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/components/ProfileView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/evening-stretches',
      name: 'evening-stretches',
      component: () => import('@/components/EveningStretchesView.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

let sessionChecked = false

router.beforeEach(async (to) => {
  const auth = useAuthStore()

  if (!sessionChecked) {
    await auth.checkSession()
    sessionChecked = true
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'login' }
  }

  if (to.name === 'login' && auth.isAuthenticated) {
    return { name: 'home' }
  }
})

export default router
