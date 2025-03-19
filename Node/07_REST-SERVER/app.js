require('dotenv').config()

const Server = require('./models/server')
const {dbCafe} = require('./database/config')

const server = new Server();

dbCafe.authenticate()
      .then(() => {console.log('Conexión exitosa')})
      .catch(err => {console.log('Error en la conexión:', err)});

server.listen();



