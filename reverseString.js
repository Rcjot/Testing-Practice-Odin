function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  //   console.log(reversedString);
  return reversedString;
}

module.exports = reverseString;
