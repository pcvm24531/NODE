import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./fileSystem/archivo.txt','utf-8'),
    readFile('./fileSystem/archivo2.txt','utf-8')
]).then( ([firstFile, secondFile]) => {
    console.log('The first file content: ', firstFile);
    console.log('The second file content: ', secondFile);
} );