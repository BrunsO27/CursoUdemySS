const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.brightYellow} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.brightYellow} Historial`
            },
            {
                value: 0,
                name: `${'0.'.brightYellow} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    
    console.clear();
    console.log('============================='.brightYellow);
    console.log('    Selecciona una opcion    '.white);
    console.log('============================= \n'.brightYellow);

    const { opcion } = await inquirer.prompt(preguntas); 

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.brightYellow} para continuar`
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

const listarLugares = async (lugares = []) => {
    const choices = lugares.map( (lugares, i) => {
        const idx = `${i + 1}.`.brightYellow
        return {
            value: lugares.id,
            name: `${idx}. ${lugares.nombre}`
        }
    });

    //unshift agrega un 'objeto' al arreglo
    choices.unshift({
        value: '0',
        name: '0.'.brightYellow + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas); 

    return id;
}

const listarTareasACompletar = async(tareas = []) => {
    const choices = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.brightYellow
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
    listarLugares,
    confirmar,
    listarTareasACompletar
}