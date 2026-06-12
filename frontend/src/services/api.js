import axios from 'axios'
import { TOKEN_STORAGE_KEY } from '@/stores/auth'

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE || '',
  baseURL: 'http://localhost:8888',
  withCredentials: true,
})

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// CSRF defaults for Django session auth
api.defaults.xsrfCookieName = 'csrftoken'
api.defaults.xsrfHeaderName = 'X-CSRFToken'

export default api
