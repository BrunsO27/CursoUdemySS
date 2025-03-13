const { response } = require('express');
const { request } = require('express');

const usuariosGet = (req = request,res = response) => {

    const {q, nombre='No name', apikey='No api key'} = req.query;

    res.json({
        msg: 'Petición get a mi api - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req,res) => {

    const id = req.params.id

    res.status(400).json({
        msg: 'Petición put a mi api - Controlador',
        id
    });
}

const usuariosPost = (req,res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'Petición post a mi api - Controlador',
        nombre,
        edad
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