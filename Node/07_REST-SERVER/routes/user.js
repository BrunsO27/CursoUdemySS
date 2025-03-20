const { Router } = require('express');
const { check } = require('express-validator');

const validarCampos = require('../middlewares/validar-campos');
const { esRoleValido,
        existeEmail } = require('../helpers/db-validators');

const { usuariosGet, 
        usuariosPut, 
        usuariosPost,
        usuariosDelete,
        usuariosPath} = require('../controllers/users');

const router = Router();



router.get('/', usuariosGet );

router.put('/:id', usuariosPut);

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El correo no es válido').isEmail(),
        check('email').custom( existeEmail ),
        check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({min: 6}),
        //check('role', 'No es un rol válido').isIn(['admin', 'user']),
        check('role').custom( esRoleValido ),
        validarCampos
], usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPath);



module.exports = router;