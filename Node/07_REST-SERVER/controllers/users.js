const { response } = require('express');
const { request } = require('express');

const Usuario = require('../models/user')

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

const usuariosPost = async(req,res) => {

    const { nombre, 
            email,
            password,
            google,
            role,
            img,
            estado,} = req.body;
            
    const newUsuario = Usuario.build({
        nombre: nombre,
        email: email,
        password: password,
        google: google,
        role: role,
        img: img,
        estado,})

    await newUsuario.save()
    res.status(201).json({
        newUsuario
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