const axios = require('axios');

class Busquedas {
    historial = [];

    constructor() {
        // TODO leer DB si existe
    }

    get paramsMapbox() {
        return {
            'limit': 5,
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY
        }
    }

    async ciudad( lugar = '') {
        // peticion http

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/search/geocode/v6/forward?q=${lugar}`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            //const resp = await axios.get('https://api.mapbox.com/search/geocode/v6/forward?q=jalisco&limit=5&language=es&access_token=pk.eyJ1IjoiYnVsazAyMDAiLCJhIjoiY203emJsazF2MGcxMzJpb2oxa2JvbXBxYiJ9.kR1-C3PTZfT4FEr7NR2uNA');
            console.log(JSON.stringify(resp.data, null, 2));

            return []; // regresar los lugares    
        } catch (error) {
            return [];
        }

        
    } 
}



module.exports = Busquedas