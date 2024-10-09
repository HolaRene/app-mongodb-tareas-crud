import { useEffect } from 'react'
import { useTask } from '../context/TaskContext'
import Tarjeta from '../components/TarjetaTarea'

function Tareas() {
  const { obtenerTareas, tareas } = useTask()

  useEffect(() => {
    obtenerTareas() // Se ejecuta cuando se carga la página o cuando se actualiza el estado del contexto TaskContext
  }, [])
  if (tareas.length === 0)
    return <h1 className='text-2xl text-center'>No hay tareas</h1>

  //se quedo una hora antes de terminar el video... obtener las tareas desde el backend
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-1 '>
      {tareas.map(tarea => (
        <Tarjeta key={tareas._id} tarea={tarea} />
      ))}
    </div>
  )
}

export default Tareas
