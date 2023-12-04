function hello( name, myCallBack) {
    setTimeout(
        function () {
            console.log('Hello ', name);
            myCallBack(name);
        }, 1000
    );
}

function bye(name, otherCallback) {
    setTimeout(
        function () {
            console.log('Good bye ', name );
            otherCallback();
        }, 1000
    );
}

function speak(callbackSpeaker) {
    setTimeout(
        function () {
            console.log('speak, speak.........');
            callbackSpeaker();
        }, 1
    );
}

console.log('Starting process ....');
hello( 'Pablo', function(name){
    speak(
        function(){
            bye(name, function () {
                console.log('Finish process.....');
            });
        }
    );
} );
