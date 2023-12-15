/**
 * este paquete nos permite trabajar con imagenes
 * #npm install sharp
 */

const sharp = require('sharp');

sharp('loop.png')
.resize(500)
.grayscale()
.toFile('resized.png');