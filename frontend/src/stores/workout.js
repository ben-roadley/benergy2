import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchWorkout, submitWorkoutResults } from '@/services/workout'

export const PHASE = {
  WARMUP: 'warmup',
  EXERCISE: 'exercise',
  LOG_REPS: 'logReps',
  REST: 'rest',
  COMPLETE: 'complete',
}

const STORAGE_KEY = 'benergy-active-workout'

export const useWorkoutStore = defineStore('workout', () => {
  const workout = ref(null)
  const phase = ref(PHASE.WARMUP)
  const currentStepIndex = ref(0)
  const results = ref([]) // { exerciseName, exerciseOrder, setOrder, totalSets, targetReps, targetWeight, actualReps, actualWeight }
  const warmupElapsed = ref(0)
  const restRemaining = ref(0)

  /**
   * Flatten a workout's exercises/sets into a linear sequence of steps.
   * @param {object|null} w
   * @returns {Array<object>}
   */
  function flattenWorkout(w) {
    if (!w || !w.exercises) return []
    const steps = []
    for (const exercise of w.exercises) {
      for (const set of exercise.sets_of_reps) {
        const step = {
          exerciseName: exercise.exercise_definition?.name ?? exercise.exercise_name,
          exerciseOrder: exercise.order,
          setOrder: set.order,
          totalSets: exercise.sets_of_reps.length,
          restTimeAfter: exercise.rest_time_after,
          // canonical names
          targetReps: set.nb_reps,
          targetWeight: set.weight,
        }
        if (set.id != null) step.setId = set.id
        steps.push(step)
      }
    }
    return steps
  }

  // Flatten all sets into a linear sequence of steps
  const allSteps = computed(() => flattenWorkout(workout.value))

  const currentStep = computed(() => allSteps.value[currentStepIndex.value])
  const isLastStep = computed(() => currentStepIndex.value >= allSteps.value.length - 1)
  const isActive = computed(() => workout.value !== null && phase.value !== PHASE.COMPLETE)

  const groupedResults = computed(() => {
    const groups = {}
    for (const r of results.value) {
      if (!groups[r.exerciseName]) groups[r.exerciseName] = []
      groups[r.exerciseName].push(r)
    }
    return groups
  })

  // Persistence
  /**
   * Persist current store state to localStorage.
   * @returns {void}
   */
  function save() {
    const state = {
      workout: workout.value,
      phase: phase.value,
      currentStepIndex: currentStepIndex.value,
      results: results.value,
      warmupElapsed: warmupElapsed.value,
      restRemaining: restRemaining.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }

  /**
   * Load saved store state from localStorage.
   * @returns {boolean} True if state was loaded, false if nothing or on error.
   */
  function loadSaved() {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    try {
      const state = JSON.parse(raw)
      workout.value = state.workout
      phase.value = state.phase
      currentStepIndex.value = state.currentStepIndex
      results.value = state.results
      warmupElapsed.value = state.warmupElapsed ?? 0
      restRemaining.value = state.restRemaining ?? 0
      return true
    } catch {
      localStorage.removeItem(STORAGE_KEY)
      return false
    }
  }

  /**
   * Remove persisted store state from localStorage.
   * @returns {void}
   */
  function clearSaved() {
    localStorage.removeItem(STORAGE_KEY)
  }

  // Actions
  /**
   * Fetch a workout and initialise the session state.
   * @param {number} workoutId - ID of the workout to fetch.
   * @returns {Promise<object>} Resolves with the fetched workout.
   * @throws {Error} Rethrows errors from `fetchWorkout` so callers can handle them.
   */
  async function startWorkout(workoutId) {
    try {
      workout.value = await fetchWorkout(workoutId)
      phase.value = PHASE.WARMUP
      currentStepIndex.value = 0
      results.value = []
      warmupElapsed.value = 0
      restRemaining.value = 0
      save()
      return workout.value
    } catch (err) {
      // Surface errors to caller so UI can react
      throw err
    }
  }

  /**
   * End the warmup phase and enter exercise phase.
   * @returns {void}
   */
  function endWarmup() {
    phase.value = PHASE.EXERCISE
    save()
  }

  /**
   * Enter the logging phase where the user records actual reps.
   * @returns {void}
   */
  function enterLogReps() {
    phase.value = PHASE.LOG_REPS
    save()
  }

  /**
   * Record actual reps/weight for the current step and move to the next phase.
   * - If this was the last step, marks the session complete and submits results.
   * - Otherwise enters the rest phase and initializes rest timer.
   * @param {number} actualReps - Number of reps performed.
   * @param {number|null} actualWeight - Weight used (kg) or null.
   * @returns {void}
   */
  function confirmReps(actualReps, actualWeight) {
    results.value.push({
      ...currentStep.value,
      actualReps,
      actualWeight,
    })

    if (isLastStep.value) {
      phase.value = PHASE.COMPLETE
      clearSaved()
      // fire-and-forget; payload is enqueued to localStorage on repeated failure
      sendResults().catch(() => {})
    } else {
    restRemaining.value = currentStep.value.restTimeAfter
      phase.value = PHASE.REST
      save()
    }
  }

  /**
   * Advance to the next step index and set phase to exercise.
   * @returns {void}
   */
  function advanceToNextStep() {
    currentStepIndex.value++
    phase.value = PHASE.EXERCISE
    save()
  }

  /**
   * Abandon the current session and clear in-memory and persisted state.
   * @returns {void}
   */
  function abandon() {
    workout.value = null
    phase.value = PHASE.WARMUP
    currentStepIndex.value = 0
    results.value = []
    clearSaved()
  }

  /**
   * Submit collected workout results to the backend with retry and local enqueue on
   * repeated failure.
   * @returns {Promise<any>} Resolves with backend response, or rejects after retries.
   */
  async function sendResults() {
    const payload = {
      workout_id: workout.value.id,
      workout_name: workout.value.name,
      results: results.value.map((r) => ({
        set_of_reps: r.setId,
        nb_reps_target: r.targetReps,
        nb_reps_actual: r.actualReps,
        weight_actual: r.actualWeight ?? null,
        weight_target: r.targetWeight ?? null,
      })),
    }
    const QUEUE_KEY = 'benergy-pending-results'
    const maxAttempts = 3
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    let attempt = 0
    while (attempt < maxAttempts) {
      try {
        const resp = await submitWorkoutResults(payload)
        return resp
      } catch (err) {
        attempt += 1
        if (attempt >= maxAttempts) {
          // enqueue payload for later retry
          try {
            const raw = localStorage.getItem(QUEUE_KEY)
            const queue = raw ? JSON.parse(raw) : []
            queue.push({ payload, ts: Date.now() })
            localStorage.setItem(QUEUE_KEY, JSON.stringify(queue))
          } catch (e) {
            // ignore storage errors
          }
          // rethrow so callers can react
          throw err
        }
        // backoff before next attempt
        await delay(500 * attempt)
      }
    }
  }

  return {
    // State
    workout,
    phase,
    currentStepIndex,
    results,
    warmupElapsed,
    restRemaining,
    // Computed
    allSteps,
    currentStep,
    isLastStep,
    isActive,
    groupedResults,
    // Actions
    startWorkout,
    endWarmup,
    enterLogReps,
    confirmReps,
    advanceToNextStep,
    abandon,
    loadSaved,
    save,
    clearSaved,
  }
})
