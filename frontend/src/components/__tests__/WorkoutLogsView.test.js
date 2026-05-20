// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import WorkoutLogsView from '@/components/WorkoutLogsView.vue'

vi.mock('@/services/workout', () => ({
  fetchWorkoutLogs: vi.fn(),
}))

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { id: '42' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

import { fetchWorkoutLogs } from '@/services/workout'

const FAKE_LOGS = [
  {
    id: 1,
    workout_name: 'Upper Body A',
    completed_at: '2026-05-10T09:00:00Z',
    exercises: [
      {
        exercise_name: 'Bench Press',
        exercise_order: 1,
        sets: [
          {
            set_order: 1,
            nb_reps_actual: 10,
            nb_reps_target: 10,
            weight_actual: '80.00',
            weight_target: '80.00',
          },
          {
            set_order: 2,
            nb_reps_actual: 8,
            nb_reps_target: 10,
            weight_actual: null,
            weight_target: '80.00',
          },
        ],
      },
      {
        exercise_name: 'Overhead Press',
        exercise_order: 2,
        sets: [
          {
            set_order: 1,
            nb_reps_actual: 6,
            nb_reps_target: 6,
            weight_actual: '40.00',
            weight_target: '40.00',
          },
        ],
      },
    ],
  },
]

function mountComponent() {
  return mount(WorkoutLogsView, {
    global: {
      stubs: { Button: true },
    },
  })
}

describe('WorkoutLogsView', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading text before fetch resolves', () => {
    fetchWorkoutLogs.mockReturnValue(new Promise(() => {}))
    const wrapper = mountComponent()
    expect(wrapper.find('.loading-text').exists()).toBe(true)
    expect(wrapper.find('.session-list').exists()).toBe(false)
  })

  it('renders session cards after successful fetch', async () => {
    fetchWorkoutLogs.mockResolvedValue(FAKE_LOGS)
    const wrapper = mountComponent()
    await flushPromises()

    expect(wrapper.find('.loading-text').exists()).toBe(false)
    expect(wrapper.find('.session-list').exists()).toBe(true)
    expect(wrapper.findAll('.session-card')).toHaveLength(1)
  })

  it('displays workout name in page title from first session', async () => {
    fetchWorkoutLogs.mockResolvedValue(FAKE_LOGS)
    const wrapper = mountComponent()
    await flushPromises()

    expect(wrapper.find('.logs-title').text()).toContain('Upper Body A')
  })

  it('renders all exercises for a session', async () => {
    fetchWorkoutLogs.mockResolvedValue(FAKE_LOGS)
    const wrapper = mountComponent()
    await flushPromises()

    const exerciseSections = wrapper.findAll('.exercise-section')
    expect(exerciseSections).toHaveLength(2)
    expect(exerciseSections[0].find('.exercise-name').text()).toBe('Bench Press')
    expect(exerciseSections[1].find('.exercise-name').text()).toBe('Overhead Press')
  })

  it('renders set rows with reps and weight', async () => {
    fetchWorkoutLogs.mockResolvedValue(FAKE_LOGS)
    const wrapper = mountComponent()
    await flushPromises()

    const rows = wrapper.findAll('.exercise-section')[0].findAll('tbody tr')
    expect(rows).toHaveLength(2)
    expect(rows[0].text()).toContain('10')
    expect(rows[0].text()).toContain('80.00 kg')
  })

  it('displays — for null weight_actual', async () => {
    fetchWorkoutLogs.mockResolvedValue(FAKE_LOGS)
    const wrapper = mountComponent()
    await flushPromises()

    const rows = wrapper.findAll('.exercise-section')[0].findAll('tbody tr')
    expect(rows[1].find('.col-weight').text()).toBe('—')
  })

  it('shows empty state when fetch returns empty array', async () => {
    fetchWorkoutLogs.mockResolvedValue([])
    const wrapper = mountComponent()
    await flushPromises()

    expect(wrapper.find('.empty-state').exists()).toBe(true)
    expect(wrapper.find('.empty-state').text()).toContain('No sessions logged yet.')
    expect(wrapper.find('.session-list').exists()).toBe(false)
  })

  it('shows error message when fetch fails', async () => {
    fetchWorkoutLogs.mockRejectedValue(new Error('Network error'))
    const wrapper = mountComponent()
    await flushPromises()

    expect(wrapper.find('.error-text').exists()).toBe(true)
    expect(wrapper.find('.error-text').text()).toContain('Failed to load workout logs.')
    expect(wrapper.find('.session-list').exists()).toBe(false)
  })

  it('calls fetchWorkoutLogs with the route workout id', async () => {
    fetchWorkoutLogs.mockResolvedValue([])
    mountComponent()
    await flushPromises()

    expect(fetchWorkoutLogs).toHaveBeenCalledOnce()
    expect(fetchWorkoutLogs).toHaveBeenCalledWith('42')
  })
})
