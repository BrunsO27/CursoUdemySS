const {crearArchivo} = require ('./helpers/multiplicar');
const argv = require ('./config/yargs')
console.clear();




/* const [,,arg3 = 'base=5'] = process.argv
const [ , base ] = arg3.split('=');
 */


// const base = 4;



crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));



//console.log(process.argv);
//console.log(argv);
