import { useAuth } from '../context/AuthContext'

function PerfilPage() {
  const { user, isAuthent } = useAuth()

  return (
    <div className='bg-zinc-800 h-[calc(100vh-100px)] flex flex-col justify-center items-center'>
      {isAuthent ? (
        <div className='bg-zinc-700 max-w-md w-full p-10 rounded-md text-center'>
          <h1 className='text-3xl font-bold text-white'>Perfil de Usuario</h1>
          <p className='text-xl text-gray-300 mt-4'>
            Bienvenido, {user?.username || 'Usuario'}
          </p>
          <div className='mt-6'>
            <p className='text-lg text-gray-400'>
              Correo: {user?.email || 'Correo no disponible'}
            </p>
            <p className='text-lg text-gray-400 mt-2'>
              ID: {user?.id || 'ID no disponible'}
            </p>
          </div>
        </div>
      ) : (
        <div>INICIO</div>
      )}
    </div>
  )
}

export default PerfilPage
