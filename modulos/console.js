/**
 * Console, el Modulo de consola de NODE tiene muchas funciones que hagamos un trabajao mas eficiente
 */

console.log('Nos permite ve algo, lo que sea');
console.info('Para informar que paso algo');
console.error('Para mostrar errores');
console.warn('Para mostrar posbles errores');

var tabla = [
    {1:'UNo',2:'Dos'},
    {1:'Tres',2:'Cuatro'},
    {1:'Cinco',2:'Seis'},
];
console.table( tabla );

//Nos permite arupar consoles
console.group('Conversación');
console.log('Hola');
console.group();
console.log('Bla bla');
console.log('Bla bla');
console.groupEnd();
console.log('Adios');
console.groupEnd('Conversación');

//Ejemplo 2
function funcion1() {
    console.group('funcion1');
    console.log('Esto es de la función1');
    console.log('Continuando a la función1');
    console.log('Finalizando contenido función1');
    funcion2();
    console.log('Volviendo a la f1');
    console.groupEnd('funcion1')
}
function funcion2() {
    console.group('Funcion2');
    console.log('Ahora estamos en la f2');
    console.groupEnd('Funcion2')
}
console.log('Empesamos');
funcion1();

//Ejemplo 3
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');


