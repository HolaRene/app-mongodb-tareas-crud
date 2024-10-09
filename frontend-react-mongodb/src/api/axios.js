import axios from "axios";

const instancia = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true, // para que axios sepa que necesita las credenciales para la peticion
})

export default instancia