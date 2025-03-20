const { response } = require('express');
const { request } = require('express');
const bcryptjs = require('bcrypt');

const Usuario = require('../models/user');
const Role = require('../models/role');

const usuariosGet = (req = request,res = response) => {

    const {q, nombre='No name', apikey='No api key'} = req.query;

    res.json({
        msg: 'Petición get a mi api - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = async (req,res) => {

    const id = req.params.id;
    const { id: _,password, google, email, role, ...resto } = req.body;

    // TODO validar contra base de datos

    if ( password ) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    if ( role ) {
        const roleId = await Role.findOne({ 
            where : {
                role
            }
        }); 

        resto.role_id = roleId.id;
    }

    const usuario = await Usuario.findByPk(id);
    await usuario.update(resto);

    res.json({
        msg: 'Petición put a mi api - Controlador',
        usuario
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

    const salt = bcryptjs.genSaltSync();
    const hasdPassword = bcryptjs.hashSync(password, salt);
    
    const roleId = await Role.findOne({ 
        where : {
            role
        }
    });    

    const newUsuario = Usuario.build({
        nombre,
        email,
        password: hasdPassword,
        google,
        role_id: roleId.id,
        img,
        estado,})

    await newUsuario.save()
    res.status(201).json({
        "Usuario": newUsuario.toJSON()
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