/**
 * Para ejecutar con el debugger debemos usar el siguiente comando
 * Este debbuger de node nos permite hacer un debug en tiempo real
 * 
 * $ node --inspect ruta/file.js
 */

const http = require('http');

http.createServer( router ).listen(3000);

function router(request, response) {
    switch (request.url) {
        case '/hola':
            response.write('Hola, que tal');
            response.end();
            break;    
        default:
            response.write('Error 404: No se lo que quieres');
            response.end();
            break;
    }
}
console.log('Escuchando http en el puerto 3000');