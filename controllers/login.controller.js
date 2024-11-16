const userModel = require("../models/user.model");
require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        let infoUser = req.body

        let user = await userModel.findOne({email: infoUser.email})

        if (user) {
            let clave = infoUser.password
            if (user.password == clave) {
                let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT 
                let payload = {
                    id: user._id,
                    nombre: user.nombre,
                    roll: user.roll
                }
                let token = jwt.sign(payload, SECRET_KEY_JWT, {expiresIn: '24h'})
                res.status(200).send({token})
            } else{ 
                res.status(400).send({msj:"Credenciales invalidas (clave)"})
            }
        } else {
            res.status(400).send({msj:"Credenciales invalidas (correo)"})
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({error:"Ha ocurrido algo comunicate con el admin"})
    }
}