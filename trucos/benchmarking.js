//Ejemplo, Calcular el tiempo de ejecución de un proceso
console.time('todo');
let suma = 0;
let suma2 = 0;
//Verificamos el tiempo que tarda la sentencia
console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

console.time('bucle 2');
for (let f = 0; f < 1000000000; f++) {
    suma2 += 1;
}
console.timeEnd('bucle 2');
console.timeEnd('todo');