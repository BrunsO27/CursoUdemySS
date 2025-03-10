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

                // Datos de clima

                const clima = await busquedas.climaLugar( lugarSel.lat, lugarSel.lng );

                // Mostrar resultados

                console.clear();
                console.log('\n Informacion de la ciudad \n');
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Latitud:', lugarSel.lat);
                console.log('Longitud:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Máxima:', clima.max);
                console.log('Mínima:',clima.min);
                console.log('Descripción del clima:',clima.desc.brightYellow);

            break;
        }

        if (opt !== 0) await pausa();
    } while ( opt !== 0);
}

main();