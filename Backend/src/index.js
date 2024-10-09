import app from './app.js'; // Asegúrate de incluir la extensión .js
import { conexionDb } from './db.js';
import { PORT } from './config.js'

conexionDb()// la conexion de la base de datos
app.listen(PORT, () => {
  console.log('El servidor está escuchando en el puerto', PORT);
});