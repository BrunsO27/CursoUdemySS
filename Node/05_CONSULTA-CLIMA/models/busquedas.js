const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {
        // TODO leer DB si existe
    }

    async ciudad( lugar = '') {
        // peticion http
        //console.log('ciudad', lugar);

        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data.per_page);

            return []; // regresar los lugares    
        } catch (error) {
            return [];
        }

        
    } 
}



module.exports = Busquedas