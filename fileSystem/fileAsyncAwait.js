const { readFile } = require('node:fs/promises');

(
    async () => {
        console.log('Reading the first file...');
        const text1 = await readFile( './fileSystem/archivo2.txt', 'utf-8' );
        console.log('The first file content is: ', text1);

        console.log('Reading second file.....');
        const text2 = await readFile('./fileSystem/archivo.txt', 'utf-8');
        console.log('The second file contend is: ', text2);
    }
)();
