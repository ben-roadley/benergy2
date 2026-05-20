<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'

const auth = useAuthStore()
const router = useRouter()

async function handleLogout() {
  await auth.logout()
  router.push('/login')
}
</script>

<template>
  <Toast />
  <ConfirmDialog />
  <header v-if="auth.isAuthenticated" class="app-header">
    <span class="app-logo" @click="router.push('/')">Benergy</span>
    <div class="app-nav">
      <span class="app-nav-link" @click="router.push('/profile')">{{ auth.user?.display_name || auth.user?.username }}</span>
      <Button label="Logout" severity="secondary" @click="handleLogout" />
    </div>
  </header>
  <RouterView />
</template>

<style>
body {
  font-family: var(--p-font-family, ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji');
}
</style>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.app-logo {
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
}

.app-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.app-nav-link {
  cursor: pointer;
}

.app-nav-link:hover {
  text-decoration: underline;
}
</style>
