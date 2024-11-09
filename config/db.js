const mongoose = require('mongoose')
require('dotenv').config()

const conectDB = async () => {
    try {
        let mongoURI = process.env.DB_MONGO
        await mongoose.connect(mongoURI)
        console.log("Conectado a la base de datos correctamente")
    } catch (error) {
        console.log(error);
        console.log("No se pudo conectar a la base de datos");
    }
}

module.exports = conectDB
