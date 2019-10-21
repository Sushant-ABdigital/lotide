const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = (source, value) => {
  let output = "";
  const keys = Object.keys(source);
  for (const key of keys) {
    if (source[key] === value) {
      output = key;
      return output;
    }
  }
};
// findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");

module.exports = findKeyByValue;
