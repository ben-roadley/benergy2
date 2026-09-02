import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/api'

export const TOKEN_STORAGE_KEY = 'benergy-access-token'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)
  const token = ref(null)

  async function checkSession() {
    try {
      if (token.value === null) {
        token.value = localStorage.getItem(TOKEN_STORAGE_KEY)
      }

      const { data } = await api.get('/session/', {
          headers: {
            'Authorization': `Bearer ${token.value}`
          }})
      user.value = data.user
    } catch {
      user.value = null
    }
  }

  async function login(username, password) {
    const formData = new FormData();
    formData.append("grant_type", "password"); // or "client_credentials"
    formData.append("username", username);
    formData.append("password", password);
    const { data } = await api.post('/token/', formData)

    token.value = data.access_token
    localStorage.setItem(TOKEN_STORAGE_KEY, token.value)

    const userData = await api.get('/users/me/')
    user.value = userData.data
  }

  async function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem(TOKEN_STORAGE_KEY)
  }

  return { user, isAuthenticated, checkSession, login, logout, token }
})
