/**
 * Sistema Operativo, con esta clase podemos acceder a lo que hay dentro de la maquina, al sistema operativo, ram, nucleos, tipos de archivos, etc.
 */

const os = require('os');

//Muestra la arquitectura del equipo
console.info( os.arch() );

//Mostramos la plataforma en la que se esta trabajando /Androis, Windos, Linux, etc.
//Mediante esto podemos saber que comando de procesos hijo podemos usar 
console.log( os.platform() );

//Mostramos la información de las CPU del equipo, los nucleos
//Podemos ejecutar procesos segun el nro de cores
console.log( os.cpus() );
//Como saber el numero de nucleos o cores
console.log( os.cpus().length );

//Como saber los errores del sistema
console.log( os.constants );

//Memoria libre
console.log( os.freemem());
const SIZE = 1024;
const kb = (bytes)=>{return bytes/SIZE}
const mb = (bytes)=>{return kb(bytes)/SIZE}
const gb = (bytes)=>{return mb(bytes)/SIZE}
console.log( kb(os.freemem()) );
console.log( mb(os.freemem()) );
console.log( gb(os.freemem()) );
