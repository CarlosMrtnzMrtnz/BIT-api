const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.verificar = async (req, res, next)=> {
    try {
       let token = req.headers.authorization

       if (token != undefined) { 
           token = token.split(' ')[1]
            let SECRET_KEY_JWT = process.env.SECRET_KEY_JWT
           jwt.verify( token, SECRET_KEY_JWT, (error, decoded)=> {
    
            if (error) {
                res.status(400).send({error: "Token proporcionado invalido"})
            }
             req.usuario = decoded
            next()
           })
       } else {
        res.status(400).send({error: "Token no proporcionado"})
       }
    } catch (error) {
        console.log(error);
        res.status(500).send({error: "Ha ocurrido algo comunicate con el admin"})
    }
}