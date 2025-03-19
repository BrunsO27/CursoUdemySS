const { response } = require('express');
const { request } = require('express');
const bcryptjs = require('bcrypt');



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

    const existeEmail = await Usuario.findOne({
        where: {
            email
        }
    });

    if(existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        });
    }

    

    const salt = bcryptjs.genSaltSync();
    const hasdPassword = bcryptjs.hashSync(password, salt);
            
    const newUsuario = Usuario.build({
        nombre,
        email,
        password: hasdPassword,
        google,
        role,
        img,
        estado,})

    await newUsuario.save()
    res.status(201).json({
        
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