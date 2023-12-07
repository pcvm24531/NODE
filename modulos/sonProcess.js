/**
 * Node, es capaz de ejecutar sus propios procesos y ademas puede ejecutar procesos hijo
 */

const { exec } = require('child_process');
//o //const  exec = require('child_process').exec;

//exec('ls -la', (err, stdout, sterr)=>{//Comando linux, para listar archivos y directorios
//exec('dir', (err, stdout, sterr)=>{//Comando Windows, para listar archivos y directorios
/*exec('node modulos/console.js', (err, stout, sterr)=>{//Comando que ejecuta un proceso node, que ejecuta otro proceso
    if(err){
        console.error(err);
        return false;
    }
    console.log(stout);
} );*/


//Ejemplo para ejecutar un proceso nuevo
//spawn nos permite invocar un proceso nuevo de nodejs
const { spawn } = require('child_process');

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data',(dato)=>{
    console.log(dato.toString());
});
