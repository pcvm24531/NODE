/**
 * Con esta función capturamos los errores y evitar errores mucho mayores.
 * Para corregir, lo que se debe hacer es colocar dentro de un TRY CATCH todas las funciones que se pueden romper
 */
function main() {
    return breaking();
}
function breaking(params) {
    return 3+z;
}

function breakingAsincrona(cb){
    setTimeout(
        ()=>{
            try {
                return 3 + z;
            } catch (error) {
                cb(error);
                console.error(error.message);
            }
        }
    );
}

try {//Lo que se puede romper
    //main();
    breakingAsincrona( ()=>{
        console.info('Hay error!');
    } );
} catch (error) {
    console.error(error);
}
console.info('Llegamos al final de la sentencia!');