import { config } from 'dotenv';

config()
//conexion de la base de datos.
export const MONGODB_DATA = process.env.MONGODB_DATA || 'mongodb://localhost/mern-crud-auth'
export const TOKEN_SCRET = process.env.TOKEN_SCRET || '123456788'
export const FRONTEND = process.env.FRONTEND || 'http://localhost:5173'
export const PORT = process.env.PORT || 4000
// process.env.MONGODB_DATA ||