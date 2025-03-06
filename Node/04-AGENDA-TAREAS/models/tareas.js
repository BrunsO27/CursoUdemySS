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

    cargarTareasFromArray ( tareas = [] ) {
        tareas.forEach (tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    get listado() {

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }
}

module.exports = Tareas;