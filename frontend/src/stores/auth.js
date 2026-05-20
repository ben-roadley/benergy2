import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)

  async function checkSession() {
    try {
      const { data } = await api.get('/api/auth/session/')
      user.value = data.isAuthenticated ? data.user : null
    } catch {
      user.value = null
    }
  }

  async function login(username, password) {
    const { data } = await api.post('/api/auth/login/', { username, password })
    user.value = data.user
  }

  async function logout() {
    await api.post('/api/auth/logout/')
    user.value = null
  }

  return { user, isAuthenticated, checkSession, login, logout }
})
