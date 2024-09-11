function caesarCipher(string, shift) {
  let encrypted = "";
  for (let char of string) {
    shift = shift % 26;
    let charCode = char.charCodeAt(0);
    if (
      !(charCode >= 65 && charCode < 91) &&
      !(charCode >= 97 && charCode < 123)
    ) {
      //   console.log("true");
      encrypted += char;
      continue;
    }
    let baseNumber = char === char.toUpperCase() ? 65 : 97;
    let base = char === char.toUpperCase() ? charCode - 65 : charCode - 97;

    let baseCheck = base + shift;
    let shiftTo;
    if (baseCheck > 25) {
      shiftTo = baseCheck - 26 + baseNumber;
    } else {
      shiftTo = baseCheck + baseNumber;
    }

    encrypted += String.fromCharCode(shiftTo);
  }

  return encrypted;
  //   console.log(encrypted);
  //   console.log(string.charCodeAt(0));
  //   console.log(String.fromCharCode(98));
}

module.exports = caesarCipher;
