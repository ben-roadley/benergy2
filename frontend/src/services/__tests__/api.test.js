// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import api from '../api'

describe('api (axios instance)', () => {
  it('allows cookies for API requests', () => {
    expect(api.defaults.withCredentials).toBe(true)
  })

  it('keeps the configured CSRF cookie name', () => {
    expect(api.defaults.xsrfCookieName).toBe('csrftoken')
  })

  it('keeps the configured CSRF header name', () => {
    expect(api.defaults.xsrfHeaderName).toBe('X-CSRFToken')
  })

  it('has a request interceptor for bearer authentication', () => {
    const handlers = api.interceptors.request.handlers.filter(Boolean)
    expect(handlers).toHaveLength(1)
  })
})
