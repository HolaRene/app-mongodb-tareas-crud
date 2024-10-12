import Tarea from '../models/task.models.js';


export const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find({
            user: req.user.id//comparando los id 
        }).populate('user')//extraer todos los datos del usuario
        console.log(req.user)
        if (!tareas) return res.status(404).json({ msg: 'No hay tareas' })
        res.json(tareas)
    } catch (error) {
        return res.status(500).json({ msg: ' error en el servidor' })
    }
}

export const crearTarea = async (req, res) => {
    try {
        //recibiendo los datos
        const { title, description, date } = req.body
        //creando una nueva tarea
        const newTarea = new Tarea({ title, description, date, user: req.user.id })
        // console.log(req.user)
        //guardando la tarea
        const savatarea = await newTarea.save()
        //enviando la tarea
        res.json(savatarea)
    } catch (error) {
        return res.status(500).json({ error: 'error en el servidor' })
    }
}
export const getTarea = async (req, res) => {
    try {
        //buscando la tarea
        const tarea = await Tarea.findById(req.params.id).populate('user')
        if (!tarea) return res.status(404).json({ msg: 'La tarea no existe' })
        res.json(tarea)
    } catch (error) {
        return res.status(404).json({ msg: 'La tarea no encontrada' })
    }
}
export const eliminarTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id)
        if (!tarea) return res.status(404).json({ msg: 'La tarea no existe' })
        res.status(204).json({ msg: 'Tarea eliminada' })
    } catch (error) {
        return res.status(500).json({ error: 'error en el servidor' })
    }
}
export const actuaTarea = async (req, res) => {
    try {
        const { title, description, date } = req.body
        // const newTarea = { title, description, date }
        const tarea = await Tarea.findOneAndUpdate(
            { _id: req.params.id },
            { title, description, date },
            { new: true }
        );
        if (!tarea) return res.status(404).json({ msg: 'La tarea no existe' })
        res.json(tarea)
    } catch (error) {
        return res.status(500).json({ msg: 'error en el servidor' })
    }
}

// Se queda aqui en la secion de las tareas el dia 28 del 9
// Se queda aqui en la secion de las tareas el dia 2 del 10 ya se pueden crear las tareas
// se queda aqui en la secion de las tarea el dia 8 y esta en la seccion de editar antes 4:13