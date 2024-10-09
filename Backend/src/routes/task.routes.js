import { Router } from "express";
import { authRequerido } from "../middleware/validarToken.js";
import { actuaTarea, eliminarTarea, getTareas, getTarea, crearTarea } from '../controllers/task.controoller.js'
import { validarSquema } from "../middleware/validar.middleware.js";
import { crearTareaSchema } from "../schemas/tarea.schema.js";

const rutas = Router()
//Inicio
rutas.get('/tareas', authRequerido, getTareas)
//Obtener las tareas por el id
rutas.get('/tareas/:id', authRequerido, getTarea)
//Crear una tarea
rutas.post('/tareas', authRequerido, validarSquema(crearTareaSchema), crearTarea)
//Eliminar tareas
rutas.delete('/tareas/:id', authRequerido, eliminarTarea)
//Actualizar tareas
rutas.put('/tareas/:id', authRequerido, actuaTarea)

export default rutas