const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        this.authPath = '/api/auth'
        this.usersPath = '/api/users'

        // Conectar a base de datos

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

        // Lectura y parseo del body
        this.app.use( express.json() );
    }

    routes() {
        this.app.use( '/api/auth', require('../routes/auth.js'))
        this.app.use( '/api/users', require('../routes/user.js'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en:', this.port);
        });
    }
}


module.exports = Server;