const takeUntil = function(array, callback) {
  // Implementation of function here
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return output;
    }
    output.push(array[i]);
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);

//Testing

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log("Both the arrays are same");
  } else {
    console.log("Both the arrays are not same!");
  }
};

assertArraysEqual([1, 2, 5, 7, 2], [1, 2, 5, 7, 2]);
