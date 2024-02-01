//Accedemos al sistema operativo
const { log } = require('node:console');
const os = require('node:os');

console.log('informacion del sistema operativo');
console.log('---------------------------------');

console.log('Nombre del sistema operativo: ', os.platform() );
console.log( os.version() );
console.log( os.tmpdir() );
console.log( os.release() );
console.log( os.machine() );
console.log( os.hostname() );
console.log( os.homedir() );
console.log( os.arch() );
console.log( os.cpus() );
console.log( os.freemem() );
console.log( os.uptime()/60/60 );//Horas que el cpu lleva encendido