import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PotrectRoutes() {
  const { loading, isAuthent } = useAuth()
  console.log('carga:', loading, 'Esta autenticado:', isAuthent)

  if (loading) return <h1>Loading</h1>

  if (!loading && !isAuthent) return <Navigate to='/login' replace />

  return <Outlet />
}

export default PotrectRoutes
