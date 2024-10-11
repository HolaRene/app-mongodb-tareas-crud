import { config } from 'dotenv';

config()
//conexion de la base de datos.
export const MONGODB_DATA = process.env.MONGODB_DATA
export const TOKEN_SCRET = process.env.TOKEN_SCRET || '123456788'
export const PORT = process.env.PORT || 3000
