/**
 * Son datos en binario, que van de un lado a otro
 * Los buffer nos permiten trabajar con datos en la versión más cruda que se tenga
 */

//const buffer = Buffer.alloc(4);//Guardar 4 espacios de memoria vacias
//const buffer = Buffer.from([1,2,33]);//Reservar 3 espacios de memoria con información
const buffer = Buffer.from('Hola');
//console.log(buffer.toString());



/**
 * El buffer tambien permite trabajar con posiciones
 *
 */

const abc = Buffer.alloc(26);
for (let i = 0; i < abc.length; i++) {
    abc[i]=i+97;
    
}
console.log(abc.toString());

