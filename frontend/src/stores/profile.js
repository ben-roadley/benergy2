import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import api from '@/services/api'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref(null)
  const options = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function fetchProfile() {
    loading.value = true
    error.value = null
    try {
      const { data } = await api.get('/profile/')
      profile.value = data
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  async function fetchOptions() {
    const { data } = await api.get('/profile/options/')
    options.value = data
  }

  async function saveProfile(formData) {
    loading.value = true
    error.value = null
    try {
      const { data } = await api.patch('/profile/', formData)
      profile.value = data
      const authStore = useAuthStore()
      authStore.user.display_name = data.display_name
    } catch (e) {
      error.value = e
      throw e
    } finally {
      loading.value = false
    }
  }

  async function clearProfile() {
    loading.value = true
    error.value = null
    try {
      const { data } = await api.post('/profile/clear/')
      profile.value = data
      const authStore = useAuthStore()
      authStore.user.display_name = ''
    } catch (e) {
      error.value = e
      throw e
    } finally {
      loading.value = false
    }
  }

  return { profile, options, loading, error, fetchProfile, fetchOptions, saveProfile, clearProfile }
})
