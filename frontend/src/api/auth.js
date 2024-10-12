import axios from "./axios.js";

// const API = 'http://localhost:3000/api';

export const registro = (user) => axios.post('/auth/registro', user);
export const iniciarS = (user) => axios.post('/auth/login', user);
export const verifyToken = () => axios.get('/auth/verificar')