/**
 * Este módulo nos permite crear un servidor http o conectarnos con servidores http desde nodeJS
 * 
 */
const http = require('http');
const server = (request,response)=>{
    console.log('new request');
    console.log(request.url);

    switch (request.url) {
        case '/hello': 
            response.write('Hi, welcome to new server');
            response.end()
            break;    
        default:
            response.write('Not found');
            response.end();
            break;
    }

    //El response es lo que enviamos al usuario
    /*response.writeHead(201, {'Content-type': 'text/json'} );
    response.write('Hello, this is response');
    response.end();*/
}
http.createServer(server).listen(3000);


