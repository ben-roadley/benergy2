// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../auth'
import api from '@/services/api'

vi.mock('@/services/api')

describe('useAuthStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
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

      expect(api.get).toHaveBeenCalledWith('/session/', {
        headers: { Authorization: 'Bearer null' },
      })
      expect(store.user).toEqual({ username: 'ben' })
      expect(store.isAuthenticated).toBe(true)
    })

    it('clears user when session is not authenticated', async () => {
      api.get.mockResolvedValue({
        data: { isAuthenticated: false, user: null },
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
        data: { access_token: 'test-access-token' },
      })
      api.get.mockResolvedValue({
        data: { username: 'ben' },
      })

      const store = useAuthStore()
      await store.login('ben', 'password123')

      expect(api.post).toHaveBeenCalledWith('/token/', expect.any(FormData))
      const formData = api.post.mock.calls[0][1]
      expect(Object.fromEntries(formData.entries())).toEqual({
        grant_type: 'password',
        username: 'ben',
        password: 'password123',
      })
      expect(api.get).toHaveBeenCalledWith('/users/me/')
      expect(localStorage.getItem('benergy-access-token')).toBe('test-access-token')
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
    it('clears user, token, and stored access token', async () => {
      api.post.mockResolvedValue({
        data: { access_token: 'test-access-token' },
      })

      const store = useAuthStore()
      store.user = { username: 'ben' }
      store.token = 'test-access-token'
      localStorage.setItem('benergy-access-token', 'test-access-token')

      await store.logout()

      expect(api.post).not.toHaveBeenCalled()
      expect(store.user).toBeNull()
      expect(store.token).toBeNull()
      expect(localStorage.getItem('benergy-access-token')).toBeNull()
      expect(store.isAuthenticated).toBe(false)
    })
  })
})
