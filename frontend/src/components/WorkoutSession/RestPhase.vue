<template>
  <div class="phase-section">
    <p class="phase-label">Rest</p>
    <div class="rest-timer">{{ formatTime(timer) }}</div>
    <div v-if="nextStep" class="next-step">
      <p class="next-step-label">Up next</p>
      <p class="next-step-name">{{ nextStep.exerciseName }}</p>
      <p>Set {{ nextStep.setOrder }} of {{ nextStep.totalSets }} &middot; {{ nextStep.targetReps }} reps<span v-if="nextStep.targetWeight"> / {{ parseFloat(nextStep.targetWeight) }}kg</span></p>
    </div>
    <Button label="Skip" severity="secondary" @click="$emit('skip')" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Button from 'primevue/button'
import { useWorkoutStore } from '@/stores/workout'
import { formatTime } from './utils'

import './session.css'

defineProps({ timer: { type: Number, required: true } })
defineEmits(['skip'])

const ws = useWorkoutStore()
const nextStep = computed(() => ws.allSteps[ws.currentStepIndex + 1])
</script>

<style scoped>
.rest-timer {
  font-size: 4.5rem;
  font-family: ui-monospace, monospace;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.next-step {
  color: var(--p-surface-400);
  font-size: 0.875rem;
}

.next-step-label {
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.next-step-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #d1d5db;
}
</style>
