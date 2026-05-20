// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import WorkoutInsightsView from '@/components/WorkoutInsightsView.vue'

vi.mock('@/services/workout', () => ({
  fetchWorkoutVolumeInsights: vi.fn(),
}))

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { id: '7' } }),
  useRouter: () => ({ push: vi.fn() }),
}))

import { fetchWorkoutVolumeInsights } from '@/services/workout'

const FAKE_INSIGHTS = {
  workout_name: 'Upper Body A',
  bodyweight_kg: 70.0,
  sessions: ['12 May', '19 May'],
  total_volume: [2100.5, 2350.0],
  exercises: [
    { name: 'Bench Press', order: 1, is_bodyweight: false, volume_per_session: [1200.0, 1350.0] },
    { name: 'Pull-ups', order: 2, is_bodyweight: true, volume_per_session: [900.5, 1000.0] },
  ],
}

function mountComponent() {
  return mount(WorkoutInsightsView, {
    global: {
      stubs: { Button: true, Chart: true, RouterLink: true },
    },
  })
}

describe('WorkoutInsightsView', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading state initially', () => {
    fetchWorkoutVolumeInsights.mockReturnValue(new Promise(() => {}))
    const wrapper = mountComponent()
    expect(wrapper.find('.loading-text').exists()).toBe(true)
    expect(wrapper.find('.chart-list').exists()).toBe(false)
  })

  it('shows error state when fetch fails', async () => {
    fetchWorkoutVolumeInsights.mockRejectedValue(new Error('Network error'))
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.error-text').exists()).toBe(true)
    expect(wrapper.find('.error-text').text()).toContain('Could not load your training data')
    expect(wrapper.find('.loading-text').exists()).toBe(false)
  })

  it('shows retry button in error state', async () => {
    fetchWorkoutVolumeInsights.mockRejectedValue(new Error('fail'))
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.error-text').exists()).toBe(true)
    expect(wrapper.find('.error-text button-stub').exists()).toBe(true)
  })

  it('shows empty state when sessions array is empty', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue({
      ...FAKE_INSIGHTS,
      sessions: [],
      total_volume: [],
      exercises: [],
    })
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.empty-state').exists()).toBe(true)
    expect(wrapper.find('.empty-state').text()).toContain('No sessions logged yet')
    expect(wrapper.find('.chart-list').exists()).toBe(false)
  })

  it('shows single-session banner when sessions.length === 1', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue({
      ...FAKE_INSIGHTS,
      sessions: ['12 May'],
      total_volume: [2100.5],
      exercises: FAKE_INSIGHTS.exercises.map((e) => ({
        ...e,
        volume_per_session: [e.volume_per_session[0]],
      })),
    })
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.single-session-banner').exists()).toBe(true)
    expect(wrapper.find('.single-session-banner').text()).toContain('Log more sessions')
  })

  it('does NOT show single-session banner when sessions.length > 1', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue(FAKE_INSIGHTS)
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.single-session-banner').exists()).toBe(false)
  })

  it('shows profile weight prompt when bodyweight_kg is null and bodyweight exercise exists', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue({
      ...FAKE_INSIGHTS,
      bodyweight_kg: null,
    })
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.profile-prompt').exists()).toBe(true)
    expect(wrapper.find('.profile-prompt').text()).toContain('Set your bodyweight')
  })

  it('does NOT show profile weight prompt when bodyweight_kg is set', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue(FAKE_INSIGHTS)
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.profile-prompt').exists()).toBe(false)
  })

  it('does NOT show profile weight prompt when no bodyweight exercises exist', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue({
      ...FAKE_INSIGHTS,
      bodyweight_kg: null,
      exercises: [
        { name: 'Bench Press', order: 1, is_bodyweight: false, volume_per_session: [1200.0, 1350.0] },
      ],
    })
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.profile-prompt').exists()).toBe(false)
  })

  it('renders chart cards (one global + one per exercise) when data is loaded', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue(FAKE_INSIGHTS)
    const wrapper = mountComponent()
    await flushPromises()
    const cards = wrapper.findAll('.chart-card')
    // 1 total + 2 exercises = 3
    expect(cards).toHaveLength(3)
  })

  it('renders chart card titles correctly', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue(FAKE_INSIGHTS)
    const wrapper = mountComponent()
    await flushPromises()
    const titles = wrapper.findAll('.chart-title').map((t) => t.text())
    expect(titles).toContain('Total Workout Load')
    expect(titles).toContain('Bench Press')
    expect(titles).toContain('Pull-ups')
  })

  it('shows educational blurb when data is loaded', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue(FAKE_INSIGHTS)
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.blurb').exists()).toBe(true)
    expect(wrapper.find('.blurb').text()).toContain('progressive overload')
  })

  it('shows page title with workout name', async () => {
    fetchWorkoutVolumeInsights.mockResolvedValue(FAKE_INSIGHTS)
    const wrapper = mountComponent()
    await flushPromises()
    expect(wrapper.find('.insights-title').text()).toContain('Upper Body A')
    expect(wrapper.find('.insights-title').text()).toContain('Insights')
  })
})
