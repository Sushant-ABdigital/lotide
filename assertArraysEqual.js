// const eqArrays = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// };
const eqArrays = require('./eqArrays');
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("Both the arrays are same");
  } else {
    console.log("Both the arrays are not same!");
  }
};

//Export
module.exports = assertArraysEqual;