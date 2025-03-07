const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.blue} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.blue} Historial`
            },
            {
                value: 0,
                name: `${'0.'.blue} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    
    console.clear();
    console.log('============================='.blue);
    console.log('    Selecciona una opcion    '.blue);
    console.log('============================= \n'.blue);

    const { opcion } = await inquirer.prompt(preguntas); 

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.blue} para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message,
            validate( value ) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }

                return true;
            }
        }
    ];

    const { descripcion } = await inquirer.prompt(question);

    return descripcion;
}

const listadoTareaABorrar = async (tareas = []) => {
    const choices = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.blue
        return {
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`
        }
    });

    //unshift agrega un 'objeto' al arreglo
    choices.unshift({
        value: '0',
        name: '0.'.blue + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas); 

    return id;
}

const listarTareasACompletar = async(tareas = []) => {
    const choices = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.blue
        return {
            value: tarea.id,
            name: ` ${idx}. ${tarea.descripcion}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciona las tareas a completar',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(pregunta); 

    return ids;
}

const confirmar = async(mensaje) => {

    const question = [
        {
            type: 'confirm',
            name: 'OK',
            message: mensaje
        }
    ];

    const { OK } = await inquirer.prompt(question);
    
    return OK;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareaABorrar,
    confirmar,
    listarTareasACompletar
}