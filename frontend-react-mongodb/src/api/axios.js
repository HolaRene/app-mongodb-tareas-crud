import axios from "axios";

const Backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api'
const instancia = axios.create({
    baseURL: Backend,
    withCredentials: true, // para que axios sepa que necesita las credenciales para la peticion
})

export default instancia