import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'

function Registro() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { signup, isAuthent, errors: registroErrors } = useAuth()

  useEffect(() => {
    if (isAuthent) {
      navigate('/tareas') // Usamos navigate correctamente
    }
  }, [isAuthent, navigate])

  const envio = handleSubmit(async valores => {
    signup(valores)
  })
  return (
    <div className='bg-zinc-800 p-10 rounded-md flex justify-center items-center h-[calc(100vh-100px)]'>
      <div className='bg-zinc-700 max-w-md w-full p-10 rounded-md'>
        {registroErrors.map((error, i) => (
          <div className='bg-red-500 text-slate-100 p-2 m-1 rounded' key={i}>
            {error}
          </div>
        ))}
        <h1 className='text-3xl font-bold my-2'>Registrarse</h1>
        <form onSubmit={envio}>
          <label htmlFor='nombre'>Nombre</label>
          <input
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            type='text'
            id='nombre'
            placeholder='Nombre de usuario'
            {...register('username', { required: true })}
          />
          {errors.username && (
            <p className='text-red-500'>El nombre es requerido</p>
          )}

          <label htmlFor='email'>Correo</label>
          <input
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            type='email'
            id='email'
            {...register('email', { required: true })}
            placeholder='Correo electrónico'
          />
          {errors.email && (
            <p className='text-red-500'>El correo es requerido</p>
          )}

          <label htmlFor='password'>Contraseña</label>
          <input
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            type='password'
            id='password'
            {...register('password', { required: true })}
            placeholder='Contraseña'
          />
          {errors.password && (
            <p className='text-red-500'>La contraseña es requerida</p>
          )}
          <button
            className='bg-cyan-800 text-slate-300 rounded p-2'
            type='submit'
          >
            Enviar Datos
          </button>
        </form>
        <p className='text-center mt-4'>
          ¿Tienes una cuenta?{' '}
          <Link className='text-sky-700' to='/login'>
            Inicia seción
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Registro
//se quedo en la registro de errores del backend hora 2:35
