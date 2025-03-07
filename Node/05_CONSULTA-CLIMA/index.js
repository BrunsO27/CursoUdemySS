const { inquirerMenu, 
        pausa, 
        leerInput} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    
    let opt;
    const busquedas = new Busquedas
    
    do {
        opt = await inquirerMenu();

        switch ( opt ) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');

                await busquedas.ciudad( lugar );

                // Buscar lugares

                // Seleccionar el lugar

                // Datos de clima

                // Mostrar resultados

                console.log('\n Informacion de la ciudad \n');
                console.log('Informacion del clima');
            break;
        }

        if (opt !== 0) await pausa();
    } while ( opt !== 0);
}

main();