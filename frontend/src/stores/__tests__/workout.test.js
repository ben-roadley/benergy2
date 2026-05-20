// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useWorkoutStore, PHASE } from '../workout'

// Mock the workout service
vi.mock('@/services/workout', () => ({
  fetchWorkout: vi.fn(),
  submitWorkoutResults: vi.fn(),
}))

import { fetchWorkout, submitWorkoutResults } from '@/services/workout'

// Helper: a realistic workout fixture
function makeWorkout({ restTime = 60 } = {}) {
  return {
    id: 1,
    name: 'Full Body',
    exercises: [
      {
        exercise_name: 'Push-ups',
        order: 1,
        rest_time_after: restTime,
        sets_of_reps: [
          { order: 1, nb_reps: 10, weight: null },
          { order: 2, nb_reps: 10, weight: null },
        ],
      },
      {
        exercise_name: 'Squats',
        order: 2,
        rest_time_after: restTime,
        sets_of_reps: [{ order: 1, nb_reps: 15, weight: 60 }],
      },
    ],
  }
}

describe('useWorkoutStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    vi.clearAllMocks()
  })

  // ---- Initial state ----
  describe('initial state', () => {
    it('starts with no workout and warmup phase', () => {
      const store = useWorkoutStore()
      expect(store.workout).toBeNull()
      expect(store.phase).toBe(PHASE.WARMUP)
      expect(store.currentStepIndex).toBe(0)
      expect(store.results).toEqual([])
    })

    it('isActive is false when no workout loaded', () => {
      const store = useWorkoutStore()
      expect(store.isActive).toBe(false)
    })

    it('allSteps is empty when no workout loaded', () => {
      const store = useWorkoutStore()
      expect(store.allSteps).toEqual([])
    })

    it('currentStep is undefined when no workout loaded', () => {
      const store = useWorkoutStore()
      expect(store.currentStep).toBeUndefined()
    })
  })

  // ---- Computed properties ----
  describe('computed properties', () => {
    it('allSteps flattens exercises into linear steps', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()

      expect(store.allSteps).toHaveLength(3)
      expect(store.allSteps[0]).toEqual({
        exerciseName: 'Push-ups',
        exerciseOrder: 1,
        restTimeAfter: 60,
        setOrder: 1,
        totalSets: 2,
        targetReps: 10,
        targetWeight: null,
      })
      expect(store.allSteps[2].exerciseName).toBe('Squats')
      expect(store.allSteps[2].targetWeight).toBe(60)
    })

    it('currentStep returns the step at currentStepIndex', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 1

      expect(store.currentStep.exerciseName).toBe('Push-ups')
      expect(store.currentStep.setOrder).toBe(2)
    })

    it('isLastStep is false when not on the last step', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 0

      expect(store.isLastStep).toBe(false)
    })

    it('isLastStep is true on the final step', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2

      expect(store.isLastStep).toBe(true)
    })

    it('isActive is true when workout loaded and not complete', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.phase = PHASE.EXERCISE

      expect(store.isActive).toBe(true)
    })

    it('isActive is false when phase is complete', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.phase = PHASE.COMPLETE

      expect(store.isActive).toBe(false)
    })

    it('groupedResults groups results by exercise name', () => {
      const store = useWorkoutStore()
      store.results = [
        { exerciseName: 'Push-ups', setOrder: 1, actualReps: 10 },
        { exerciseName: 'Push-ups', setOrder: 2, actualReps: 8 },
        { exerciseName: 'Squats', setOrder: 1, actualReps: 15 },
      ]

      expect(Object.keys(store.groupedResults)).toEqual(['Push-ups', 'Squats'])
      expect(store.groupedResults['Push-ups']).toHaveLength(2)
      expect(store.groupedResults['Squats']).toHaveLength(1)
    })
  })

  // ---- Actions ----
  describe('startWorkout', () => {
    it('fetches the workout and initialises state', async () => {
      const workout = makeWorkout()
      fetchWorkout.mockResolvedValue(workout)

      const store = useWorkoutStore()
      await store.startWorkout(1)

      expect(fetchWorkout).toHaveBeenCalledWith(1)
      expect(store.workout).toEqual(workout)
      expect(store.phase).toBe(PHASE.WARMUP)
      expect(store.currentStepIndex).toBe(0)
      expect(store.results).toEqual([])
    })

    it('persists state to localStorage', async () => {
      fetchWorkout.mockResolvedValue(makeWorkout())

      const store = useWorkoutStore()
      await store.startWorkout(1)

      const saved = JSON.parse(localStorage.getItem('benergy-active-workout'))
      expect(saved.workout.name).toBe('Full Body')
      expect(saved.phase).toBe(PHASE.WARMUP)
    })
  })

  describe('endWarmup', () => {
    it('transitions to exercise phase', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.phase = PHASE.WARMUP

      store.endWarmup()

      expect(store.phase).toBe(PHASE.EXERCISE)
    })
  })

  describe('enterLogReps', () => {
    it('transitions to log reps phase', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.phase = PHASE.EXERCISE

      store.enterLogReps()

      expect(store.phase).toBe(PHASE.LOG_REPS)
    })
  })

  describe('confirmReps', () => {
    it('records reps and transitions to rest when not last step', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout({ restTime: 45 })
      store.currentStepIndex = 0
      store.phase = PHASE.LOG_REPS

      store.confirmReps(8, null)

      expect(store.results).toHaveLength(1)
      expect(store.results[0].actualReps).toBe(8)
      expect(store.results[0].actualWeight).toBeNull()
      expect(store.results[0].exerciseName).toBe('Push-ups')
      expect(store.phase).toBe(PHASE.REST)
      expect(store.restRemaining).toBe(45)
    })

    it('transitions to complete on last step and submits results', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2 // last step (Squats set 1)
      store.phase = PHASE.LOG_REPS
      submitWorkoutResults.mockResolvedValue({})

      store.confirmReps(15, 65)

      expect(store.phase).toBe(PHASE.COMPLETE)
      expect(submitWorkoutResults).toHaveBeenCalled()
    })

    it('records actualWeight in results', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2 // Squats with weight=60
      store.phase = PHASE.LOG_REPS

      store.confirmReps(15, 65)

      expect(store.results[0].actualWeight).toBe(65)
      expect(store.results[0].targetWeight).toBe(60)
    })
  })

  describe('advanceToNextStep', () => {
    it('increments step index and sets exercise phase', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 0
      store.phase = PHASE.REST

      store.advanceToNextStep()

      expect(store.currentStepIndex).toBe(1)
      expect(store.phase).toBe(PHASE.EXERCISE)
    })
  })

  describe('abandon', () => {
    it('resets all state and clears localStorage', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.phase = PHASE.EXERCISE
      store.currentStepIndex = 2
      store.results = [{ exerciseName: 'Push-ups', actualReps: 10 }]
      store.save()

      store.abandon()

      expect(store.workout).toBeNull()
      expect(store.phase).toBe(PHASE.WARMUP)
      expect(store.currentStepIndex).toBe(0)
      expect(store.results).toEqual([])
      expect(localStorage.getItem('benergy-active-workout')).toBeNull()
    })
  })

  // ---- Persistence ----
  describe('persistence', () => {
    it('save and loadSaved round-trip state', () => {
      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.phase = PHASE.EXERCISE
      store.currentStepIndex = 1
      store.warmupElapsed = 42
      store.restRemaining = 30
      store.save()

      // Create a fresh store from a new pinia
      setActivePinia(createPinia())
      const store2 = useWorkoutStore()
      const loaded = store2.loadSaved()

      expect(loaded).toBe(true)
      expect(store2.workout.name).toBe('Full Body')
      expect(store2.phase).toBe(PHASE.EXERCISE)
      expect(store2.currentStepIndex).toBe(1)
      expect(store2.warmupElapsed).toBe(42)
      expect(store2.restRemaining).toBe(30)
    })

    it('loadSaved returns false when nothing is stored', () => {
      const store = useWorkoutStore()
      expect(store.loadSaved()).toBe(false)
    })

    it('loadSaved handles corrupted data gracefully', () => {
      localStorage.setItem('benergy-active-workout', 'not-valid-json')

      const store = useWorkoutStore()
      expect(store.loadSaved()).toBe(false)
      expect(localStorage.getItem('benergy-active-workout')).toBeNull()
    })

    it('clearSaved removes the localStorage key', () => {
      localStorage.setItem('benergy-active-workout', '{}')

      const store = useWorkoutStore()
      store.clearSaved()

      expect(localStorage.getItem('benergy-active-workout')).toBeNull()
    })
  })

  // ---- confirmReps clears localStorage on completion ----
  describe('confirmReps — session completion', () => {
    it('clears localStorage when the last step is confirmed', () => {
      localStorage.setItem('benergy-active-workout', '{"phase":"logReps"}')
      submitWorkoutResults.mockResolvedValue({})

      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2
      store.phase = PHASE.LOG_REPS

      store.confirmReps(15, null)

      expect(localStorage.getItem('benergy-active-workout')).toBeNull()
    })
  })

  // ---- allSteps edge cases ----
  describe('allSteps — edge cases', () => {
    it('returns empty array for workout with no exercises', () => {
      const store = useWorkoutStore()
      store.workout = { id: 1, name: 'Empty', rest_time: 60, exercises: [] }
      expect(store.allSteps).toEqual([])
    })

    it('returns empty array for exercise with no sets', () => {
      const store = useWorkoutStore()
      store.workout = {
        id: 1,
        name: 'No sets',
        rest_time: 60,
        exercises: [{ exercise_name: 'Pull-ups', order: 1, sets_of_reps: [] }],
      }
      expect(store.allSteps).toEqual([])
    })
  })

  // ---- sendResults ----
  describe('sendResults', () => {
    // sendResults is called fire-and-forget from confirmReps on the last step.
    // We trigger it by calling confirmReps on the last step and then awaiting
    // the underlying submitWorkoutResults mock.

    it('submits results on first attempt', async () => {
      submitWorkoutResults.mockResolvedValue({ ok: true })

      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2
      store.results = []

      store.confirmReps(15, 60)

      // Flush micro-task queue so the async sendResults runs
      await vi.waitFor(() => expect(submitWorkoutResults).toHaveBeenCalledTimes(1))

      const payload = submitWorkoutResults.mock.calls[0][0]
      expect(payload.workout_id).toBe(1)
      expect(payload.workout_name).toBe('Full Body')
      expect(payload.results).toHaveLength(1)
      expect(payload.results[0].nb_reps_actual).toBe(15)
      expect(payload.results[0].weight_actual).toBe(60)
    })

    it('retries and succeeds on second attempt', async () => {
      submitWorkoutResults
        .mockRejectedValueOnce(new Error('timeout'))
        .mockResolvedValueOnce({ ok: true })

      // Speed up the backoff delay
      vi.useFakeTimers()

      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2

      store.confirmReps(15, null)

      // Advance past the 500 ms backoff
      await vi.runAllTimersAsync()

      expect(submitWorkoutResults).toHaveBeenCalledTimes(2)
      // Nothing should be written to the pending queue
      expect(localStorage.getItem('benergy-pending-results')).toBeNull()

      vi.useRealTimers()
    })

    it('enqueues payload to localStorage after all 3 attempts fail', async () => {
      submitWorkoutResults.mockRejectedValue(new Error('server down'))

      vi.useFakeTimers()

      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2

      store.confirmReps(15, null)

      await vi.runAllTimersAsync()

      expect(submitWorkoutResults).toHaveBeenCalledTimes(3)

      const raw = localStorage.getItem('benergy-pending-results')
      expect(raw).not.toBeNull()
      const queue = JSON.parse(raw)
      expect(queue).toHaveLength(1)
      expect(queue[0].payload.workout_id).toBe(1)
      expect(typeof queue[0].ts).toBe('number')

      vi.useRealTimers()
    })

    it('appends to an existing pending queue rather than overwriting', async () => {
      const existing = [{ payload: { workout_id: 99 }, ts: 1000 }]
      localStorage.setItem('benergy-pending-results', JSON.stringify(existing))
      submitWorkoutResults.mockRejectedValue(new Error('server down'))

      vi.useFakeTimers()

      const store = useWorkoutStore()
      store.workout = makeWorkout()
      store.currentStepIndex = 2

      store.confirmReps(15, null)

      await vi.runAllTimersAsync()

      const queue = JSON.parse(localStorage.getItem('benergy-pending-results'))
      expect(queue).toHaveLength(2)
      expect(queue[0].payload.workout_id).toBe(99)
      expect(queue[1].payload.workout_id).toBe(1)

      vi.useRealTimers()
    })
  })
})
