import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProfileStore } from '../profile'
import { useAuthStore } from '../auth'
import api from '@/services/api'

vi.mock('@/services/api')

describe('useProfileStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  // ---- Initial state ----
  describe('initial state', () => {
    it('starts with null profile, options, and error', () => {
      const store = useProfileStore()
      expect(store.profile).toBeNull()
      expect(store.options).toBeNull()
      expect(store.error).toBeNull()
    })

    it('starts with loading false', () => {
      const store = useProfileStore()
      expect(store.loading).toBe(false)
    })
  })

  // ---- fetchProfile ----
  describe('fetchProfile', () => {
    it('sets profile on success', async () => {
      const mockProfile = { display_name: 'Ben', weight_kg: '70.0', goals: [] }
      api.get.mockResolvedValue({ data: mockProfile })

      const store = useProfileStore()
      await store.fetchProfile()

      expect(api.get).toHaveBeenCalledWith('/api/profile/')
      expect(store.profile).toEqual(mockProfile)
      expect(store.loading).toBe(false)
    })

    it('sets error on failure', async () => {
      const err = new Error('Network error')
      api.get.mockRejectedValue(err)

      const store = useProfileStore()
      await store.fetchProfile()

      expect(store.error).toBe(err)
      expect(store.profile).toBeNull()
      expect(store.loading).toBe(false)
    })
  })

  // ---- fetchOptions ----
  describe('fetchOptions', () => {
    it('sets options on success', async () => {
      const mockOptions = { goals: ['weight_loss', 'endurance'], equipment: ['dumbbells'] }
      api.get.mockResolvedValue({ data: mockOptions })

      const store = useProfileStore()
      await store.fetchOptions()

      expect(api.get).toHaveBeenCalledWith('/api/profile/options/')
      expect(store.options).toEqual(mockOptions)
    })
  })

  // ---- saveProfile ----
  describe('saveProfile', () => {
    it('updates profile and authStore.user.display_name on success', async () => {
      const updatedProfile = { display_name: 'Benjamin', weight_kg: '71.0', goals: [] }
      api.patch.mockResolvedValue({ data: updatedProfile })

      const store = useProfileStore()
      const authStore = useAuthStore()
      authStore.user = { username: 'ben', display_name: '' }

      await store.saveProfile({ display_name: 'Benjamin' })

      expect(api.patch).toHaveBeenCalledWith('/api/profile/', { display_name: 'Benjamin' })
      expect(store.profile).toEqual(updatedProfile)
      expect(authStore.user.display_name).toBe('Benjamin')
      expect(store.loading).toBe(false)
    })

    it('sets error and rethrows on failure', async () => {
      const err = new Error('Server error')
      api.patch.mockRejectedValue(err)

      const store = useProfileStore()
      await expect(store.saveProfile({})).rejects.toBe(err)
      expect(store.error).toBe(err)
      expect(store.loading).toBe(false)
    })
  })

  // ---- clearProfile ----
  describe('clearProfile', () => {
    it('resets profile and sets authStore.user.display_name to empty string', async () => {
      const clearedProfile = { display_name: '', weight_kg: null, goals: [] }
      api.post.mockResolvedValue({ data: clearedProfile })

      const store = useProfileStore()
      store.profile = { display_name: 'Benjamin', weight_kg: '71.0', goals: [] }
      const authStore = useAuthStore()
      authStore.user = { username: 'ben', display_name: 'Benjamin' }

      await store.clearProfile()

      expect(api.post).toHaveBeenCalledWith('/api/profile/clear/')
      expect(store.profile).toEqual(clearedProfile)
      expect(authStore.user.display_name).toBe('')
      expect(store.loading).toBe(false)
    })

    it('sets error and rethrows on failure', async () => {
      const err = new Error('Server error')
      api.post.mockRejectedValue(err)

      const store = useProfileStore()
      await expect(store.clearProfile()).rejects.toBe(err)
      expect(store.error).toBe(err)
      expect(store.loading).toBe(false)
    })
  })
})
