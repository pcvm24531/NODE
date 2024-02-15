//Los CallBack son funciones que se ejecutan cuando una tarea se completa
const fs = require('node:fs');

console.log('Reading the firsth file');
fs.readFile('./fileSystem/archivo.txt', 'utf-8', (err, text)=>{//En los callback siempre el primer parámetro es el error
    console.log('This first file-->', text);
});

console.log('Reading de second file');
fs.readFile( './fileSystem/archivo2.txt', 'utf-8', ( erro, text )=>{
    console.log('This second file->', text);
} );