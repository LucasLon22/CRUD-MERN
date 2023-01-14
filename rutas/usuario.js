const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuario', eschemausuario)
module.exports = router


// Ruta de prueba
// router.get('/ejemplo', (req, res) => {
//     res.end('Saludo carga desde ruta ejemplo')
// })


//LLAMADA A NUESTRA API PARA AGREGAR USUARIOS
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function (err) {
        if (!err) {
            res.send('Usuario agregado correctamente')
        } else {
            res.send(err)
        }
    })
})

//LLAMADA A NUESTRA API PARA OBTENER LA LISTA DE USUARIOS
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})


//OBTENER DATA USUARIO PARA EDITAR
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})


//Actualizar usuario
router.post('/actualizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({ idusuario: req.body.idusuario }, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
        

    }, (err) =>{
        if (!err) {
            res.send('Usuario Actualizado correctamente')
        } else {
            res.send(err)
        }
    })
})


//borrar usuario
router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario },
        (err) => {
            if (!err) {
                res.send('Usuario Eliminado correctamente')
            } else {
                res.send(err)
            }
        }
    )
})