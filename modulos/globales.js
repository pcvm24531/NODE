/**
 * Son un monton de modulos, que vienen incluidos como modulos globales, ejm, conole.log,setInterval, setTimeout, etc.
 */

//global=> es el objeto donde se encuentran todos los módulos globales guardados
//Ejemplo
let i = 0;
let intervalo = setInterval(() => {
    console.log('Hello world');
    if (i===3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);
setImmediate(()=>
    console.log('Rapido...') 
);
console.log(__dirname);//Obtiene el nombre del directorio donde se encuentra el archivo
console.log(__filename);//Obtiene el nombre del archivo mas la ruta
global.miVariable = 'Mi valor';//Creación de variables globales
console.log(global);