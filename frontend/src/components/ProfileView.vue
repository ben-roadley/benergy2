<script setup>
import { ref, watch, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useConfirm } from 'primevue/useconfirm'
import { useProfileStore } from '@/stores/profile'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'
import MultiSelect from 'primevue/multiselect'
import Textarea from 'primevue/textarea'
import DatePicker from 'primevue/datepicker'
import Message from 'primevue/message'

const toast = useToast()
const confirm = useConfirm()
const profileStore = useProfileStore()

// --- Label maps (local, not from backend) ---
const GOAL_LABELS = {
  weight_loss: 'Weight loss',
  strength_gain: 'Strength gain',
  general_health: 'General health',
  endurance: 'Endurance',
  sport_performance: 'Sport performance',
  injury_prevention_longevity: 'Injury prevention & longevity',
  flexibility_mobility: 'Flexibility & mobility',
  other: 'Other',
}

const EQUIPMENT_LABELS = {
  resistance_bands: 'Resistance bands',
  dumbbells: 'Dumbbells',
  barbell_and_plates: 'Barbell & plates',
  pull_up_bar: 'Pull-up bar',
  kettlebell: 'Kettlebell',
  bodyweight_only: 'Bodyweight only',
  other: 'Other',
}

const SEX_LABELS = {
  male: 'Male',
  female: 'Female',
  prefer_not_to_say: 'Prefer not to say',
}

const FITNESS_LEVEL_LABELS = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  athlete: 'Athlete',
}

const SESSION_DURATION_LABELS = {
  '20_30': '20–30 min',
  '30_45': '30–45 min',
  '45_60': '45–60 min',
  '60_plus': '60+ min',
}

const SLEEP_QUALITY_LABELS = {
  poor: 'Poor',
  average: 'Average',
  good: 'Good',
}

const STRESS_LEVEL_LABELS = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
}

function toOptions(values, labelMap) {
  return (values || []).map((v) => ({ label: labelMap[v] ?? v, value: v }))
}

// --- Form state ---
const form = ref({
  display_name: '',
  date_of_birth: null,
  sex: null,
  weight_kg: null,
  height_cm: null,
  fitness_level: null,
  goals: [],
  equipment: [],
  session_duration: null,
  training_days_per_week: null,
  injury_history: '',
  lifestyle_description: '',
  sleep_quality: null,
  stress_level: null,
})

const saveError = ref(null)

function parseApiError(e) {
  const data = e?.response?.data
  if (!data || typeof data !== 'object') return 'Failed to save profile. Please try again.'
  const messages = []
  for (const [field, errors] of Object.entries(data)) {
    const label = field === 'non_field_errors' ? '' : `${field.replace(/_/g, ' ')}: `
    const text = Array.isArray(errors) ? errors.join(' ') : String(errors)
    messages.push(`${label}${text}`)
  }
  return messages.join('\n') || 'Failed to save profile. Please try again.'
}

function populateForm(profile) {
  if (!profile) return
  form.value = {
    display_name: profile.display_name ?? '',
    date_of_birth: profile.date_of_birth ? new Date(profile.date_of_birth) : null,
    sex: profile.sex || null,
    weight_kg: profile.weight_kg ? parseFloat(profile.weight_kg) : null,
    height_cm: profile.height_cm ?? null,
    fitness_level: profile.fitness_level || null,
    goals: profile.goals ?? [],
    equipment: profile.equipment ?? [],
    session_duration: profile.session_duration || null,
    training_days_per_week: profile.training_days_per_week ?? null,
    injury_history: profile.injury_history ?? '',
    lifestyle_description: profile.lifestyle_description ?? '',
    sleep_quality: profile.sleep_quality || null,
    stress_level: profile.stress_level || null,
  }
}

watch(() => profileStore.profile, (profile) => {
  populateForm(profile)
}, { immediate: true })

onMounted(async () => {
  await Promise.all([profileStore.fetchProfile(), profileStore.fetchOptions()])
})

// --- Actions ---
async function handleSave() {
  saveError.value = null
  const payload = {
    ...form.value,
    date_of_birth: form.value.date_of_birth
      ? form.value.date_of_birth.toISOString().slice(0, 10)
      : null,
    sex: form.value.sex ?? '',
    fitness_level: form.value.fitness_level ?? '',
    session_duration: form.value.session_duration ?? '',
    sleep_quality: form.value.sleep_quality ?? '',
    stress_level: form.value.stress_level ?? '',
  }
  try {
    await profileStore.saveProfile(payload)
    saveError.value = null
    toast.add({ severity: 'success', summary: 'Profile saved', life: 3000 })
  } catch (e) {
    saveError.value = parseApiError(e)
    toast.add({ severity: 'error', summary: 'Could not save profile', detail: saveError.value, life: 5000 })
  }
}

function handleClear() {
  confirm.require({
    message: 'This will reset all profile data. Are you sure?',
    header: 'Clear profile data',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: { label: 'Cancel', severity: 'secondary' },
    acceptProps: { label: 'Clear', severity: 'danger' },
    accept: async () => {
      try {
        await profileStore.clearProfile()
        toast.add({ severity: 'info', summary: 'Profile cleared', life: 3000 })
      } catch {
        toast.add({ severity: 'error', summary: 'Failed to clear profile', life: 4000 })
      }
    },
  })
}
</script>

<template>
  <div class="profile-page">
    <div>
      <h1 class="profile-title">Your profile</h1>
      <p class="profile-subtitle">
        This information helps personalise your workout recommendations. The more you fill in, the better the advice.
        All fields are optional.
      </p>
    </div>

    <div v-if="profileStore.loading" class="profile-loading">Loading…</div>

    <template v-else>
      <!-- Section 1: About you -->
      <section class="profile-section">
        <h2 class="section-heading">About you</h2>

        <div class="form-field">
          <label class="field-label">Display name</label>
          <InputText v-model="form.display_name" placeholder="How should we call you?" />
        </div>

        <div class="form-field">
          <label class="field-label">Date of birth</label>
          <DatePicker v-model="form.date_of_birth" dateFormat="yy-mm-dd" showIcon />
        </div>

        <div class="form-field">
          <label class="field-label">Sex</label>
          <Select
            v-model="form.sex"
            :options="toOptions(profileStore.options?.sex, SEX_LABELS)"
            optionLabel="label"
            optionValue="value"
            placeholder="Select…"
          />
        </div>

        <div class="two-col-grid">
          <div class="form-field">
            <label class="field-label">Weight (kg)</label>
            <InputNumber v-model="form.weight_kg" :minFractionDigits="1" :maxFractionDigits="1" :min="0.1" />
          </div>
          <div class="form-field">
            <label class="field-label">Height (cm)</label>
            <InputNumber v-model="form.height_cm" :min="1" :useGrouping="false" />
          </div>
        </div>
      </section>

      <!-- Section 2: Your training -->
      <section class="profile-section">
        <h2 class="section-heading">Your training</h2>

        <div class="form-field">
          <label class="field-label">Goals</label>
          <MultiSelect
            v-model="form.goals"
            :options="toOptions(profileStore.options?.goals, GOAL_LABELS)"
            optionLabel="label"
            optionValue="value"
            placeholder="Select your goals…"
          />
        </div>

        <div class="form-field">
          <label class="field-label">Fitness level</label>
          <Select
            v-model="form.fitness_level"
            :options="toOptions(profileStore.options?.fitness_level, FITNESS_LEVEL_LABELS)"
            optionLabel="label"
            optionValue="value"
            placeholder="Select…"
          />
        </div>

        <div class="form-field">
          <label class="field-label">
            Equipment available
            <span class="recommended-tag">Recommended</span>
          </label>
          <MultiSelect
            v-model="form.equipment"
            :options="toOptions(profileStore.options?.equipment, EQUIPMENT_LABELS)"
            optionLabel="label"
            optionValue="value"
            placeholder="Select equipment…"
          />
        </div>

        <div class="form-field">
          <label class="field-label">
            Preferred session duration
            <span class="recommended-tag">Recommended</span>
          </label>
          <Select
            v-model="form.session_duration"
            :options="toOptions(profileStore.options?.session_duration, SESSION_DURATION_LABELS)"
            optionLabel="label"
            optionValue="value"
            placeholder="Select…"
          />
        </div>

        <div class="form-field">
          <label class="field-label">Training days per week</label>
          <InputNumber v-model="form.training_days_per_week" :min="1" :max="7" :useGrouping="false" />
        </div>
      </section>

      <!-- Section 3: Your lifestyle -->
      <section class="profile-section">
        <h2 class="section-heading">Your lifestyle</h2>

        <div class="form-field">
          <label class="field-label">
            Injury history
            <span class="recommended-tag">Recommended</span>
          </label>
          <Textarea
            v-model="form.injury_history"
            :maxlength="300"
            rows="3"
            placeholder="Any past or current injuries we should know about…"
          />
        </div>

        <div class="form-field">
          <label class="field-label">Lifestyle description</label>
          <Textarea
            v-model="form.lifestyle_description"
            :maxlength="500"
            rows="3"
            placeholder="Describe your daily activity level, work, commute…"
          />
        </div>

        <div class="form-field">
          <label class="field-label">Sleep quality</label>
          <Select
            v-model="form.sleep_quality"
            :options="toOptions(profileStore.options?.sleep_quality, SLEEP_QUALITY_LABELS)"
            optionLabel="label"
            optionValue="value"
            placeholder="Select…"
          />
        </div>

        <div class="form-field">
          <label class="field-label">Stress level</label>
          <Select
            v-model="form.stress_level"
            :options="toOptions(profileStore.options?.stress_level, STRESS_LEVEL_LABELS)"
            optionLabel="label"
            optionValue="value"
            placeholder="Select…"
          />
        </div>
      </section>

      <!-- Save error -->
      <Message v-if="saveError" severity="error">{{ saveError }}</Message>

      <!-- Actions -->
      <div class="profile-actions">
        <Button
          label="Save profile"
          icon="pi pi-check"
          :loading="profileStore.loading"
          @click="handleSave"
        />
        <Button
          label="Clear all profile data"
          severity="danger"
          outlined
          @click="handleClear"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.profile-page {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.profile-subtitle {
  font-size: 0.875rem;
  color: var(--p-surface-500);
}

.profile-loading {
  text-align: center;
  color: var(--p-surface-400);
}

.profile-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-heading {
  font-size: 1.125rem;
  font-weight: 600;
  border-bottom: 1px solid var(--p-surface-200);
  padding-bottom: 0.25rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.field-label {
  font-size: 0.875rem;
  font-weight: 500;
}

.recommended-tag {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--p-surface-400);
  margin-left: 0.25rem;
}

.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.profile-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
}

/* Make PrimeVue inputs fill their form-field container */
.form-field :deep(.p-inputtext),
.form-field :deep(.p-select),
.form-field :deep(.p-multiselect),
.form-field :deep(.p-datepicker),
.form-field :deep(.p-textarea),
.form-field :deep(.p-inputnumber),
.form-field :deep(.p-inputnumber input) {
  width: 100%;
}
</style>
