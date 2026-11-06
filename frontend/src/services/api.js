import axios from 'axios'
import { TOKEN_STORAGE_KEY } from '@/stores/auth'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '',
})

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api
