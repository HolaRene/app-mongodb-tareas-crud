// app.js
import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import cookieParser from 'cookie-parser';
import { FRONTEND } from "./config.js";
import Tareas from "./routes/task.routes.js";
import authRoutes from './routes/auth.routes.js';  // Asegúrate de la extensión .js

const app = express();

app.use(cors(
    {
        origin: FRONTEND, // permitir peticiones solo desde alli
        credentials: true // para que las cookies sean transmitidas en el request y response
    }
)); // habilitamos CORS para permitir las peticiones
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())
//usar las rutas
app.use('/api', authRoutes);
app.use('/api', Tareas);

export default app;
