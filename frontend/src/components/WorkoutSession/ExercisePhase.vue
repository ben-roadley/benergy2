<template>
  <div class="phase-section">
    <p class="exercise-meta">
      Exercise {{ ws.currentStep.exerciseOrder }} &middot; Set {{ ws.currentStep.setOrder }} of {{ ws.currentStep.totalSets }}
    </p>
    <h2 class="exercise-name">{{ ws.currentStep.exerciseName }}</h2>
    <div class="reps-display">{{ ws.currentStep.targetReps }} reps<span v-if="ws.currentStep.targetWeight"> / {{ parseFloat(ws.currentStep.targetWeight) }}kg</span></div>
    <Button label="Done" size="large" class="action-btn" @click="ws.enterLogReps()" />
  </div>
</template>

<script setup>
import Button from 'primevue/button'
import { useWorkoutStore } from '@/stores/workout'

import './session.css'

const ws = useWorkoutStore()
</script>

<style scoped>
.exercise-meta {
  font-size: 0.875rem;
  color: var(--p-surface-500);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.exercise-name {
  font-size: 1.875rem;
  font-weight: 700;
}

.reps-display {
  font-size: 3.75rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
