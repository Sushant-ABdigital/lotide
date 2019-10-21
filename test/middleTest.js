// const assertArraysEqual = require('../assertArraysEqual');

// //Testing by adding own tests
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

//Adding M & C
const assert = require("chai").assert;
const middle = require("../middle");

describe("#middleTest", () => {
  it("should give the middle element from an array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
