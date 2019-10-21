// const assertEqual = require("../assertEqual");
// const tail = require("../tail");

// //Test
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");

const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return the last element", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
