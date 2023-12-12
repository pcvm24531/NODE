
const isOdd = require('is-odd');
const ini = 1;
const fin = 10;
const numberIs = odd(ini, fin);

function odd(ini, fin) {
    try {
        setInterval( ()=>{
            if(ini<=fin){
                if( isOdd(ini) ){
                    console.log( ini, ' es impar' );
                }else{
                    console.log( ini, ' es par');
                }
            }else{
                clearInterval(numberIs);
            }            
            ini++;
        }, 1000 );
    } catch (error) {
        console.log(error.message);
    }
}
    
