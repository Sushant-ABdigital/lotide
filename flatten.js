

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

// console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;