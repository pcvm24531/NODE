/**
 * Node, es capaz de ejecutar sus propios procesos y ademas puede ejecutar procesos hijo
 */

const { exec } = require('child_process');
//o //const  exec = require('child_process').exec;

//exec('ls -la', (err, stdout, sterr)=>{//Comando linux
//exec('dir', (err, stdout, sterr)=>{//Comando Windows
/*exec('node modulos/console.js', (err, stdout, sterr)=>{//
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
} );*/


//Ejemplo para ejecutar un proceso nuevo
const { spawn } = require('child_process');

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);