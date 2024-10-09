import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/IniciarSecion'
import Navegacion from './components/Navegacion'
import Registro from './pages/Registro'
import TareasNueva from './pages/TareaNueva'
import Tareas from './pages/Tareas'
import PerfilPage from './pages/PerfilPage'
import Inicio from './pages/Inicio'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'

import Protect from './pages/PotrectRoutes'
export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className='container mx-auto px-10 '>
            <Navegacion />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/registro' element={<Registro />} />
              <Route path='/login' element={<Login />} />

              {/* las tareas son rutas protegidas*/}
              <Route element={<Protect />}>
                <Route path='/tareas' element={<Tareas />} />
                <Route path='/tarea/nueva' element={<TareasNueva />} />
                <Route path='/perfil' element={<PerfilPage />} />
                <Route path='/tarea/:id' element={<TareasNueva />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}
//BrowserRouter es el contenedor
//Se quedo con los nuevos archivos de las rutas 3:02 hr
