/*
Para mejorar la experiencia con callbacks, se crea una forma de trabajar con asincronia, las PROMESAS
Las PROMESAS tienen un estado
Lo bueno de las promesas es que se pueden anidar a diferencia de los callbacks
Siempre que hagamos una promesa(usemos el .then()) se debe usar un CATH para capturar algún error que pudiera ocurrir.
*/

function hello(name) {
    return new Promise( (resolve, reject)=>{
        setTimeout(
            ()=>{
                console.log('Hi, ',name); 
                resolve(name);
            },
            1500
        );
    } );    
}
function speak(name) {
    return new Promise( (resolve, reject)=>{
        setTimeout(
            ()=>{
                console.log('bla, bla, bla....');
                //resolve(name);
                reject('Ocurrio un error!');
            },
            1000
        );
    });
}
function goodBye(name) {
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            console.log('Goodbye,', name);
            resolve();
        }, 1000);
    } );    
}

console.log('Start process....');
hello('Carlos')
    .then( speak )
    .then( speak )
    .then( speak )
    .then( speak )
    .then( goodBye)
    .then( (name)=>{
        console.log('Finish process....');
    })
    .catch( error => {
        console.log('Error has accurred');
        console.log(error);
    } );