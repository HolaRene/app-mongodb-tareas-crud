import { z } from "zod";
//validar los datos del usuario
export const registroEsquema = z.object({
    username: z.string({
        required_error: "El username es requerido"
    }),//.min(2).max(20),
    email: z.string({
        required_error: "El email es requerido",
    }).email(),
    password: z.string({
        required_error: "La password es requerida",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres"
    })
})

export const loginEsquema = z.object({
    email: z.string({
        required_error: "El email es requerido",
    }).email(),
    password: z.string({
        required_error: "La contraseña es requerida",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres"
    })
})