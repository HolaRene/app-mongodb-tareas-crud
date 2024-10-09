import { useForm } from 'react-hook-form'
import { useTask } from '../context/TaskContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

function TareaNueva() {
  const { register, handleSubmit, setValue } = useForm()
  const nav = useNavigate()
  const params = useParams()
  // Obtener las tareas de la base de datos y loguearlas en consola.
  const { cTarea, getTareaId, updateTarea } = useTask()

  useEffect(() => {
    async function cargarTareaID() {
      if (params.id) {
        const tarea = await getTareaId(params.id)
        console.log(tarea)
        setValue('title', tarea.title)
        setValue('description', tarea.description)
        setValue('date', dayjs(tarea.date).format('YYYY-MM-DD')) // Convertir fecha de UTC a formato DD/MM/YYYY.
      }
    }
    cargarTareaID()
  }, [])

  const onSubmit = handleSubmit(data => {
    const fechaValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    }
    console.log(fechaValid)

    if (params.id) {
      updateTarea(params.id, fechaValid)
    } else {
      cTarea(fechaValid)
      // Enviar datos a la API para guardar la tarea en la base de datos.
      // Se puede usar el hook useHttpClient para realizar la petición HTTP.
    }
    nav('/tareas')
  })
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Titulo</label>
        <input
          className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md m-1'
          type='text'
          placeholder='Título de la tarea'
          {...register('title')}
          autoFocus
        />
        <label htmlFor='description'>Descripción</label>
        <textarea
          className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md'
          rows='3'
          placeholder='Descripción de la tarea'
          {...register('description')}
        ></textarea>
        <label htmlFor='date'>Fecha</label>
        <input
          className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md m-1'
          type='date'
          id='date'
          {...register('date')}
        />
        <button className='bg-cyan-600 p-1 text-stone-100 rounded-md'>
          Guardar
        </button>
      </form>
    </div>
  )
}
export default TareaNueva
