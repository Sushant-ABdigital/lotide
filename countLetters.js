const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//For in -> index &
//for of ->  value
const countLetters = str => {
  let output = {};
  for (const char of str) {
    // console.log(char); //L to s
    if (char !== " ") {
      if (output[char]) {
        output[char] += 1;
      } else {
        output[char] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters("Lighthouse labs"));
