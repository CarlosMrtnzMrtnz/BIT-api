const userModel = require("../models/user.model")

exports.getUser = async (req, res)=> {
    try {
        let data = await userModel.find()
        res.json(data)
    } catch (error) {
        console.log(error);
        res.send({error:"Ha ocurrido un error comunicate con el admin"})
    }
}

exports.getOneUser = async (req, res)=> {
    try {
        let id = req.params.id
        let user = await userModel.findOne({_id:id})
        res.json(user)
        
    } catch (error) {
        console.log(error);
        res.send({error:"Ha ocurrido un error comunicate con el admin"})
    }
}

exports.deleteUser = async (req, res)=> {
    try {
        let id = req.params.id
        if (id.length == 24) {   
            let user = await userModel.findById(req.params.id)
            if (user) {
                let deleteado = await userModel.findOneAndDelete({_id: id})
                console.log("Usuario eliminado correctamente");
                res.json(deleteado)
            } else {
                console.log("Usuario no encontrado");
                res.send({msj:"Usuario no encontrado"})
            }
        } else {
            res.send({msj:"Id no contiene los caracteres suficientes"})
        }
    } catch (error) {
        console.log(error);
        res.send({error:"Ha ocurrido un error comunicate con el admin"})
    }
}

exports.addUser = async (req, res)=>{
    try {
        let nombre = req.params.nombre
        let exist = await userModel.findOne({nombre: nombre})
        
        if (!exist) {
            let user = req.body
            let newUser = new userModel(user)
            await newUser.save()
            res.json(newUser)
        } else {
            res.send({msj:"Usuario ya existe"})
        }
    } catch (error) {
        console.log(error);
        res.send("Ha ocurrido un error comunicate con el admin")        
    }
}

exports.updateUser = async (req, res)=> {
    try {
        let id = await req.params.id
        let body = req.body
        if (id.length == 24) {
            let user = await userModel.findById(id)
            if (user) {

                user.nombre = body.nombre
                user.apellido = body.apellido
                user.edad = body.edad
                user.activo = body.activo
                // Object.assign(user, body)
                await userModel.findOneAndUpdate({_id:id},user)
                res.send("modificado")
            } else {
                res.send({error:"Usuario no encontrado"})
            }
        } else {
            console.log("Id proporcionada no es correcta");
            res.send({error:"Id no contiene los caracteres suficientes"})
        }
        
    } catch (error) {
        console.log(error);
        res.send({error:"Ha ocurrido un error comunicate con el admin"})
    }
}



