require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World');
  res.end()
});

app.listen(port, () => {
    console.log('Servidor escuchando en:', port);
});