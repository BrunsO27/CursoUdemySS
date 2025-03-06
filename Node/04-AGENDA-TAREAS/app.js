require('colors');

const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    
    do{

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const descipcion = await leerInput('Descripcion:');
                tareas.crearTarea(descipcion);
            break;

            case '2':
                console.log( tareas.listado );
            break;
        }

        //guardarDB( tareas.listado);

        await pausa();

    } while( opt !== '0' );
}

main();