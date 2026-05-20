<template>
  <div class="home-page">
    <h1 class="home-title">Your Workouts</h1>

    <!-- Resume banner -->
    <div v-if="ws.isActive" class="resume-banner">
      <p class="resume-workout-name">Workout in progress: {{ ws.workout.name }}</p>
      <div class="resume-actions">
        <Button label="Resume" @click="router.push(`/workout/${ws.workout.id}`)" />
        <Button label="Abandon" severity="danger" outlined @click="ws.abandon()" />
      </div>
    </div>


    <div v-if="!ws.isActive && loading" class="loading-text">Loading workouts...</div>

    <div v-else-if="!ws.isActive && workouts.length === 0" class="empty-state">
      <p class="empty-text">No workouts yet.</p>
      <Button
        label="Create your first workout"
        icon="pi pi-plus"
        size="large"
        @click="router.push('/workouts/new')"
      />
    </div>

    <div v-else-if="!ws.isActive" class="workout-list">
      <div v-for="w in workouts" :key="w.id" class="workout-item">
        <div class="workout-item-row">
          <Button
            :label="w.name"
            severity="secondary"
            class="workout-btn"
            @click="router.push(`/workout/${w.id}`)"
          />
          <Button
            icon="pi pi-pencil"
            severity="secondary"
            text
            size="small"
            v-tooltip.top="'Edit workout'"
            @click="router.push(`/workouts/${w.id}/edit`)"
          />
          <Button
            icon="pi pi-history"
            severity="secondary"
            text
            size="small"
            v-tooltip.top="'Training logs'"
            @click="router.push(`/workouts/${w.id}/logs`)"
          />
          <Button
            icon="pi pi-chart-line"
            severity="secondary"
            text
            size="small"
            v-tooltip.top="'Insights'"
            @click="router.push(`/workouts/${w.id}/insights`)"
          />
        </div>
        <div v-if="w.is_stagnating" class="stagnation-row">
          <small class="stagnation-warning">
            No progress in the last 3 sessions
          </small>
          <button class="stagnation-help-btn" @click="showTips = true" aria-label="Stagnation tips">?</button>
        </div>
      </div>
      <Button
        label="Create new workout"
        icon="pi pi-plus"
        text
        size="small"
        class="create-workout-link"
        @click="router.push('/workouts/new')"
      />
    </div>

    <Dialog v-model:visible="showTips" header="Tips to break through a plateau" modal :style="{ width: '28rem' }">
      <ul class="tips-list">
        <li><strong>Increase rest time</strong> — longer recovery between sets can allow more reps next session.</li>
        <li><strong>Try a deload</strong> — drop intensity for one session, then come back stronger.</li>
        <li><strong>Change the variation</strong> — swap for a similar exercise (e.g., diamond push-ups instead of regular).</li>
        <li><strong>Slow down the tempo</strong> — focus on controlled negatives to build strength.</li>
        <li><strong>Add a set</strong> — if you can't do more reps per set, add an extra set.</li>
        <li><strong>Check recovery</strong> — sleep, nutrition, and stress all affect performance.</li>
      </ul>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useWorkoutStore } from '@/stores/workout'
import { fetchWorkouts } from '@/services/workout'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tooltip from 'primevue/tooltip'

const auth = useAuthStore()
const ws = useWorkoutStore()
const router = useRouter()
const workouts = ref([])
const loading = ref(true)
const showTips = ref(false)

onMounted(async () => {
  // Try restoring a saved session
  if (!ws.isActive) ws.loadSaved()

  try {
    workouts.value = await fetchWorkouts()
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.home-page {
  padding: 1rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.resume-banner {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #facc15;
  background-color: #fefce8;
  color: #713f12;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resume-workout-name {
  font-weight: 600;
}

.resume-actions {
  display: flex;
  gap: 0.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: center;
}

.loading-text {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 28rem;
}

.empty-text {
  color: var(--p-surface-500);
  font-size: 1.125rem;
}

.workout-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
  width: 100%;
}

.workout-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.workout-item-row {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.workout-btn {
  flex: 1;
  text-align: left;
}

.create-workout-link {
  margin-top: 0.5rem;
}

.stagnation-warning {
  color: #ea580c;
  font-weight: 500;
  padding-left: 0.25rem;
}

.stagnation-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stagnation-help-btn {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: #f97316;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  border: none;
}

.stagnation-help-btn:hover {
  background-color: #ea580c;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style-type: disc;
  padding-left: 1.25rem;
  font-size: 0.875rem;
}
</style>
