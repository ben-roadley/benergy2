<template>
  <div class="insights-page">
    <div class="insights-header">
      <Button icon="pi pi-arrow-left" text @click="router.push('/workouts/logs-and-insights')" />
      <h1 class="insights-title">
        {{ insights ? `${insights.workout_name} — Insights` : 'Insights' }}
      </h1>
    </div>

    <div v-if="loading" class="loading-text">Loading...</div>

    <div v-else-if="error" class="error-text">
      <p>{{ error }}</p>
      <Button label="Retry" @click="loadInsights" />
    </div>

    <template v-else-if="insights">
      <div v-if="insights.sessions.length === 0" class="empty-state">
        No sessions logged yet. Complete a workout to start tracking your progress.
      </div>

      <template v-else>
        <div class="blurb">
          <span class="blurb-title">What is training volume?</span>
          Training volume measures the total amount of work you perform in a session: Sets × Reps × Weight (kg). It is one of the most reliable indicators of long-term progress — consistently increasing volume over weeks and months is the core mechanism behind muscle growth and strength gains, a principle known as progressive overload. Use these charts to spot trends: a rising line means you're doing more work than before, a flat line is a signal to adjust your programme. Bodyweight exercises are calculated using your profile weight.
        </div>

        <div v-if="insights.sessions.length === 1" class="single-session-banner">
          Log more sessions to see your progress over time.
        </div>

        <div
          v-if="insights.bodyweight_kg === null && hasBodyweightExercise"
          class="profile-prompt"
        >
          Set your bodyweight in your profile to include bodyweight exercises in volume calculations.
          <router-link to="/profile"> Go to profile →</router-link>
        </div>

        <div class="chart-list">
          <!-- Total Workout Load -->
          <div class="chart-card">
            <h2 class="chart-title">Total Workout Load</h2>
            <div class="chart-wrapper">
              <Chart
                type="line"
                :data="buildChartData(insights.sessions, insights.total_volume)"
                :options="chartOptions"
              />
            </div>
            <p class="chart-note">
              Total load is dominated by heavier lifts — use per-exercise charts for detailed progress.
            </p>
          </div>

          <!-- Per-exercise charts -->
          <div
            v-for="exercise in sortedExercises"
            :key="exercise.name"
            class="chart-card"
          >
            <h2 class="chart-title">{{ exercise.name }}</h2>
            <div class="chart-wrapper">
              <Chart
                type="line"
                :data="buildChartData(insights.sessions, exercise.volume_per_session)"
                :options="chartOptions"
              />
            </div>
            <p v-if="exercise.is_bodyweight && insights.bodyweight_kg !== null" class="chart-note">
              Calculated using your profile bodyweight of {{ insights.bodyweight_kg }} kg.
            </p>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchWorkoutVolumeInsights } from '@/services/workout'
import Button from 'primevue/button'
import Chart from 'primevue/chart'

const route = useRoute()
const router = useRouter()
const workoutId = computed(() => route.params.id)

const insights = ref(null)
const loading = ref(true)
const error = ref(null)

const hasBodyweightExercise = computed(
  () => insights.value?.exercises?.some((e) => e.is_bodyweight) ?? false,
)

const sortedExercises = computed(
  () => [...(insights.value?.exercises ?? [])].sort((a, b) => a.order - b.order),
)

async function loadInsights() {
  loading.value = true
  error.value = null
  try {
    insights.value = await fetchWorkoutVolumeInsights(workoutId.value)
  } catch {
    error.value = 'Could not load your training data. Please try again.'
  } finally {
    loading.value = false
  }
}

function buildChartData(labels, data) {
  return {
    labels,
    datasets: [
      {
        label: 'Volume (kg)',
        data,
        fill: false,
        tension: 0.3,
        borderColor: '#6366f1',
        pointRadius: 4,
        pointBackgroundColor: '#6366f1',
      },
    ],
  }
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: { grid: { display: false } },
    y: {
      beginAtZero: true,
      title: { display: true, text: 'Volume (kg)' },
    },
  },
}

onMounted(loadInsights)
</script>

<style scoped>
.insights-page {
  padding: 1rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.insights-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.insights-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.loading-text {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.error-text {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #dc2626;
}

.empty-state {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: var(--p-surface-500);
}

.blurb {
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 0.875rem;
  color: #1e3a5f;
  margin-bottom: 1.5rem;
  line-height: 1.625;
}

.blurb-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: block;
}

.single-session-banner {
  background-color: #fefce8;
  border: 1px solid #fde047;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #854d0e;
  margin-bottom: 1rem;
}

.profile-prompt {
  background-color: #fff7ed;
  border: 1px solid #fdba74;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: #9a3412;
  margin-bottom: 1rem;
}

.chart-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.chart-card {
  border: 1px solid var(--p-surface-200);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chart-title {
  font-size: 1rem;
  font-weight: 600;
}

.chart-wrapper {
  height: 200px;
}

.chart-note {
  font-size: 0.75rem;
  color: var(--p-surface-500);
  margin-top: 0.25rem;
}
</style>
