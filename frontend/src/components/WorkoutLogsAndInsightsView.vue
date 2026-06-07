<template>
  <div class="home-page">
    <h1 class="home-title">Workout logs & insights</h1>

    <div v-if="loading" class="loading-text">Loading workouts...</div>

    <div v-else-if="workouts.length === 0" class="empty-state">
      <p class="empty-text">No workouts yet.</p>
      <Button
        label="Create your first workout"
        icon="pi pi-plus"
        size="large"
        @click="router.push('/workouts/new')"
      />
    </div>

    <div v-else class="workout-list">      
      <div v-for="w in workouts" :key="w.id" class="workout-item">
        <Toolbar class="workout-item-row">
          <template #start>
            <Message severity="success">{{ w.name }}</Message>
          </template>
          <template #end>
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
          </template>
        </Toolbar>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWorkouts } from '@/services/workout'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import Message from 'primevue/message'

const router = useRouter()
const workouts = ref([])
const loading = ref(true)

onMounted(async () => {
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

.last-session-banner {
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
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
