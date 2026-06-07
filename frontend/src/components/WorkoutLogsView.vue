<template>
  <div class="logs-page">
    <div class="logs-header">
      <Button icon="pi pi-arrow-left" text @click="router.push('/workouts/logs-and-insights')" />
      <h1 class="logs-title">{{ pageTitle }}</h1>
    </div>

    <div v-if="loading" class="loading-text">Loading...</div>

    <div v-else-if="error" class="error-text">{{ error }}</div>

    <div v-else-if="logs.length === 0" class="empty-state">
      No sessions logged yet.
    </div>

    <div v-else class="session-list">
      <div v-for="log in logs" :key="log.id" class="session-card">
        <h2 class="session-date">{{ formatDate(log.completed_at) }}</h2>
        <div
          v-for="exercise in log.exercises"
          :key="exercise.exercise_order"
          class="exercise-section"
        >
          <h3 class="exercise-name">{{ exercise.exercise_name }}</h3>
          <table class="sets-table">
            <thead>
              <tr>
                <th class="col-set">Set</th>
                <th class="col-reps">Reps</th>
                <th class="col-weight">Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="set in exercise.sets" :key="set.set_order">
                <td class="col-set">{{ set.set_order }}</td>
                <td class="col-reps">{{ set.nb_reps_actual }}</td>
                <td class="col-weight">
                  {{ set.weight_actual != null ? set.weight_actual + ' kg' : '—' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchWorkoutLogs } from '@/services/workout'
import Button from 'primevue/button'

const route = useRoute()
const router = useRouter()

const logs = ref([])
const loading = ref(true)
const error = ref(null)

const workoutId = computed(() => route.params.id)

const pageTitle = computed(() => {
  if (logs.value.length > 0) return `${logs.value[0].workout_name} — Training Logs`
  return 'Training Logs'
})

function formatDate(isoString) {
  return new Date(isoString).toLocaleString()
}

onMounted(async () => {
  try {
    logs.value = await fetchWorkoutLogs(workoutId.value)
  } catch {
    error.value = 'Failed to load workout logs.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.logs-page {
  padding: 1rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.logs-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.logs-title {
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

.session-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.session-card {
  border: 1px solid var(--p-surface-200);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.session-date {
  font-size: 1rem;
  font-weight: 600;
  color: var(--p-surface-700);
}

.exercise-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.exercise-name {
  font-size: 0.875rem;
  font-weight: 600;
}

.sets-table {
  width: 100%;
  font-size: 0.875rem;
  border-collapse: collapse;
}

.sets-table thead tr {
  border-bottom: 1px solid var(--p-surface-200);
}

.sets-table th {
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--p-surface-400);
  text-transform: uppercase;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-right: 1rem;
}

.sets-table td {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-right: 1rem;
  color: var(--p-surface-600);
}

.col-set {
  width: 2.5rem;
}

.col-reps {
  width: 9rem;
}

.col-weight {
  width: 7rem;
}
</style>
