require('colors');

const { guardarDB,
        leerDB,   
 } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput, 
        listadoTareaABorrar,
        confirmar,
        listarTareasACompletar} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const tareaDB = leerDB();

    if ( tareaDB ) {
        tareas.cargarTareasFromArray( tareaDB );
    }

    do{

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const descipcion = await leerInput('Descripcion:');
                tareas.crearTarea(descipcion);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3':

                //Mi solucion
                tareas.listadoCompletadas();

                //Solucion del instructor
                /* tareas.listarPendientesCompletadas(true); */
            break;

            case '4':

                //Mi solucion
                tareas.listadoPendiente();

                //Solucion del instructor
                /* tareas.listarPendientesCompletadas(false); */
            break;

            case '5':
                const ids = await listarTareasACompletar(tareas.listado);
                console.log(ids);
            break;
            
            case '6':
                const id = await listadoTareaABorrar( tareas.listado );
                if (id !== '0') {
                    const confirmacion = await confirmar('¿Estas seguro?');
                    if ( confirmacion ) {
                        tareas.borrarTarea( id );
                        console.log();
                        console.log('Tarea borrada con exito');
                    }    
                }
                
            break
        }

        guardarDB( tareas.listado );

        await pausa();

    } while( opt !== '0' );
}

main();