import axios from './axios'

export const getTareas = () => axios.get('/tareas')

export const obtenerTareaPorId = (id) => axios.get(`/tareas/${id}`)

export const crearTarea = (tarea) => axios.post('/tareas', tarea)

export const actualizarTarea = (id, tarea) => axios.put(`/tareas/${id}`, tarea)

export const eliminarTarea = (id) => axios.delete(`/tareas/${id}`)