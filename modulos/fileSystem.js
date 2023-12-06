/**
 * File System: FS nos permite acceder a archivos del sistema.
 * 
 */
const fs = require('fs');

function reading(path, cb) {
    fs.readFile(path, (err, data)=>{
        console.log(data.toString());
    } );
}
function writing(path, content, cb){
    fs.writeFile(path, content, (err)=>{
        if(err){
            console.log('Nothing write...');
        }else{
            console.log('Writing correctly..');
        }
    });
}

//reading( __dirname + '/archivo.txt' );
writing( __dirname+'/archivo.txt', 'Son contenido nuevo', console.log(12) );

reading( __dirname + '/archivo.txt' );