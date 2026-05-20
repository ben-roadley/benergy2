import { describe, it, expect } from 'vitest'
import { formatTime } from '../utils'

describe('formatTime', () => {
  it('formats zero seconds', () => {
    expect(formatTime(0)).toBe('0:00')
  })

  it('formats seconds under a minute', () => {
    expect(formatTime(45)).toBe('0:45')
  })

  it('formats exact minutes', () => {
    expect(formatTime(120)).toBe('2:00')
  })

  it('formats minutes and seconds', () => {
    expect(formatTime(93)).toBe('1:33')
  })

  it('pads single-digit seconds', () => {
    expect(formatTime(61)).toBe('1:01')
  })

  it('handles negative values', () => {
    expect(formatTime(-90)).toBe('1:30')
  })
})
