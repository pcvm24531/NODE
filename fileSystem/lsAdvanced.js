const { error } = require('node:console');
const fs = require( 'node:fs/promises' );
console.log( process.argv );
const folder = process.argv[2] ?? '.' ;

fs.readdir( folder )
.then( files =>{
    files.forEach( file =>{
        console.log(file);
    })
})
.catch( error => {
    if( error ){
        console.error('Error al leer el directorio', error);
        return;
    }
} );

//Al hacer la llamada, se puede enviar como parámetro el nombre de la carpeta que queremos inspeccionar
//Ej: node ./fileSystem/index.php ./assert