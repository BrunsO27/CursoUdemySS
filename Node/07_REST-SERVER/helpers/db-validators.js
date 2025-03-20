const Role = require('../models/role');
const Usuario = require('../models/user');

const esRoleValido = async(rol = '' ) => {
    const existeRol = await Role.findOne({
            where: {
                    role: rol
            }
    });

    if (!existeRol) {
            throw new Error(`El rol ${rol} no es válido`);
    }
}

const existeEmail = async( email = '') => {
    const exiteMail = await Usuario.findOne({
        where: {
            email
        }
    });

    if (exiteMail) {
        throw new Error(`El correo ${email} ya está registrado`);
    }
}

module.exports = {
    esRoleValido,
    existeEmail
}