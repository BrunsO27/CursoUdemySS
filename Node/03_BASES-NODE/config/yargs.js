const argv = require ('yargs')
                     .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        description: 'Es el numero base para la tabla de multiplicar'
                     },)
                     .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        demandOption: false,
                        describe: 'Lista en consola la tabla de multiplicar'
                     })
                     .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        description: 'Marca el limite de hasta que numero se multiplicara la base'
                     })
                     .check(( argv, options) => {
                        if (isNaN(argv.b)) {
                            throw 'La base tiene que ser un numero';
                        }
                        return true;
                     })
                     .argv;


module.exports = argv;