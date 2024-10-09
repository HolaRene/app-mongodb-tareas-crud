import { Router } from "express";
import { login, registro, logout, perfil, verificar } from "../controllers/auth.controller.js";
import { authRequerido } from "../middleware/validarToken.js";
import { validarSquema } from "../middleware/validar.middleware.js";
import { registroEsquema, loginEsquema } from "../schemas/auth.schema.js";

const rutas = Router()

rutas.post('/registro', validarSquema(registroEsquema), registro)
rutas.post('/login', validarSquema(loginEsquema), login)
rutas.post('/logout', logout)
//ruta protegida
rutas.get('/perfil', authRequerido, perfil)

//Ruta para verificar el token
rutas.get('/verificar', verificar)

export default rutas