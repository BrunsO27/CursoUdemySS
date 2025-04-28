const { response } = require('express');
const { request } = require('express');
const bcrypt = require('bcrypt');

const Ususario = require('../models/user');
const { generarJWT } = require('../helpers/generarJTW');

const login = async (req = request,res = response) => {

    const { email, password } = req.body;
    
    try {
        // Verificar email
        const usuario = await Ususario.findOne({
            where: {
                email
            }
        })

        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - email'
            })
        }

        // Verificar si el usuario esta activo

        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            })
        }

        // Verificar la contraseña

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            })
        }

        // Generar el JWT

        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ha ocurrido en error, contacte al admistrador',
        });
    }

    
}

module.exports = {
    login,
}
