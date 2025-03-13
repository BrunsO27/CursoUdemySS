const { response } = require('express')

const usuariosGet = (req,res = response) => {
    res.json({
        msg: 'Petición get a mi api - Controlador'
    });
}

const usuariosPut = (req,res) => {
    res.status(400).json({
        msg: 'Petición put a mi api - Controlador'
    });
}

const usuariosPost = (req,res) => {
    res.status(201).json({
        msg: 'Petición post a mi api - Controlador'
    });
}

const usuariosDelete = (req,res) => {
    res.json({
        msg: 'Petición delete a mi api - Controlador'
    });
}

const usuariosPath = (req,res) => {
    res.json({
        msg: 'Petición patch a mi api - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath
}