// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = arr => {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else {
    const result = arr.slice(1);
    return result;
  }
};

module.exports = tail;
