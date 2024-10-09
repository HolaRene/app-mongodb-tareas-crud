import { z } from 'zod'

export const crearTareaSchema = z.object({
    title: z.string({
        required_error: 'El título es obligatorio',
    }).min(3).max(50),
    description: z.string({
        required_error: 'La descripción debe ser una cadena de caracteres y es requerido',
    }),
    date: z.string().datetime().optional(),
}) 