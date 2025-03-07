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
                value: '1',
                name: `${'1.'.magenta} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.magenta} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.magenta} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.magenta} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.magenta} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.magenta} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.magenta} Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
    
    console.clear();
    console.log('============================='.magenta);
    console.log('    Selecciona una opcion    '.magenta);
    console.log('============================= \n'.magenta);

    const { opcion } = await inquirer.prompt(preguntas); 

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.magenta} para continuar`
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
        const idx = `${i + 1}.`.magenta
        return {
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`
        }
    });

    //unshift agrega un 'objeto' al arreglo
    choices.unshift({
        value: '0',
        name: '0.'.magenta + ' Cancelar'
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
    confirmar
}