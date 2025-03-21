const { response } = require('express');
const { request } = require('express');
const bcryptjs = require('bcrypt');

const Usuario = require('../models/user');
const Role = require('../models/role');

const usuariosGet = async (req = request,res = response) => {

    // const {q, nombre='No name', apikey='No api key'} = req.query;

    const { limite = 5, desde = 0} = req.query;
    /* const usuarios = await Usuario.findAll({
        limit: Number(limite),
        offset: Number(desde),
        where: {
            estado: true
        },
    });

    const total = await Usuario.count({
        where: {
            estado: true
        }
    }); */

    const [ total, usuarios] = await Promise.all([
        Usuario.count({
            where: {
                estado: true
            }
        }),
        Usuario.findAll({
            limit: Number(limite),
            offset: Number(desde),
            where: {
                estado: true
            },
        }),
    ])

    res.json({
        total,
        usuarios,
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

const usuariosDelete = async (req,res) => {
    const { id } = req.params;

    // Físicamente lo borramos
    /* const usuario = await Usuario.findByPk(id);
    await usuario.destroy(); */

    const usuario = await Usuario.findByPk(id);
    await usuario.update({estado: false});
    res.json({
        usuario
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