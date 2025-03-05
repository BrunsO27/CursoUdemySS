const { magenta } = require('colors');

require('colors');

const mostrarMenu = () => {

    console.log('============================='.magenta);
    console.log('    Selecciona una opcion    '.magenta);
    console.log('============================= \n'.magenta);

    console.log(`${'1.'.magenta} Crear tarea`);
    console.log(`${'2.'.magenta} Listar tareas`);
    console.log(`${'3.'.magenta} Listar tareas completas`);
    console.log(`${'4.'.magenta} Listar tareas pendientes`);
    console.log(`${'5.'.magenta} Completar tarea(s)`);
    console.log(`${'6.'.magenta} Borrar tarea`);
    console.log(`${'0.'.magenta} Salir \n`);
    
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(`Seleccione una opción: `, (opt) => {
        readLine.close();
    })
}

const pausa = () => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(`Presione ${'Enter'.magenta} para continuar \n`, (opt) => {
        readLine.close();
    })
}

module.exports = {
    mostrarMenu,
    pausa
} 