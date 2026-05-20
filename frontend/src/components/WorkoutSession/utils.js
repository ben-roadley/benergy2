export function formatTime(seconds) {
  const m = Math.floor(Math.abs(seconds) / 60)
  const s = Math.abs(seconds) % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}
