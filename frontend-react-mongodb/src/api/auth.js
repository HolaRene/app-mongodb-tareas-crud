import axios from "./axios.js";

// const API = 'http://localhost:3000/api';

export const registro = (user) => axios.post('/registro', user);
export const iniciarS = (user) => axios.post('/login', user);
export const verifyToken = () => axios.get('/verificar')