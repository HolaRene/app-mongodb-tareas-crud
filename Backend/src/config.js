import { config } from 'dotenv';

config()
//conexion de la base de datos.
export const MONGODB_DATA = process.env.MONGODB_DAT || 'mongodb://localhost/test'
export const TOKEN_SCRET = process.env.TOKEN_SCRETs || '123456788'
export const FRONTEND = process.env.FRONTENDd || 'http://localhost:5173'
export const PORT = process.env.PORT || 4000
