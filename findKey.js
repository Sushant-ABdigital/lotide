const findKey = (source, callback) => {
  let output = "";
  for (const el in source) {
    if (callback(source[el])) {
      output = el;
      return output;
    }
  }
};
console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    x => x.stars === 2
  )
);
