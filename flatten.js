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

//Creating function to flatten an array
const flatten = arr => {
  let output = [];
  arr.forEach(el => {
    if (!Array.isArray(el)) {
      output.push(el);
    } else {
      el.forEach(e => output.push(e));
    }
  });
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
