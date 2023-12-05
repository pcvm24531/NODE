
function helloWorld( name, callback ) {
    setTimeout( 
        ()=>{
            console.log('Hello World');
            callback(name, 3, bye );
        },
        3000
     );
}

function speak(){
    setTimeout(
        callSpeaking(),
        1000
    );
}
function callSpeaking(){
    console.log( 'Hi, teddy bear!!' );
}

function speaking(personName, veces, callback) {
    if( veces >= 0 ){
        speak(function () {
            speaking( personName, --veces, callback );
        })
    }else{
        bye();
    }
}

function bye() {
    console.log('Finish process');
}

console.log('Start....');
helloWorld( 'Pablo', speaking );