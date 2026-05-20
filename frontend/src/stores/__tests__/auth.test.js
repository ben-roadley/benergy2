import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../auth'
import api from '@/services/api'

vi.mock('@/services/api')

describe('useAuthStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  // ---- Initial state ----
  describe('initial state', () => {
    it('starts with no user', () => {
      const store = useAuthStore()
      expect(store.user).toBeNull()
    })

    it('isAuthenticated is false when no user', () => {
      const store = useAuthStore()
      expect(store.isAuthenticated).toBe(false)
    })
  })

  // ---- checkSession ----
  describe('checkSession', () => {
    it('sets user when session is authenticated', async () => {
      api.get.mockResolvedValue({
        data: { isAuthenticated: true, user: { username: 'ben' } },
      })

      const store = useAuthStore()
      await store.checkSession()

      expect(api.get).toHaveBeenCalledWith('/api/auth/session/')
      expect(store.user).toEqual({ username: 'ben' })
      expect(store.isAuthenticated).toBe(true)
    })

    it('clears user when session is not authenticated', async () => {
      api.get.mockResolvedValue({
        data: { isAuthenticated: false },
      })

      const store = useAuthStore()
      store.user = { username: 'ben' }
      await store.checkSession()

      expect(store.user).toBeNull()
      expect(store.isAuthenticated).toBe(false)
    })

    it('clears user on network error', async () => {
      api.get.mockRejectedValue(new Error('Network Error'))

      const store = useAuthStore()
      store.user = { username: 'ben' }
      await store.checkSession()

      expect(store.user).toBeNull()
    })
  })

  // ---- login ----
  describe('login', () => {
    it('sets user on successful login', async () => {
      api.post.mockResolvedValue({
        data: { user: { username: 'ben' } },
      })

      const store = useAuthStore()
      await store.login('ben', 'password123')

      expect(api.post).toHaveBeenCalledWith('/api/auth/login/', {
        username: 'ben',
        password: 'password123',
      })
      expect(store.user).toEqual({ username: 'ben' })
      expect(store.isAuthenticated).toBe(true)
    })

    it('throws on failed login', async () => {
      api.post.mockRejectedValue(new Error('401'))

      const store = useAuthStore()
      await expect(store.login('ben', 'wrong')).rejects.toThrow('401')
      expect(store.user).toBeNull()
    })
  })

  // ---- logout ----
  describe('logout', () => {
    it('clears user on logout', async () => {
      api.post.mockResolvedValue({})

      const store = useAuthStore()
      store.user = { username: 'ben' }

      await store.logout()

      expect(api.post).toHaveBeenCalledWith('/api/auth/logout/')
      expect(store.user).toBeNull()
      expect(store.isAuthenticated).toBe(false)
    })
  })
})
