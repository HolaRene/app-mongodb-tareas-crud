import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navegacion() {
  const { isAuthent, salir, user } = useAuth()
  console.log(user)

  return (
    <nav className='bg-zinc-600 my-3 flex flex-col md:flex-row justify-between py-3 px-5 md:px-10'>
      <div className='flex justify-between w-full md:w-auto'>
        <Link to={isAuthent ? '/perfil' : '/'}>
          <h1 className='text-xl md:text-2xl font-bold'>
            Aplicación de Tareas
          </h1>
        </Link>
      </div>

      <ul className='flex flex-col md:flex-row gap-y-3 gap-x-2 mt-3 md:mt-0'>
        {isAuthent ? (
          <>
            <li className='text-center md:text-left'>
              Bienvenido <i className='font-mono font-bold'>{user.username}</i>
            </li>
            <li>
              <Link
                to={'/tarea/nueva'}
                className='bg-indigo-600 px-4 py-2 rounded-sm text-center block'
              >
                Crear tarea
              </Link>
            </li>
            <li>
              <Link
                to={'/'}
                onClick={() => {
                  salir()
                }}
                className='bg-pink-700 hover:bg-pink-600 px-4 py-2 rounded-sm text-center block'
              >
                Cerrar sesión
              </Link>
            </li>
            <li>
              <Link
                to={'/tareas'}
                className='bg-indigo-800 hover:bg-indigo-600 px-4 py-2 rounded-sm text-center block'
              >
                Tareas
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to={'/login'}
                className='bg-indigo-600 hover:bg-indigo-400 px-4 py-2 rounded-sm text-center block'
              >
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link
                to={'/registro'}
                className='bg-teal-600 px-4 hover:bg-teal-700 py-2 rounded-sm text-center block'
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navegacion
