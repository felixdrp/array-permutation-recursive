const { getPermutations } = require('../index')
const { strict: assert } = require('node:assert');
const { describe, it } = require('node:test');

const array1 = [ "Insulin", "Test", "Diagnosis" ];

const result1 = [
    [ 'Insulin', 'Test', 'Diagnosis' ],
    [ 'Insulin', 'Diagnosis', 'Test' ],
    [ 'Test', 'Insulin', 'Diagnosis' ],
    [ 'Test', 'Diagnosis', 'Insulin' ],
    [ 'Diagnosis', 'Insulin', 'Test' ],
    [ 'Diagnosis', 'Test', 'Insulin' ]
  ]


describe("unit test", function() {
  it("getPermutations call with undefined", function() {
    const permutation = getPermutations(undefined);
    assert.deepEqual(permutation, null);
  });
  it("getPermutations works ok", function() {
    const permutation = getPermutations(array1);
    assert.deepEqual(permutation, result1);
});
});