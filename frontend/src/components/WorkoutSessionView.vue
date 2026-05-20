<template>
  <div class="session-page">
    <div v-if="loading" class="loading-text">Loading workout...</div>
    <WarmupPhase v-else-if="ws.phase === PHASE.WARMUP" :timer="timer" @start="startWorkout" />
    <ExercisePhase v-else-if="ws.phase === PHASE.EXERCISE" />
    <LogRepsPhase v-else-if="ws.phase === PHASE.LOG_REPS" @confirm="confirmReps" />
    <RestPhase v-else-if="ws.phase === PHASE.REST" :timer="timer" @skip="skipRest" />
    <CompletePhase v-else-if="ws.phase === PHASE.COMPLETE" @home="goHome" />
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWorkoutStore, PHASE } from '@/stores/workout'
import WarmupPhase from './WorkoutSession/WarmupPhase.vue'
import ExercisePhase from './WorkoutSession/ExercisePhase.vue'
import LogRepsPhase from './WorkoutSession/LogRepsPhase.vue'
import RestPhase from './WorkoutSession/RestPhase.vue'
import CompletePhase from './WorkoutSession/CompletePhase.vue'

const route = useRoute()
const router = useRouter()
const ws = useWorkoutStore()

const loading = ref(true)
const timer = ref(0)
let timerInterval = null

// Timer helpers
function startCountUp(from = 0) {
  stopTimer()
  timer.value = from
  timerInterval = setInterval(() => {
    timer.value++
    ws.warmupElapsed = timer.value
  }, 1000)
}

function startCountDown(from) {
  stopTimer()
  timer.value = from
  timerInterval = setInterval(() => {
    timer.value--
    ws.restRemaining = timer.value
    ws.save()
    if (timer.value <= 0) {
      stopTimer()
      ws.advanceToNextStep()
    }
  }, 1000)
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

// Phase transitions
function startWorkout() {
  stopTimer()
  ws.endWarmup()
}

function confirmReps({ actualReps, actualWeight }) {
  ws.confirmReps(actualReps, actualWeight)
  if (ws.phase === PHASE.REST) {
    startCountDown(ws.restRemaining)
  }
}

function skipRest() {
  stopTimer()
  ws.advanceToNextStep()
}

function goHome() {
  ws.clearSaved()
  router.push('/')
}

// Init: either resume saved session or start fresh
async function init() {
  const workoutId = Number(route.params.id)

  if (ws.workout?.id === workoutId && ws.isActive) {
    if (ws.phase === PHASE.WARMUP) startCountUp(ws.warmupElapsed)
    else if (ws.phase === PHASE.REST) startCountDown(ws.restRemaining)
    loading.value = false
    return
  }

  if (ws.loadSaved() && ws.workout?.id === workoutId && ws.isActive) {
    if (ws.phase === PHASE.WARMUP) startCountUp(ws.warmupElapsed)
    else if (ws.phase === PHASE.REST) startCountDown(ws.restRemaining)
    loading.value = false
    return
  }

    try {
      await ws.startWorkout(workoutId)
      startCountUp()
    } catch {
      router.push('/')
    } finally {
      loading.value = false
    }
}

init()

onUnmounted(() => stopTimer())
</script>

<style scoped>
.session-page {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

.loading-text {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
