// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import api from '../api'

describe('api (axios instance)', () => {
  it('does not use cookie-based authentication or CSRF defaults', () => {
    expect(api.defaults.withCredentials).not.toBe(true)
    expect(api.defaults.xsrfCookieName).not.toBe('csrftoken')
    expect(api.defaults.xsrfHeaderName).not.toBe('X-CSRFToken')
  })

  it('has a request interceptor for bearer authentication', () => {
    const handlers = api.interceptors.request.handlers.filter(Boolean)
    expect(handlers).toHaveLength(1)
  })
})
