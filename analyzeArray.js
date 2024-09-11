function analyzeArray(arr) {
  let object = {};

  object["average"] = arr.reduce((total, num) => total + num, 0) / arr.length;
  object["min"] = arr.reduce((total, num) => (num > total ? total : num));
  object["max"] = arr.reduce((total, num) => (num < total ? total : num));
  object["length"] = arr.length;
  return object;
}
// analyzeArray([1, 8, 3, 4, 2, 6]);

module.exports = analyzeArray;
