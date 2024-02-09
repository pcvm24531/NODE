//Objeto proces, proporciona informacion y control sobre el proceso actual
//argumentos, obtener los argumentos
const argumentos = process.argv;
console.log(argumentos[argumentos.length-1]);

//Controlar el proceso y su salida
//0=>Todo ha salido bien, 1=>Hubo error, 2=>
//process.exit(0); 

//Controlar eventos del proceso
/*process.on( 'exit', ()=>{
    //limpiar recursp
    console.log('Saliendo..');
} );*/

//Current working directory, desde que carpeta estamos ejecutando o inicializando el proceso, directorio donde estamos trabajando.
const cwd = process.cwd();
console.log(cwd);

//Verificar si se esta ejecutando para produccion o desarrollo
