// app.js
import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import cookieParser from 'cookie-parser';
import Tareas from "./routes/task.routes.js";
import authRoutes from './routes/auth.routes.js';  // Asegúrate de la extensión .js

const app = express();
const allowedOrigins = [
    'https://frontend-tareas-crud.onrender.com',
    'http://localhost:5173'
];

// Configuración dinámica de CORS
app.use(cors({
    origin: function (origin, callback) {
        // Permitir solicitudes sin origen (por ejemplo, Postman o cURL)
        if (!origin) return callback(null, true);

        // Verificar si el origen de la solicitud está en la lista de permitidos
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true, // Permitir cookies y credenciales
}));
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
//usar las rutas
app.use('/api', authRoutes);
app.use('/api', Tareas);

export default app;
