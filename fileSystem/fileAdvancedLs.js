const fs = require( 'node:fs/promises' );
const path = require('node:path');

const folder = process.argv[2] ?? '.' ;

async function ls( folder ){
    //Obtenemos los ficheros
    let files;
    try {
        files = await fs.readdir(folder);
    } catch (error) {
        console.error( `No se pudo leer el directorio ${folder} ` );
        process.exit(1);
    }//Fin obtener archivos

    //Obtener la informacion de los archivos
    const filesPromises = files.map( async file =>{
        const filePath = path.join( folder, file );
        let stats;
        
        try {
            stats = await fs.stat( filePath );//Contenido de un archivo
        } catch (error) {
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(0);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size.toString();
        const fileModified = stats.mtime.toLocaleDateString();

        return ` ${fileType}  ${file.padEnd(20)}  ${fileSize.padStart(10)}  ${fileModified} `;
    });

    const filesInfo = await Promise.all( filesPromises );
    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });
}
ls(folder);
//Al hacer la llamada, se puede enviar como parámetro el nombre de la carpeta que queremos inspeccionar
//Ej: node ./fileSystem/index.php ./assert