const fs = require('node:fs');

const stats = fs.statSync('./fileSystem/archivo.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
);

//lectura de archivos de manera sincrona
const read = fs.readFileSync('./fileSystem/archivo.txt', 'utf-8');
console.log( read );

console.log("Hacer cosas mientras lee el archivo 1");

const readFile2 = fs.readFileSync('./fileSystem/archivo2.txt', 'utf-8');
console.log(readFile2);