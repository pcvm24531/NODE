/**
Obtener variables de entorno, por defecto todas las variables de entorno se escriben o estan definidos en MAYÚSCULA
si la variable de entorno es compuesta siempre viene con barra baja MI_WEB
El modo de llamar a un proceso con variables de enorno es la siguiente
$ NAME=Pablo WEB=http://www.pcvms.web node entorno.js
*/

let nombre = process.env.NAME || 'Not name';
let web = process.env.WEB || 'Not Host';

console.log('Hola, '+nombre, ' and web host is ',web);