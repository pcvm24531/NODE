const fs = require('node:fs');

//Leer los archivos de una carpeta
fs.readdir('.' , (err, files)=>{
    if (err) {
        console.log(err.message());
        return
    }
    //Recorremos la lista de archivos
    files.forEach(file => {
        console.log( file );
    });
} );

//