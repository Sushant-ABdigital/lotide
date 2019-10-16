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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]] = [...results[sentence[i]], i];
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

letterPositions("LightHouse Labs");

assertArraysEqual(
  {
    L: [0, 11],
    i: [1],
    g: [2],
    h: [3],
    t: [4],
    H: [5],
    o: [6],
    u: [7],
    s: [8, 14],
    e: [9],
    a: [12],
    b: [13]
  },

  {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
  }
);
