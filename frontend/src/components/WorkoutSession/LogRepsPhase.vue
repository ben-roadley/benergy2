<template>
  <div class="phase-section">
    <h2 class="logreps-title">{{ ws.currentStep.exerciseName }}</h2>
    <p class="set-info">Set {{ ws.currentStep.setOrder }} of {{ ws.currentStep.totalSets }}</p>
    <hr class="log-divider" />
    <p class="reps-prompt">How many reps did you do?</p>

    <div class="reps-control" role="group" aria-label="Reps selector">
      <Button
        icon="pi pi-minus"
        class="reps-btn"
        :disabled="actualReps <= min"
        @click="decrement"
        aria-label="Decrease reps"
      />
      <div class="reps-display" aria-live="polite">{{ actualReps }}</div>
      <Button
        icon="pi pi-plus"
        class="reps-btn"
        :disabled="actualReps >= max"
        @click="increment"
        aria-label="Increase reps"
      />
    </div>
    <hr class="w-full border-gray-300" />

    <template v-if="ws.currentStep.targetWeight != null">
      <p class="reps-prompt">Weight used (kg)?</p>
      <div class="reps-control" role="group" aria-label="Weight selector">
        <Button
          icon="pi pi-minus"
          class="reps-btn"
          :disabled="(actualWeight ?? 0) <= minWeight"
          @click="decrementWeight"
          aria-label="Decrease weight"
        />
        <div class="reps-display weight-display" aria-live="polite">{{ formattedWeight }}</div>
        <Button
          icon="pi pi-plus"
          class="reps-btn"
          :disabled="(actualWeight ?? 0) >= maxWeight"
          @click="incrementWeight"
          aria-label="Increase weight"
        />
      </div>
      <hr class="log-divider" />
    </template>

    

    <Button
      label="Next"
      size="large"
      class="action-btn"
      @click="onConfirm"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import Button from 'primevue/button'
import { useWorkoutStore } from '@/stores/workout'

import './session.css'

const emit = defineEmits(['confirm'])

function onConfirm() {
  emit('confirm', {
    actualReps: actualReps.value,
    actualWeight: actualWeight.value ?? null,
  })
}

const ws = useWorkoutStore()
const min = 0
const max = 999

const actualReps = ref(ws.currentStep?.targetReps ?? 0)
// make weight an integer
const actualWeight = ref(ws.currentStep?.targetWeight != null ? parseInt(ws.currentStep.targetWeight, 10) : null)

// Reps helpers
function increment() {
  if (actualReps.value < max) actualReps.value++
}

function decrement() {
  if (actualReps.value > min) actualReps.value--
}

// Weight helpers — integer step
const weightStep = 5
const minWeight = 0
const maxWeight = 999

function incrementWeight() {
  if (actualWeight.value == null) actualWeight.value = 0
  actualWeight.value = Math.min(maxWeight, actualWeight.value + weightStep)
}

function decrementWeight() {
  if (actualWeight.value == null) actualWeight.value = 0
  actualWeight.value = Math.max(minWeight, actualWeight.value - weightStep)
}

const formattedWeight = computed(() => (actualWeight.value == null ? '-' : String(Math.round(actualWeight.value))))

watch(
  () => ws.currentStep,
  (step) => {
    if (step) {
      actualReps.value = step.targetReps
      actualWeight.value = step.targetWeight != null ? parseInt(step.targetWeight, 10) : null
    }
  },
)
</script>

<style scoped>
.logreps-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.set-info {
  color: var(--p-surface-500);
}

.reps-prompt {
  font-size: 1.125rem;
}

.reps-control {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.reps-display {
  font-size: 3rem;
  font-weight: 800;
  width: 10rem;
  text-align: center;
}

.weight-display {
  font-size: 1.5rem;
  font-weight: 600;
  width: 9rem;
  text-align: center;
}

.reps-btn {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #1f2937;
  color: white;
}

.reps-btn:hover {
  background-color: #374151;
}

.log-divider {
  width: 100%;
  border: none;
  border-top: 1px solid var(--p-surface-300);
}
</style>