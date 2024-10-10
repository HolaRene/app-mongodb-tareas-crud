import mongoose from 'mongoose';
import { MONGODB_DATA } from './config.js'; // Asegúrate de que la ruta sea correcta

const conexionDb = async () => {
    try {
        await mongoose.connect(MONGODB_DATA, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.error("Error en la conexión a la base de datos", error);
    }
};

export default conexionDb;
