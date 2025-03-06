const { v4: uuidv4 } = require('uuid')

class Tarea {
    id = '';
    descipcion = '';
    completadoEn = null;

    constructor( descipcion) {
        this.id = uuidv4()
        this.descipcion = descipcion;
        this.completadoEn = null
    }
}

module.exports = Tarea