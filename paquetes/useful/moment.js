/**
 * Este paquete nos permite trabajar con fechas
 * #npm install moment
 * Ej: Cuanto tiempo a parti de una fecha, 
 */

const moment = require('moment');

let ahora = moment();//La fecha de hoy, contiene muchas opciones.
console.log(ahora.toString());

//Formatear una fecha
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
