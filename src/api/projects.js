import { api } from './client'

export const fetchProjects = async (params = {}) => {
  const { data } = await api.get('projects/', { params })
  return data
}

export const fetchProject = async (id) => {
  const { data } = await api.get(`projects/${id}/`)
  return data
}
