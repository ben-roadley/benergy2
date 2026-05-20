<template>
  <div class="login-page">
    <Card class="login-card">
      <template #title>Login</template>
      <template #content>
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-field">
            <label for="username">Username</label>
            <InputText id="username" v-model="username" class="form-input" />
          </div>
          <div class="form-field">
            <label for="password">Password</label>
            <Password id="password" v-model="password" :feedback="false" class="form-input" toggleMask />
          </div>
          <Message v-if="error" severity="error">{{ error }}</Message>
          <Button type="submit" label="Login" :loading="loading" class="form-submit" />
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Password from 'primevue/password'

const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleLogin() {
  error.value = ''
  loading.value = true
  try {
    await auth.login(username.value, password.value)
    router.push('/')
  } catch (e) {
    error.value = e.response?.data?.error || 'Login failed.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-card {
  width: 100%;
  max-width: 28rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-input {
  width: 100%;
}

.form-submit {
  width: 100%;
}
</style>
