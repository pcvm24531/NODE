/**
 * File System: FS nos permite acceder a archivos del sistema.
 * Podemos acceder, leerlos, sobre escribirlos, cambiarles el nombre.
 */
const fs = require('fs');
const path = require('path');

function reading(path, cb) {
    fs.readFile(path, (err, data)=>{
        console.log(data.toString());
    } );
}
//Remplaza el contenido
function writing(path, content, cb){
    fs.writeFile(path, content, (err)=>{
        if(err){
            console.error('Nothing write...', err);
        }else{
            console.log('File Writing correctly..');
        }
    });
}

function deleting(path, cb) {
    fs.unlink(path, ()=>{
        console.log('File deleted');
        cb();
    });
}

function main() {
    setTimeout(
        ()=>{
            reading( __dirname + '/archivo.txt' );
            writing( __dirname+'/archivo1.txt', 'Soy contenido nuevo', console.log );
            deleting( __dirname+'/archivo1.txt', console.log ); 
        }, 1000
    );
}

main();
reading( __dirname + '/archivo.txt' );

