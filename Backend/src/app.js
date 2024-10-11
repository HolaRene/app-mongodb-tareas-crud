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
app.use('/api', authRoutes);
app.use('/api', Tareas);

if (process.env.NODE_ENV === "production") {
    const path = await import("path");
    app.use(express.static("client/dist"));

    app.get("*", (req, res) => {
        console.log(path.resolve("client", "dist", "index.html"));
        res.sendFile(path.resolve("client", "dist", "index.html"));
    });
}

export default app;
