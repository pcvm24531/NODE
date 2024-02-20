const assert = require('node:assert/strict');

const marcas = ['toyota','nissan'];
const marcas1 = ['toyota','nissan'];
try {
    //compare = assert.deepEqual(marcas, marcas1);
    assert.strictEqual(marcas, marcas1);
} catch (error) {
    console.log( error.message );
}