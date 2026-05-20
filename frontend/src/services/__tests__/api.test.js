// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import api from '../api'

describe('api (axios instance)', () => {
  it('sends cookies with every request (session auth)', () => {
    expect(api.defaults.withCredentials).toBe(true)
  })

  it('reads the Django CSRF cookie name', () => {
    expect(api.defaults.xsrfCookieName).toBe('csrftoken')
  })

  it('sends the Django CSRF header name', () => {
    expect(api.defaults.xsrfHeaderName).toBe('X-CSRFToken')
  })

  it('has no request interceptors that inject an Authorization header', () => {
    // Each registered handler sits in api.interceptors.request.handlers.
    // A clean session-auth client should have none.
    const handlers = api.interceptors.request.handlers.filter(Boolean)
    expect(handlers).toHaveLength(0)
  })
})
