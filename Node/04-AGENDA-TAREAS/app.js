require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async() => {

    let opt = '';
    
    do{

        opt = await inquirerMenu();
        console.log({ opt });

        //const tareas = new Tareas();
        //const tarea = new Tarea('Comprar comida');
        
        //tareas._listado[tarea.id] = tarea;

        //console.log(tareas);

        await pausa();

    } while( opt !== '0' );
}

main();