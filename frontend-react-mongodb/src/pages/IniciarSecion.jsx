import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function IniciarSecion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { signing, errors: signingErrors, isAuthent } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthent) {
      navigate('/tareas') // Usamos navigate correctamente
    }
  }, [isAuthent, navigate]) // Se ejecuta cuando isAuthent cambia, y cuando navigate cambia

  const envio = handleSubmit(async datos => {
    signing(datos)
    // await login(valores) // Petición a API de inicio de sesión
  })

  return (
    <div className='bg-zinc-800 p-10 rounded-md flex justify-center items-center h-[calc(100vh-100px)]'>
      <div className='bg-zinc-700 max-w-md w-full p-10 rounded-md'>
        {signingErrors.map((error, i) => (
          <div className='bg-red-500 text-slate-100 p-2 m-1 rounded' key={i}>
            {error}
          </div>
        ))}
        <h1 className='text-3xl font-bold my-2'>Iniciar seción</h1>
        <form onSubmit={envio}>
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
            Iniciar seción
          </button>
        </form>
        <p className='text-center mt-4'>
          ¿No tienes una cuenta?{' '}
          <Link className='text-sky-700' to='/registro'>
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}

export default IniciarSecion
//nos quedamos en la parte de iniciar sesion en la parte de un nuevo div que abarca tod el formulario
