/**
 * Es un modulo que funciona sobre cryp, pero añade muchas funciones que permiten sifrar
 * Para instalar este paquete usamos el comando # npm install bcrypt
 * bcrypt funciona con callbas y tambien funciona con promesas
*/

const bcrypt = require('bcrypt');

const password = "1234Segura!";
//Ejemplo bcryp con callback
bcrypt.hash(password, 5, (err, hash)=>{
    try {
        console.log(hash);

        //Verificar si el hash es generado a partir del pass
        bcrypt.compare( 'password', hash, (err, res)=>{
            try {
                console.log(res);
            } catch (error) {
                throw error.message;
            }
        } );
    } catch (error) {
        throw error.message;
    }
}); //