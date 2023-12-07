//Ejemplo 1
//Listar los archivos de un directorio y guardarlo en un archivo
const fs = require('fs');
const {exec} = require('child_process');

const dir = exec('ls -la', (err, stdout, sterr)=>{
    try {
        fs.writeFile(__dirname+'/archivo.txt', stdout, (err)=>{
            console.log('Lista de archivos y directorios:');
        });
    } catch (error) {
        console.error(err.message);
    }
});

//Ejemplo 2
//Leer archivo creado
const read = fs.readFile(__dirname+'/archivo.txt', (err, data)=>{
    try {
        console.log( data.toString() );
    } catch (error) {
        console.error(err.message);
    }
});

