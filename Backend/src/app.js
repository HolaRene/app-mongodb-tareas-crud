// app.js
import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import cookieParser from 'cookie-parser';
import Tareas from "./routes/task.routes.js";
import authRoutes from './routes/auth.routes.js';  // Asegúrate de la extensión .js

const app = express();
const FRONTEND_URL = ['http://localhost:5173', process.env.FRONTEND_URL];

// Configuración dinámica de CORS
app.use(
    cors({
        credentials: true,
        origin: FRONTEND_URL,
    })
);
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
//usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api', Tareas);
app.get('/', (req, res) => {
    res.send('API de Tareas');
})

export default app;
