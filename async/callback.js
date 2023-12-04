function hola(personName, mycallback ){
    console.log('Hello ', personName);
    setTimeout(
        ()=>{
            console.log('We stay here');
            mycallback();
        },
        2000
    );
}
function adios(name, otherCallback){
    setTimeout( function() {
        console.log('Good bye', name);
        otherCallback();
    }, 1000 );
}

console.log('Start process');
hola( 'Pablo', ()=>{
    adios('Pablo', function() {
        console.log('End process');
    });
} );
