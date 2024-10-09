import { TOKEN_SCRET } from "../config.js";
import jwt from "jsonwebtoken";
export function crearAccesToken(playload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            playload,
            TOKEN_SCRET,
            {
                expiresIn: "1d"//tiempo de expiration
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        )
    })
}

