//Before Module/Require functionality
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// const assertEqual = require('./assertEqual');

const head = arr => {
  if (arr.length === 0) {
    return undefined;
  } else {
    const output = arr[0];
    return output;
  }
};

//Export
module.exports = head;
