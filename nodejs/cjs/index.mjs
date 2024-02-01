// .js -> Por defecto usa CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { suma, mult } from "./suma.mjs";
console.log( 'Sum: ',suma(3,2) );
console.log( 'Mult: ',mult(3,2) );