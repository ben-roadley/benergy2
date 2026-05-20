<template>
  <div class="phase-section">
    <h1 class="complete-title">Workout Complete 💪</h1>

    <div class="results-container">
      <div v-for="(group, exName) in ws.groupedResults" :key="exName" class="result-group">
        <h3 class="result-group-title">{{ exName }}</h3>
        <div v-for="r in group" :key="r.setOrder" class="result-row">
          <div class="col col-set">Set {{ r.setOrder }}</div>
          <div class="col col-info">
            <span v-if="r.actualWeight != null" :class="{ 'weight-improved': r.actualWeight > r.targetWeight }">{{ r.actualWeight }} kg</span>
          </div>
          <div class="col col-reps">
            <span class="target">{{ r.targetReps }}</span>
            <span class="pi pi-chevron-right reps-chevron"></span>
            <span class="reps-actual" :class="repsClass(r)">{{ r.actualReps }}</span>
          </div>
        </div>
      </div>
    </div>

    <Button label="Back to Home" @click="$emit('home')" />
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import { useWorkoutStore } from '@/stores/workout'

import './session.css'

defineEmits(['home'])

const ws = useWorkoutStore()

const repsClass = (r) => {
  if (r.actualWeight != null && r.targetWeight != null && r.actualWeight > r.targetWeight) return ''
  if (r.actualReps > r.targetReps) return 'reps-good'
  if (r.actualReps < r.targetReps) return 'reps-bad'
  return ''
}
</script>

<style scoped>
.complete-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.reps-chevron {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.75rem;
  color: var(--p-surface-500);
}

.results-container {
  width: 100%;
  max-width: 28rem;
  text-align: left;
}

.result-group {
  margin-bottom: 1rem;
}

.result-group-title {
  font-weight: 600;
  font-size: 1.125rem;
}

.result-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  font-size: 0.875rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  gap: 1rem;
}

.target {
  color: var(--p-surface-500);
}

.col-set {
  text-align: left;
  font-size: 0.875rem;
  color: var(--p-surface-500);
}

.col-info {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem;
  color: var(--p-surface-600);
}

.col-reps {
  text-align: right;
  font-size: 0.875rem;
}

.reps-actual {
  font-weight: 700;
  color: var(--p-surface-500);
}

.reps-good {
  color: #16a34a;
}

.reps-bad {
  color: #dc2626;
}

.weight-improved {
  color: #16a34a;
}
</style>
