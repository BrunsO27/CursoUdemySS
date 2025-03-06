const colors = require('colors');

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

    listadoCompleto() {
        console.log()

        let contador = 0
        Object.keys(this._listado).forEach( key => {
            contador++;
            const { descipcion, completadoEn} = this._listado[key];

            if (completadoEn !== null) {
                console.log(`${colors.magenta(contador + '.')} ${colors.green(descipcion)}`)
            } else {
                console.log(`${colors.magenta(contador + '.')} ${colors.red(descipcion)}`)
            }
        });

        //Solucion del instructor
        /*this.listado.forEach( (tarea,i) => {
        const idx = `${i + 1}.`.magenta;
        const { descipcion, completadoEn } = tarea;
        const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;
        console.log(`${idx} ${descipcion} :: ${estado}`);
        }); */
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