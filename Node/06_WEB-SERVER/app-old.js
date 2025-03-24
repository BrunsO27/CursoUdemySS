const http = require('http');

http.createServer( (request,response) => {
    response.write('hola');
    response.end();
})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080);