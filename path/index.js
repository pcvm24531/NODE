const path = require('node:path');

//Identificamos la Barra separadora de carpetas según SO
console.log(path.sep);//Devuelve el / o \ dependiendo del SO

//Unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt');
console.log('This is filePaht: ', filePath);

const base = path.basename('../fileSystem/archivo2.txt');
console.log('This is base path: ',base);
//Obtenemos solo el nombre sin extension
const fileName = path.basename('../fileSystem/archivo2.txt', '.txt');
console.log('Only name: ', fileName);
//Obtenemos solo la extension del archivo
const extension = path.extname('../fileSystem/archivo2.txt');
console.log('The file extension: ',extension);