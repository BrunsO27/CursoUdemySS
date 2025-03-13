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
            res.json({
                msg: 'Petición get a mi api'
            });
        })

        this.app.put('/api', (req,res) => {
            res.json({
                msg: 'Petición put a mi api'
            });
        })

        this.app.post('/api', (req,res) => {
            res.json({
                msg: 'Petición post a mi api'
            });
        })

        this.app.delete('/api', (req,res) => {
            res.json({
                msg: 'Petición delete a mi api'
            });
        })

        this.app.patch('/api', (req,res) => {
            res.json({
                msg: 'Petición patch a mi api'
            });
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en:', this.port);
        });
    }
}


module.exports = Server;