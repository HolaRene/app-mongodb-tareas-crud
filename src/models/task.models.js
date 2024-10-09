import mongoose from "mongoose";

const tareaSquema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //Este hace una referencia al modelo user
        required: true,
    }
}, { timestamps: true })

export default mongoose.model('Tarea', tareaSquema)