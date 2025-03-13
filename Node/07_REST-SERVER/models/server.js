const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        // Middlawares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        // Directorio publico
        this.app.use( express.static('public') );

        // CORS
        this.app.use( cors() );
    }

    routes() {
        this.app.use( this.usersPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en:', this.port);
        });
    }
}


module.exports = Server;