//Sistema de archivos, uno de los mas importantes, interesantes y usados
//Haremos este ejemplo con el import, el anterior ejemplo de os, lo hice con require
const fs = require('node:fs');
try {
    //Lectura sincrona
    const stats = fs.stat('./read.txt');
    console.log(
        stats.isFile(),
        stats.isDirectory(),
        stats.isSymbolicLink(),
        stats.size()
    );
} catch (erro) {
    console.error(erro);
}
