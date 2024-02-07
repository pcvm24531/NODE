const fs = require('node:fs/promises');

console.log('Reading the first file promises');
fs.readFile( './fileSystem/archivo.txt', 'utf-8'  )
.then(
    ( text )=>{
        console.log('This first file--> ', text);
    }
);

console.log('Reading the second file with promises');
fs.readFile( './fileSystem/archivo2.txt', 'utf-8' )
.then( ( text )=>{
    console.log('This second file->', text);
} );