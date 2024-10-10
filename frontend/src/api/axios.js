import axios from "axios";


const instancia = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true, // para que axios sepa que necesita las credenciales para la peticion
})

export default instancia