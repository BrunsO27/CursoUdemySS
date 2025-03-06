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
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
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

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}