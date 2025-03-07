const colors = require('colors');

const Tarea = require("./tarea");


/**
 * _listado:
 * {'uuid-12345-123456789-2: { id:12, descripcion, completadoEN:20250505'}
 */


class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea (descripcion = '') {
        const tarea = new Tarea(descripcion);

        this._listado[tarea.id] = tarea;
    }

    borrarTarea(id = ''){
        if ( this._listado[id]) {
            delete this._listado[id];
        }
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
            const { descripcion, completadoEn} = this._listado[key];

            if (completadoEn !== null) {
                console.log(`${colors.magenta(contador + '.')} ${colors.green(descripcion)}`);
            } else {
                console.log(`${colors.magenta(contador + '.')} ${colors.red(descripcion)}`);
            }
        });

        //Solucion del instructor
        /*this.listado.forEach( (tarea,i) => {
        const idx = `${i + 1}.`.magenta;
        const { descripcion, completadoEn } = tarea;
        const estado = ( completadoEn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;
        console.log(`${idx} ${descripcion} :: ${estado}`);
        }); */
    }

    //Mi solucion:
    listadoPendiente() {
        console.log();

        let contador = 0;
        Object.keys(this._listado).forEach( key => {
            contador++;
            const { descripcion, completadoEn} = this._listado[key];

            if ( completadoEn === null) {
                console.log(`${colors.magenta(contador + '.')} ${colors.red(descripcion)}`);
            }
        });
    }

    //Mi solucion:
    listadoCompletadas() {
        console.log();

        let contador = 0;
        Object.keys(this._listado).forEach( key => {
            contador++;
            const { descripcion, completadoEn} = this._listado[key];

            if ( completadoEn !== null) {
                console.log(`${colors.magenta(contador + '.')} ${colors.green(descripcion)} :: Se completo en ${completadoEn.toString().white}`);
            }
        });
    }

    //Solucion del instructor:
    /* listarPendientesCompletadas( completadas = true) {

        console.log();
        let c = 0;
        this.listado.forEach( (tarea,i) => {
            
            const { descripcion, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            if( completadas ) {
                // mostrar compltadas
                if (completadoEn) {
                    c++;
                    console.log(`${ (c + '.').magenta} ${descripcion} :: ${completadoEn}`);
                }
            } else {
                if (!completadoEn) {
                    c++;
                    console.log(`${ (c + '.').magenta}. ${descripcion} :: ${estado}`);
                }
            }
            
            });
    } */

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