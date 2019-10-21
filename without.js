// //Testing
// const eqArrays = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) {
//     console.log("Both the arrays are same");
//   } else {
//     console.log("Both the arrays are not same!");
//   }
// };

//Function
const without = (source, itemToRemove) => {
  const output = source.filter(function(el) {
    return itemToRemove.indexOf(el) < 0;
  });
  // console.log(output);
};
module.exports = without;
// without([1, 2], [2, 3]);
// without(["1", "2", "3"], [1, 2, "3"]);
// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
