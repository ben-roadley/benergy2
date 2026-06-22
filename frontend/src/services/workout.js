import api from './api'

export async function fetchWorkouts() {
  const { data } = await api.get('/workouts/')
  return data
}

export async function fetchLastWorkoutSession() {
  const { data } = await api.get('/workouts/last-session/')
  return data
}

export async function fetchWorkout(id) {
  const { data } = await api.get(`/workouts/${id}/`)
  return data
}

export async function submitWorkoutResults(payload) {
  const { data } = await api.post('/api/workouts/results/', payload)
  return data
}

export async function createWorkout(payload) {
  const { data } = await api.post('/api/workouts/', payload)
  return data
}

export async function updateWorkout(id, payload) {
  const { data } = await api.put(`/api/workouts/${id}/`, payload)
  return data
}

export async function patchWorkout(id, payload) {
  const { data } = await api.patch(`/api/workouts/${id}/`, payload)
  return data
}

export async function fetchWarmupSuggestions(id) {
  const { data } = await api.get(`/api/workouts/${id}/warmup-suggestions/`)
  return data
}

export async function refreshWarmupSuggestions(id) {
  const { data } = await api.post(`/api/workouts/${id}/warmup-suggestions/`)
  return data
}

export async function fetchWorkoutLogs(id) {
  const { data } = await api.get(`/workouts/${id}/logs/`)
  return data
}

export async function fetchWorkoutVolumeInsights(id) {
  const { data } = await api.get(`/workouts/${id}/insights/volume/`)
  return data
}

export async function searchExerciseDefinitions(query) {
  const { data } = await api.get('/exercise-definitions/', { params: { q: query } })
  return data
}
