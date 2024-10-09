import mongoose from "mongoose";
import { MONGODB_DATA } from "./config.js";

export const conexionDb = async () => {
    try {
        await mongoose.connect(MONGODB_DATA)
        console.log('>>> Se ha connectado la base de datos')
    }
    catch (error) {
        console.log('Es es el error de la base de datos', error)
    }
}

