import app from './app.js'; // Asegúrate de incluir la extensión .js
import { conexionDb } from './db.js';

conexionDb()// la conexion de la base de datos
app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});