import mongoose from "mongoose";

//creando un esquema de los datos que se van a guardar en la base de datos, nombre, email, contrasenia
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
})
export default mongoose.model('User', userSchema)