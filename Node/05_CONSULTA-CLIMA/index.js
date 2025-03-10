require('dotenv').config();

const { inquirerMenu, 
        pausa, 
        leerInput,
        listarLugares} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    
    let opt;
    const busquedas = new Busquedas
    
    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad:');
                
                // Buscar lugares

                const lugares = await busquedas.ciudad( termino );

                //console.log(lugares);

                // Seleccionar el lugar

                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id == id);
                console.log({id});
                console.log({lugarSel});

                // Datos de clima

                // Mostrar resultados

                console.log('\n Informacion de la ciudad \n');
                console.log('ciudad:', lugarSel.nombre);
                console.log('Latitud:', lugarSel.lat);
                console.log('Longitud:', lugarSel.lng);
                console.log('Temperatura:',);
                console.log('Máxima:',);
                console.log('Mínima:',);

            break;
        }

        if (opt !== 0) await pausa();
    } while ( opt !== 0);
}

main();