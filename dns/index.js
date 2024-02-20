//Este modulo permite la resolucion de nombres. Se pude usar para buscar direcciones IP
const dns = require('node:dns');

dns.lookup( 'sistemas.upb.edu', ( err, address, family )=>{
    console.log( 'address: %j family: IPv%s', address, family );
} );
console.log( dns );