import axios from "axios";

const baseURL =
    import.meta.env.MODE === "development"
        ? "http://localhost:3000/api"  // URL de desarrollo
        : "https://backend-mern-tareas.onrender.com";  // URL de producción

const instancia = axios.create({
    baseURL: baseURL,
    withCredentials: true, // para que axios sepa que necesita las credenciales para la petición
});

export default instancia;