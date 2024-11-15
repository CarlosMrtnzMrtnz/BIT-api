const express = require('express')
const userController = require('../controllers/user.controller')
const loginController = require('../controllers/login.controller')
const router = express.Router()

// ----------------------------- rutas User ----------------------------
router.get('/usuarios', userController.getUser)
router.get('/user/:id', userController.getOneUser)
router.delete('/borrar/:id', userController.deleteUser)
router.post('/addUser', userController.addUser)
router.put('/actualizar/:id', userController.updateUser)

// ---------------------------rutas products ---------------------------

router.post('/validacion', loginController.login)

module.exports = router