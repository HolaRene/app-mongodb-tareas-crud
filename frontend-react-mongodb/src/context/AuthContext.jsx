import { createContext, useContext, useEffect, useState } from 'react'
import { registro, iniciarS, verifyToken } from '../api/auth'
import Cookie from 'js-cookie'

export const AuthContexto = createContext()

export const useAuth = () => {
  const contexto = useContext(AuthContexto)
  if (!contexto) {
    throw new Error('useAuth Debe estar dentro de un AuthProvider')
  }
  return contexto // { signup, user }  // esto es lo que se regresa para usarlo en cualquier lugar en la app.  // este es el estado que se va a utilizar en el componente
}

//principal
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null)
  const [isAuthent, setisAuthent] = useState(false)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const signup = async user => {
    try {
      const res = await registro(user)
      // console.log(res)
      setuser(res.data)
      setisAuthent(true)
    } catch (error) {
      setErrors(error.response.data)
      // console.error(error.response)
    }
  }
  const signing = async user => {
    try {
      const res = await iniciarS(user)
      console.log(res)
      setuser(res.data)
      setisAuthent(true)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.error])
      console.error(error.response.data)
    }
  }

  const salir = () => {
    Cookie.remove('token')
    setisAuthent(false)
    setuser(null)
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 4000) // esto es para que los errores se desaparezcan despues de 5 segundos.\
      return () => clearTimeout(timer) // esto es para que los errores se desaparezcan despues de 5 segundos.
    }
  }, [errors])

  useEffect(() => {
    async function check() {
      const galleta = Cookie.get()
      //comprobar el token,
      if (!galleta.token) {
        //no tiene dqatos de autentificacion, de usuario y no esta cargando
        setisAuthent(false)
        setLoading(false)
        return setuser(null)
      }
      try {
        const res = await verifyToken(galleta.token)
        // console.log(res)
        //si el backend no responde
        if (!res.data) {
          setisAuthent(false)
          setLoading(false)
          return
        }
        //si hay usuario se guarda en el estado y deja de cargar
        setisAuthent(true)
        setuser(res.data)
        setLoading(false)
      } catch (error) {
        //los errores de la operacion... se pondra en null cualquieer dato
        console.log(error)
        setisAuthent(false)
        setuser(null)
        setLoading(false)
      }
    }
    check()
  }, [])
  return (
    <AuthContexto.Provider
      value={{
        signup,
        user,
        isAuthent,
        errors,
        loading,
        salir, // esta linea es para el logout
        signing, // esta linea es para el login
      }}
    >
      {children}
    </AuthContexto.Provider>
  )
}
//se quedo en esta seccion de AuthContext falta el useState... el dia 04 de octubre
