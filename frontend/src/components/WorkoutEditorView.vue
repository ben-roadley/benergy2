<template>
  <div class="editor-page">
    <div class="editor-header">
      <Button icon="pi pi-arrow-left" text @click="router.push('/')" />
      <h1 class="editor-title">{{ isNew ? 'New Workout' : 'Edit Workout' }}</h1>
    </div>

    <div v-if="loading" class="loading-text">Loading...</div>

    <form v-else class="editor-form" @submit.prevent="handleSave">
      <div v-if="!isEditable" class="locked-notice">
        <strong>Editing limited:</strong>
        <span> This workout has training logs, so workout and exercise structure cannot be changed. You can still update each set's reps and weight.</span>
      </div>
      <!-- Workout name & rest time -->
      <div class="form-section">
        <div class="field">
          <label for="workout-name">Workout name</label>
          <InputText
            id="workout-name"
            v-model="form.name"
            placeholder="e.g. Upper Body Day"
            class="w-full"
            :invalid="!!errors.name"
            :disabled="!isEditable"
          />
          <small v-if="errors.name" class="field-error">{{ errors.name }}</small>
        </div>

        <div class="field">
          <label for="workout-description">Workout description</label>
          <Textarea
            id="workout-description"
            v-model="form.description"
            placeholder="Optional detailed description of the workout"
            class="w-full"
            :invalid="!!errors.description"
            :disabled="!isEditable"
          />
          <small v-if="errors.description" class="field-error">{{ errors.description }}</small>
        </div>
      </div>

      <!-- Exercises -->
      <div class="exercises-section">
        <div class="exercises-header">
          <h2 class="exercises-title">Exercises</h2>
        </div>

        <small v-if="errors.exercises" class="field-error">{{ errors.exercises }}</small>

        <div v-if="form.exercises.length === 0" class="empty-exercises">
          No exercises yet — add one to get started.
        </div>

        <div class="exercise-list">
          <div
            v-for="(exercise, exIdx) in form.exercises"
            :key="exercise._key"
            class="exercise-card"
            :class="{ 'drag-over': dragOverIndex === exIdx }"
            :draggable="isEditable"
            @dragstart="onDragStart(exIdx, $event)"
            @dragover.prevent="onDragOver(exIdx)"
            @dragleave="onDragLeave"
            @drop.prevent="onDrop(exIdx)"
            @dragend="onDragEnd"
          >
            <div class="exercise-card-header">
              <div class="exercise-drag-handle">
                <i class="pi pi-bars" />
              </div>
              <span class="exercise-number">{{ exIdx + 1 }}</span>
              <AutoComplete
                v-if="isEditable"
                v-model="exercise.exercise_definition"
                :suggestions="exerciseSuggestions"
                option-label="name"
                @complete="onExerciseSearch"
                force-selection
                dropdown
                fluid
                placeholder="Search exercises..."
                :invalid="!!errors.exercises"
              >
                <template #option="{ option }">
                  <div class="exercise-option">
                    <span class="exercise-option-name">{{ option.name }}</span>
                    <span class="exercise-option-meta">
                      {{ option.category }}
                      <template v-if="option.equipment"> &middot; {{ option.equipment }}</template>
                      <template v-if="option.primary_muscles?.length"> &middot; {{ option.primary_muscles.join(', ') }}</template>
                    </span>
                  </div>
                </template>
              </AutoComplete>
              <span v-else class="exercise-name-label">{{ exercise.exercise_definition?.name }}</span>
              <Button
                type="button"
                icon="pi pi-trash"
                severity="danger"
                outlined
                @click="removeExercise(exIdx)"
                :disabled="form.exercises.length <= 1 || !isEditable"
                v-tooltip.top="form.exercises.length <= 1 ? 'Must have at least one exercise' : undefined"
              />
            </div>

            <!-- Sets -->
            <div class="sets-section">
              <div class="sets-header-row">
                <span class="set-col-header set-col-num">#</span>
                <span class="set-col-header set-col-weight">Weight (kg)</span>
                <span class="set-col-header set-col-reps">Reps</span>
                <span class="set-col-header set-col-actions"></span>
              </div>

              <div
                v-for="(set, setIdx) in exercise.sets_of_reps"
                :key="set._key"
                class="set-row"
              >
                <span class="set-col-num set-num-label">{{ setIdx + 1 }}</span>
                <div class="set-col-weight">
                  <InputNumber
                    v-model="set.weight"
                    :min="0"
                    :maxFractionDigits="2"
                    size="small"
                    placeholder="—"
                  />
                </div>
                <div class="set-col-reps">
                  <InputNumber
                    v-model="set.nb_reps"
                    :min="1"
                    size="small"
                  />
                </div>
                <Button
                  type="button"
                  icon="pi pi-times"
                  severity="danger"
                  text
                  size="small"
                  class="set-col-actions"
                  @click="removeSet(exIdx, setIdx)"
                  :disabled="exercise.sets_of_reps.length <= 1 || !isEditable"
                />
              </div>

              <Button
                type="button"
                label="Add set"
                icon="pi pi-plus"
                text
                size="small"
                class="add-set-btn"
                @click="addSet(exIdx)"
                :disabled="!isEditable"
              />
            </div>

            <div class="field">
              <label for="rest-time-after">Rest after exercise (seconds)</label>
              <InputNumber
                v-model="exercise.rest_time_after"
                :min="0"
                :max="300"
                :step="5"
                showButtons
                suffix=" s"
                :disabled="!isEditable"
              />
            </div>

          </div>
        </div>
      </div>

      <!-- Add exercise -->
      <div v-if="isEditable" class="add-exercise-row">
        <Button
          type="button"
          label="Add exercise"
          icon="pi pi-plus"
          severity="secondary"
          @click="addExercise"
        />
      </div>

      <!-- Actions -->
      <div class="form-actions">
        <Button
          type="submit"
          :label="isNew ? 'Create Workout' : 'Save Changes'"
          icon="pi pi-check"
          :loading="saving"
        />
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          outlined
          @click="router.push('/')"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchWorkout, createWorkout, updateWorkout, patchWorkout, searchExerciseDefinitions } from '@/services/workout'
import AutoComplete from 'primevue/autocomplete'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import InputNumber from 'primevue/inputnumber'

const route = useRoute()
const router = useRouter()

const workoutId = computed(() => route.params.id)
const isNew = computed(() => !workoutId.value)

const loading = ref(false)
const saving = ref(false)
const errors = ref({})
const isEditable = ref(true)

let keyCounter = 0
function nextKey() {
  return ++keyCounter
}

function makeSet(data = {}) {
  return { _key: nextKey(), nb_reps: data.nb_reps ?? 8, weight: data.weight ?? null }
}

function makeExercise(data = {}) {
  return {
    _key: nextKey(),
    exercise_definition: data.exercise_definition ?? null,
    rest_time_after: data.rest_time_after ?? 60,
    sets_of_reps: data.sets_of_reps
      ? data.sets_of_reps.map((s) => makeSet(s))
      : [makeSet(), makeSet(), makeSet()],
  }
}

const form = ref({
  name: '',
  description: '',
  exercises: [makeExercise()],
})

// Exercise autocomplete
const exerciseSuggestions = ref([])
let searchDebounceTimer = null

async function onExerciseSearch(event) {
  clearTimeout(searchDebounceTimer)
  const q = event.query?.trim()
  if (!q || q.length < 2) {
    exerciseSuggestions.value = []
    return
  }
  searchDebounceTimer = setTimeout(async () => {
    try {
      exerciseSuggestions.value = await searchExerciseDefinitions(q)
    } catch {
      exerciseSuggestions.value = []
    }
  }, 250)
}

// Drag & drop state
const dragIndex = ref(null)
const dragOverIndex = ref(null)

function onDragStart(idx, event) {
  if (!isEditable.value) return
  dragIndex.value = idx
  event.dataTransfer.effectAllowed = 'move'
}

function onDragOver(idx) {
  if (!isEditable.value) return
  dragOverIndex.value = idx
}

function onDragLeave() {
  dragOverIndex.value = null
}

function onDrop(idx) {
  if (!isEditable.value) return
  const from = dragIndex.value
  if (from !== null && from !== idx) {
    const exercises = form.value.exercises
    const [moved] = exercises.splice(from, 1)
    exercises.splice(idx, 0, moved)
  }
  dragIndex.value = null
  dragOverIndex.value = null
}

function onDragEnd() {
  dragIndex.value = null
  dragOverIndex.value = null
}

// Exercise / Set management
function addExercise() {
  if (!isEditable.value) return
  form.value.exercises.push(makeExercise())
}

function removeExercise(idx) {
  if (!isEditable.value) return
  form.value.exercises.splice(idx, 1)
}

function addSet(exIdx) {
  if (!isEditable.value) return
  const lastSet = form.value.exercises[exIdx].sets_of_reps.at(-1)
  form.value.exercises[exIdx].sets_of_reps.push(
    makeSet(lastSet ? { nb_reps: lastSet.nb_reps, weight: lastSet.weight } : {}),
  )
}

function removeSet(exIdx, setIdx) {
  if (!isEditable.value) return
  form.value.exercises[exIdx].sets_of_reps.splice(setIdx, 1)
}

// Validation
function validate() {
  const e = {}
  if (!form.value.name.trim()) e.name = 'Workout name is required.'
  if (form.value.exercises.length === 0) e.exercises = 'Add at least one exercise.'
  for (const ex of form.value.exercises) {
    if (!ex.exercise_definition) {
      e.exercises = 'Please select an exercise from the catalog.'
      break
    }
    if (ex.sets_of_reps.length === 0) {
      e.exercises = `"${ex.exercise_definition.name}" needs at least one set.`
      break
    }
  }
  errors.value = e
  return Object.keys(e).length === 0
}

// Save
async function handleSave() {
  if (!validate()) return
  saving.value = true
  try {
    if (isNew.value) {
      const payload = {
        name: form.value.name.trim(),
        description: form.value.description.trim(),
        exercises: form.value.exercises.map((ex) => ({
          exercise_definition_slug: ex.exercise_definition.slug,
          rest_time_after: ex.rest_time_after,
          sets_of_reps: ex.sets_of_reps.map((s) => ({
            nb_reps: s.nb_reps,
            weight: s.weight,
          })),
        })),
      }
      await createWorkout(payload)
    } else {
      if (isEditable.value) {
        const payload = {
          name: form.value.name.trim(),
          description: form.value.description.trim(),
          exercises: form.value.exercises.map((ex) => ({
            exercise_definition_slug: ex.exercise_definition.slug,
            rest_time_after: ex.rest_time_after,
            sets_of_reps: ex.sets_of_reps.map((s) => ({
              nb_reps: s.nb_reps,
              weight: s.weight,
            })),
          })),
        }
        await updateWorkout(workoutId.value, payload)
      } else {
        // limited edit: only patch existing SetOfReps fields
        const payload = {
          exercises: form.value.exercises.map((ex) => ({
            exercise_definition_slug: ex.exercise_definition.slug,
            sets_of_reps: ex.sets_of_reps.map((s) => ({
              nb_reps: s.nb_reps,
              weight: s.weight,
            })),
            rest_time_after: ex.rest_time_after,
          })),
        }
        await patchWorkout(workoutId.value, payload)
      }
    }
    router.push('/')
  } catch (err) {
    if (err.response?.data) {
      errors.value = { exercises: 'Save failed. Please check your input.' }
    }
  } finally {
    saving.value = false
  }
}

// Load existing workout for editing
onMounted(async () => {
  if (!isNew.value) {
    loading.value = true
    try {
      const data = await fetchWorkout(workoutId.value)
      form.value = {
        name: data.name,
        description: data.description,
        exercises: data.exercises.map((ex) => makeExercise(ex)),
      }
      // backend indicates whether workout is editable
      isEditable.value = data.is_editable ?? true
    } finally {
      loading.value = false
    }
  }
})
</script>

<style scoped>
.editor-page {
  padding: 1rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

.editor-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.editor-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.loading-text {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.editor-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.locked-notice {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border-left: 4px solid #facc15;
  background-color: #fefce8;
  color: #854d0e;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.field label {
  font-weight: 500;
  font-size: 0.875rem;
}

.field :deep(.p-inputnumber),
.field :deep(.p-inputnumber input) {
  width: 100%;
}

.field-error {
  color: #ef4444;
  font-size: 0.75rem;
}

.exercises-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.exercises-header {
  display: flex;
  align-items: center;
}

.add-exercise-row {
  display: flex;
  justify-content: flex-start;
}

.exercises-title {
  font-size: 1.125rem;
  font-weight: 600;
}

.empty-exercises {
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  color: var(--p-surface-400);
  border: 1px dashed var(--p-surface-300);
  border-radius: 0.5rem;
}

.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.exercise-card {
  border: 1px solid var(--p-surface-200);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.15s;
}

.exercise-card.drag-over {
  border-color: var(--p-primary-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--p-primary-color) 20%, transparent);
}

.exercise-card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.exercise-drag-handle {
  cursor: grab;
  color: var(--p-surface-400);
}

.exercise-drag-handle:hover {
  color: var(--p-surface-600);
}

.exercise-number {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: var(--p-primary-color);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.exercise-name-input {
  flex: 1;
}

.exercise-name-label {
  font-weight: 500;
}

.exercise-option {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.exercise-option-name {
  font-weight: 600;
}

.exercise-option-meta {
  font-size: 0.875rem;
  color: var(--p-surface-500);
}

.sets-section {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 2rem;
}

.sets-header-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--p-surface-500);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.set-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.set-col-num {
  width: 1.5rem;
  text-align: center;
  flex-shrink: 0;
}

.set-num-label {
  font-size: 0.875rem;
  color: var(--p-surface-400);
  font-weight: 500;
}

.set-col-info {
  display: none;
}

.set-col-weight {
  flex: 2;
  min-width: 0;
}

.set-col-weight :deep(.p-inputnumber),
.set-col-weight :deep(input) {
  width: 100%;
  min-width: 0;
}

.set-col-reps {
  flex: 1;
  min-width: 0;
}

.set-col-reps :deep(.p-inputnumber),
.set-col-reps :deep(input) {
  width: 100%;
  min-width: 0;
}

.set-col-actions {
  width: 2rem;
  flex-shrink: 0;
}

.add-set-btn {
  align-self: flex-start;
  margin-top: 0.25rem;
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  padding-top: 0.5rem;
}
</style>
