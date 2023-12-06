/**
 * Nos permite definir una funcion de forma explicita como funcion asincrona y poder eseperar a que esa funcion termine.
 * A nivel global no afecta la ejecución del hilo principal
 * Para declarar una función como asincrona simplemente agregamos la palabra async delante de la función al momento de crearla,
 * pero colocamos el await cuando hacemos la llamada a la funcion.
 * AWAIT, es válido solo dentro de funciones asincronas
 */
async function hello(name) {
    return new Promise(
        (resolve, reject)=>{
            setTimeout( ()=>{
                console.log('Hi, ', name);
                resolve(name);
            }, 1500 );
        }
    );
}
async function speack(name) {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(() => {
                console.log('Bla, bla, bla,....');
                resolve(name);
            }, 1000);
        }
    );
}
async function goodbye(name) {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(
                ()=>{
                    console.log('Good Bye ',name);
                    resolve();
                },1000
            );
        }
    );
}


async function main() {
    let name = 'Pablo'
    await hello(name);
    await speack();
    await speack();
    await goodbye(name);
    console.log('Finish process...');
}
console.log('Start process...');
main();
