const express = require('express')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        // Middlawares
        this.middlewares();
        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        // Directorio publico
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.get('/api', (req,res) => {
            res.send('Hola mundo');
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en:', this.port);
        });
    }
}


module.exports = Server;