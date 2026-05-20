// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useWarmupSuggestionsStore } from '../warmupSuggestions'

vi.mock('@/services/workout', () => ({
  fetchWarmupSuggestions: vi.fn(),
  refreshWarmupSuggestions: vi.fn(),
}))

import { fetchWarmupSuggestions, refreshWarmupSuggestions } from '@/services/workout'

const FAKE_SUGGESTIONS = [
  { name: 'Arm circles', description: 'Loosens the shoulder girdle.' },
  { name: 'Hip circles', description: 'Mobilises the hip joints.' },
]

describe('useWarmupSuggestionsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  // ---- Initial state ----
  describe('initial state', () => {
    it('starts with empty suggestions, no error, and not loading', () => {
      const store = useWarmupSuggestionsStore()
      expect(store.suggestions).toEqual([])
      expect(store.loading).toBe(false)
      expect(store.error).toBeNull()
    })
  })

  // ---- reset ----
  describe('reset', () => {
    it('clears suggestions, error, and loading back to initial values', () => {
      const store = useWarmupSuggestionsStore()
      store.suggestions = FAKE_SUGGESTIONS
      store.error = new Error('oops')
      store.loading = true

      store.reset()

      expect(store.suggestions).toEqual([])
      expect(store.error).toBeNull()
      expect(store.loading).toBe(false)
    })
  })

  // ---- fetchSuggestions ----
  describe('fetchSuggestions', () => {
    it('sets suggestions on success', async () => {
      fetchWarmupSuggestions.mockResolvedValue({ suggestions: FAKE_SUGGESTIONS })

      const store = useWarmupSuggestionsStore()
      await store.fetchSuggestions(1)

      expect(fetchWarmupSuggestions).toHaveBeenCalledWith(1)
      expect(store.suggestions).toEqual(FAKE_SUGGESTIONS)
      expect(store.error).toBeNull()
      expect(store.loading).toBe(false)
    })

    it('sets error and leaves suggestions empty on failure', async () => {
      const err = new Error('503')
      fetchWarmupSuggestions.mockRejectedValue(err)

      const store = useWarmupSuggestionsStore()
      await store.fetchSuggestions(1)

      expect(store.error).toBe(err)
      expect(store.suggestions).toEqual([])
      expect(store.loading).toBe(false)
    })

    it('clears a previous error before fetching', async () => {
      const store = useWarmupSuggestionsStore()
      store.error = new Error('previous error')
      fetchWarmupSuggestions.mockResolvedValue({ suggestions: FAKE_SUGGESTIONS })

      await store.fetchSuggestions(1)

      expect(store.error).toBeNull()
    })

    it('sets loading true while fetching and false after', async () => {
      let resolvePromise
      fetchWarmupSuggestions.mockReturnValue(
        new Promise((res) => {
          resolvePromise = res
        }),
      )

      const store = useWarmupSuggestionsStore()
      const fetchPromise = store.fetchSuggestions(1)

      expect(store.loading).toBe(true)
      resolvePromise({ suggestions: FAKE_SUGGESTIONS })
      await fetchPromise
      expect(store.loading).toBe(false)
    })
  })

  // ---- refreshSuggestions ----
  describe('refreshSuggestions', () => {
    it('sets suggestions on success', async () => {
      refreshWarmupSuggestions.mockResolvedValue({ suggestions: FAKE_SUGGESTIONS })

      const store = useWarmupSuggestionsStore()
      await store.refreshSuggestions(1)

      expect(refreshWarmupSuggestions).toHaveBeenCalledWith(1)
      expect(store.suggestions).toEqual(FAKE_SUGGESTIONS)
      expect(store.error).toBeNull()
      expect(store.loading).toBe(false)
    })

    it('sets error on failure', async () => {
      const err = new Error('503')
      refreshWarmupSuggestions.mockRejectedValue(err)

      const store = useWarmupSuggestionsStore()
      await store.refreshSuggestions(1)

      expect(store.error).toBe(err)
      expect(store.loading).toBe(false)
    })

    it('clears a previous error before refreshing', async () => {
      const store = useWarmupSuggestionsStore()
      store.error = new Error('previous error')
      refreshWarmupSuggestions.mockResolvedValue({ suggestions: FAKE_SUGGESTIONS })

      await store.refreshSuggestions(1)

      expect(store.error).toBeNull()
    })
  })
})
