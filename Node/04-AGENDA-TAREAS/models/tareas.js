const Tarea = require("./tarea");


/**
 * _listado:
 * {'uuid-12345-123456789-2: { id:12, descipcion, completadoEN:20250505'}
 */


class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea (descipcion = '') {
        const tarea = new Tarea(descipcion);

        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;