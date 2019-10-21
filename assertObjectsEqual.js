const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    //Checking if it same length of keys
    return false;
  } else {
    for (const key of key1) {
      //Checking if one of the key has an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //if Yes - then execute the eqArrays function.
        if (!eqArrays(object1[key], object2[key])) {
          return false; //It will exit entire for loop
        }
      } else {
        //Continue checking with ===
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" });

module.exports = assertObjectsEqual;