import jwt from 'jsonwebtoken'
import { TOKEN_SCRET } from '../config.js'

export const authRequerido = (req, res, next) => {
    // const cookies = req.cookies
    const { token } = req.cookies
    // console.log(cookies)
    if (!token)
        return res.status(401).json({
            msg: 'No hay token, autorizacion denegada'
        })

    jwt.verify(token, TOKEN_SCRET, (err, user) => {
        if (err) return res.status(err).json({
            msg: "token invalido"
        })
        req.user = user
        // console.log(user)
        next()
    })
}