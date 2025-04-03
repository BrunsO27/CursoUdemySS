const { request, response } = require('express');

const esAdminRole = (req = request, res = response, next) => {
    if (!req.usuarioIdentificado) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }

    const { role_id, nombre } = req.usuarioIdentificado;

    if (role_id !== 1) {
        return res.status(401).json({
            msg: `${nombre} no es administrador - No puede hacer esto`
        });
    }

    next();
}

const tieneRole = (...roles) => {
    return (req = request, res = response, next) => {
        
        if (!req.usuarioIdentificado) {
            return res.status(500).json({
                msg: 'Se quiere verificar el rol sin validar el token primero'
            });
        }

        if (!roles.includes(req.usuarioIdentificado.role_id)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            });
        }

        next();
    }   
}


module.exports = {
    esAdminRole,
    tieneRole
}