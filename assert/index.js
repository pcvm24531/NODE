const assert = require('node:assert/strict');

//assert.deepEqual( [[[1,2,3]],4,5 ], [[[1,2,3]],4,5 ] );

try {
    assert.strictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
} catch (error) {
    assert(error instanceof assert.AssertionError);
    assert.strictEqual( error.message, message );
}
