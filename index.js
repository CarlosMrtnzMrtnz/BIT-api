const express = require('express')
const router = require('./routes/router')
const conectDB = require('./config/db')
const app = express()
app.use(express.json())
require('dotenv').config()


const PORT = process.env.PORT
// let users = [
//     {
//         nombre:"carlos",
//         apellido:"Martinez",
//         id:1
//     },
//     {
//         nombre:"camilo",
//         apellido:"Uscategui",
//         id:2
//     },
//     {
//         nombre:"maria",
//         apellido:"Gomez",
//         id:3
//     }
// ]
// http://localhost:3000/api

app.use('/api', router)
conectDB()
// app.get('/usuarios', (req, res)=> {
//     res.json(users)
// })

// app.get('/user/:id', (req, res)=>{
//     console.log(req.params.id);
//     let id = req.params.id
//     let user = users.find(user=>user.id == id)
//     res.json(user)
// })

// app.delete('/borrar/:id', (req, res)=> {
//     let id = req.params.id
//     let indice = users.findIndex(user=>user.id == id)
//     console.log(indice);
    
//     let deleteado = users.splice(indice,1)
//     res.json(deleteado)
// })

// app.delete('/deleteAll', (req, res)=>{
//     users =[]
//     res.json(users)
// })

// app.post('/addUser/:nombre', (req, res)=> {
//     let nombre = req.params.nombre
//     let user = users.find(user=>user.nombre == nombre)
//     let newUser = req.body
// if (user != undefined) {
//     if(user.nombre == nombre){
//         res.send("User ya existe")
//     }
// } else if(user == undefined) {
//     users.push(newUser)
//     res.json(newUser)
// }
// })

// app.put('/actualizar/:id', (req, res)=> {
//     let id = req.params.id
//     let user = users.find(user=> user.id == id)

//     user.nombre = req.body.nombre
//     user.apellido = req.body.apellido

//     res.json(user)

// })

app.listen(PORT || 3000 ,()=>{
    console.log(`Server running on port: ${PORT}`);
})
