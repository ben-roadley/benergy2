<template>
  <div class="phase-section">
    <h1 class="workout-title">{{ ws.workout.name }}</h1>
    <p class="phase-label">Warm up</p>
    <div class="timer-display">{{ formatTime(timer) }}</div>
    <Button label="Go" size="large" class="action-btn" @click="$emit('start')" />

    <!-- Warm-up suggestions -->
    <!-- <div v-if="ws.workout.exercises?.length" class="suggestions-section">
      <div class="suggestions-header">
        <span class="suggestions-title">Warm-up ideas</span>
        <Button
          icon="pi pi-refresh"
          text
          rounded
          size="small"
          :loading="wss.loading"
          aria-label="Refresh suggestions"
          @click="wss.refreshSuggestions(ws.workout.id)"
        />
      </div>

      <div v-if="wss.loading && wss.suggestions.length === 0" class="suggestions-loading">
        <ProgressSpinner style="width: 24px; height: 24px" strokeWidth="4" />
      </div>

      <div v-else-if="wss.error && !wss.loading" class="suggestions-error">
        <span>Couldn't load suggestions.</span>
        <Button
          label="Retry"
          text
          size="small"
          @click="wss.fetchSuggestions(ws.workout.id)"
        />
      </div>

      <ul v-else-if="wss.suggestions.length" class="suggestions-list">
        <li v-for="s in wss.suggestions" :key="s.name" class="suggestion-item">
          <div class="suggestion-body">
            <span class="suggestion-name">{{ s.name }}</span>
            <span class="suggestion-desc">{{ s.description }}</span>
          </div>
          <a
            :href="`https://www.youtube.com/results?search_query=${encodeURIComponent(s.name + ' how to')}`"
            target="_blank"
            rel="noopener noreferrer"
            class="suggestion-link"
          >▶ How to</a>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Button from 'primevue/button'
// import ProgressSpinner from 'primevue/progressspinner'
import { useWorkoutStore } from '@/stores/workout'
// import { useWarmupSuggestionsStore } from '@/stores/warmupSuggestions'
import { formatTime } from './utils'
import './session.css'

defineProps({ timer: { type: Number, required: true } })
defineEmits(['start'])

const ws = useWorkoutStore()
// const wss = useWarmupSuggestionsStore()

// onMounted(() => {
//   wss.reset()
//   wss.fetchSuggestions(ws.workout.id)
// })
</script>

<style scoped>
.workout-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.timer-display {
  font-size: 3.75rem;
  font-family: ui-monospace, monospace;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.suggestions-section {
  margin-top: 1.5rem;
  width: 100%;
  max-width: 24rem;
  text-align: left;
}

.suggestions-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.suggestions-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--p-surface-500);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.suggestions-loading {
  display: flex;
  justify-content: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.suggestions-error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--p-surface-400);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.suggestions-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.suggestion-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--p-surface-100);
  padding: 0.5rem 0.75rem;
}

.suggestion-body {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.suggestion-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--p-surface-700);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.suggestion-desc {
  font-size: 0.75rem;
  color: var(--p-surface-500);
  line-height: 1.375;
}

.suggestion-link {
  font-size: 0.75rem;
  color: #3b82f6;
  white-space: nowrap;
  align-self: center;
  flex-shrink: 0;
  text-decoration: none;
}

.suggestion-link:hover {
  text-decoration: underline;
}
</style>

