/**
 * Stream de Lectura
 */

const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream( __dirname+'/input.txt' );
readableStream.setEncoding('utf-8');//Codificamos con UTF8 para no usar el toString()
readableStream.on('data', (chunk)=>{
    console.log(chunk);
} );