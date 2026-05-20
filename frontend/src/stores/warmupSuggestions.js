import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchWarmupSuggestions, refreshWarmupSuggestions } from '@/services/workout'

export const useWarmupSuggestionsStore = defineStore('warmupSuggestions', () => {
  const suggestions = ref([])
  const loading = ref(false)
  const error = ref(null)

  function reset() {
    suggestions.value = []
    loading.value = false
    error.value = null
  }

  async function fetchSuggestions(workoutId) {
    loading.value = true
    error.value = null
    try {
      const data = await fetchWarmupSuggestions(workoutId)
      suggestions.value = data.suggestions
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  async function refreshSuggestions(workoutId) {
    loading.value = true
    error.value = null
    try {
      const data = await refreshWarmupSuggestions(workoutId)
      suggestions.value = data.suggestions
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { suggestions, loading, error, reset, fetchSuggestions, refreshSuggestions }
})
