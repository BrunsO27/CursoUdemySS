const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {
        // TODO leer DB si existe
    }

    async ciudad( lugar = '') {
        // peticion http

        try {
            const instnace = axios.create({
                baseURL: `https://api.mapbox.com/search/geocode/v6/forward?`,
                params: {
                    'q': lugar,
                    'limit': 5,
                    'language': 'es',
                    'access_token': ''
                }
            });
            
            console.log(lugars)
            const resp = await instnace.get();
            console.log(resp.data);

            return []; // regresar los lugares    
        } catch (error) {
            return [];
        }

        
    } 
}



module.exports = Busquedas