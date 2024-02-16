const http = require('node:http');
const {finAvailablePort} = require('../port/index');

const desiredPort = process.env.PORT ?? 3000 ;

const server = http.createServer(
    ( req, res )=>{
        console.log( 'request received' );
        res.end('Hola mundo');
    }
);

/*server.listen( 0, ()=>{
    console.log( `Server listening on port http://localhost:${server.address().port}` );
} );*/

finAvailablePort(desiredPort).then( port =>{
    server.listen( port, ()=> {
        console.log( `Server listening on port http://localhost:${server.address().port}` );
    })
});