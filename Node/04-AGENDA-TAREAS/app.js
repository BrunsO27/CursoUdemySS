require('colors');

const { guardarDB,
        leerDB,   
 } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput } = require('./helpers/inquirer');
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
        }

        guardarDB( tareas.listado);

        await pausa();

    } while( opt !== '0' );
}

main();