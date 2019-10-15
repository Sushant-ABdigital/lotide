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

//Middle function to get the middle value from an array.

const middle = arr => {
  const midValue = Math.ceil(arr.length / 2);
  const output = [];

  if (arr.length <= 2) {
    // cheking if there is only 2 items max in array.
    return output;
  } else if (arr.length % 2 === 1) {
    //Cheking here if it is odd.
    output.push(arr[midValue - 1]);
    return output;
  } else {
    //For all other cases - even array lengths
    output.push(arr[midValue - 1], arr[midValue]);
    return output;
  }
};

console.log(middle([1, 2, 3, 4, 5, 6]));

//Testing by adding own tests
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
