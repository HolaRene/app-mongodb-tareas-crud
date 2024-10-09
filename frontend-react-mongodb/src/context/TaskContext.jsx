import { act, createContext, useContext, useState } from 'react'
import {
  crearTarea,
  getTareas,
  eliminarTarea,
  obtenerTareaPorId,
  actualizarTarea,
} from '../api/task'

const TareasContexto = createContext()

export const useTask = () => {
  const context = useContext(TareasContexto)
  if (!context) {
    throw new Error('Debe estar dentro de un Provider de Tareas')
  }
  return context
}

export function TaskProvider({ children }) {
  const [tareas, setTareas] = useState([])

  const obtenerTareas = async () => {
    try {
      const res = await getTareas()
      setTareas(res.data)
      console.log(res.data)
    } catch (error) {
      console.error('error en obtener tarea', error)
    }
  }

  const cTarea = async tarea => {
    const res = await crearTarea(tarea)
    console.log(res)
  }
  const eliTarea = async id => {
    try {
      const res = await eliminarTarea(id)
      if (res.status === 204)
        setTareas(tareas.filter(tarea => tarea._id !== id))
    } catch (error) {
      console.error('error en eliminar tarea', error)
    }
  }
  const getTareaId = async id => {
    try {
      const res = await obtenerTareaPorId(id)
      return res.data
    } catch (error) {
      console.log('error en obtener tarea por id', error)
    }
  }
  const updateTarea = async (id, data) => {
    try {
      await actualizarTarea(id, data)
    } catch (error) {
      console.log('error en actualizar tarea', error)
    }
  }
  return (
    <TareasContexto.Provider
      value={{
        tareas,
        eliTarea,
        cTarea,
        obtenerTareas,
        getTareaId,
        updateTarea,
      }}
    >
      {children}
    </TareasContexto.Provider>
  )
}
