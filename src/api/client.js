import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
  withCredentials: false, // set true if using session/cookies
})

// Helper to turn relative media paths into absolute (in case your DRF didn’t build absolute URLs)
export const mediaUrl = (url) => {
  if (!url) return url
  if (url.startsWith('http')) return url
  const base = (
    import.meta.env.VITE_MEDIA_BASE || 'http://localhost:8000'
  ).replace(/\/$/, '')
  return `${base}${url.startsWith('/') ? '' : '/'}${url}`
}
