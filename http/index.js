/**
 * Http, protocolo de transferencia, 
 */
const http = require('node:http');
const hostname = "127.0.0.1";
const port = 3000;

//Creamos un servidor
const server = http.createServer(
    (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello, Pablo");
    }
);
server.listen( port, hostname, ()=>{
        console.log(`Ejecutando en server ${hostname} y puerto ${port}`);
    }
);
