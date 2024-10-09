import User from '../models/user.models.js'
import bcrypt from 'bcryptjs'//encriptador de contrasenia
import { crearAccesToken } from "../libs/jwt.js";

import jwt from 'jsonwebtoken'
import { TOKEN_SCRET } from '../config.js';

export const registro = async (req, res) => {
    //datos que envia el usuario
    const { email, password, username } = req.body

    try {
        const userEncontrado = await User.findOne({ email })
        if (userEncontrado)
            return res.status(400).json(['El email ya está registrado'])

        const passwordHash = await bcrypt.hash(password, 10)//convertir un string a caracteres aleatorio. mejor dicho encritpar
        //creando el usuario
        const newUser = new User({
            email, password: passwordHash, username
        })

        //guardando el usuario
        const userSaved = await newUser.save()
        const token = await crearAccesToken({ id: userSaved._id })
        //re.cookie es un metodo de express para establecer una cookie
        res.cookie('token', token)
        res.json({
            msg: 'Usuario creado',
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}
export const login = async (req, res) => {
    //datos que envia el usuario
    const { email, password } = req.body

    try {
        //encontrar un usuario por su email
        const userFound = await User.findOne({ email });

        if (!userFound) return res.status(400).send({
            error: 'No se ha encontrado el usuario'
        })

        const isPassword = await bcrypt.compare(password, userFound.password);//comparar las contraseña del usuario, retorna un true o false
        if (!isPassword) return res.status(400).json({
            error: 'Contraseña incorrecta'
        })
        //del usuario encontrado se craera un token
        const token = await crearAccesToken({ id: userFound._id })
        //re.cookie es un metodo de express para establecer una cookie
        res.cookie('token', token)
        res.json({
            msg: 'Haz iniciado sesion',
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}
export const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0) //fecha de expiracion
    })
    res.status(200).send({ message: 'Sesión cerrada' })
}
export const perfil = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' })

    return res.json({
        msg: 'Perfil del Usuario',
        id: userFound._id,
        nombre: userFound.username,
        Correo: userFound.email,
        creado: userFound.createdAt,
        actualizado: userFound.updatedAt,
    })

    // El proyecto quedo aqui, el dia 25 de septiembre no aparece el token cuando se le hace una peticion get a /api/perfil despues de logearme
}
export const verificar = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ msg: 'No hay token, no se puede verificar' });

    jwt.verify(token, TOKEN_SCRET, async (err, user) => {
        if (err) return res.status(403).json({ error: 'No authorization' });

        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(404).json({ msg: 'Usuario no encontrado' });

        // Aquí ya tienes userFound disponible
        return res.json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
        });
    });
};
