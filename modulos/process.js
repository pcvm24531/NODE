/**
 * Procesos, Aprenderemos a acceder a nuestro proceso, escuchar señales y hacer cosas con ellos.
 * escuchar eventos, etc.
 */

//const p = require('process');//
//Tambien se puede acceder de esta manera

//Detectar cuando el programa esta por terminar
//Cuando se ejecuta el exit, eso quiere decir que ya nos hemos desconectado completamente del eventloop
process.on( 'exit', ()=>{
    console.log('EL proceso acabó');
} );

//Detectar antes de que el proceso termine
process.on( 'beforeExit', ()=>{
    console.log('El proceso va a terminar');
} );

//Detectar una excepcion que no ha sido capturado
//Evitar la falla de errores no controlados
process.on('uncaughtException',(err,origen)=>{
    console.error('Olvidamos capturar un error');
    console.error(err.message);
    console.log(origen);
});

funciones();
console.log('Llegamos? o ya no?');