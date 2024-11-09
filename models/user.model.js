const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    activo: {
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = mongoose.model('user', userModel)


// {
//     "nombre":"Carlos",
//     "apellido":"Martinez",
//     "edad": 18,
//     "activo": true
// }