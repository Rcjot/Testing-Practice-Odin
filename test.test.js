const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesarCipher = require("./caesarCipher");

test("capitalize apple", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("capitalize london", () => {
  expect(capitalize("london")).toBe("London");
});

test("reverse apple", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("reverse PizZa", () => {
  expect(reverseString("PizZa")).toBe("aZziP");
});

test("calculator add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator subtract", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("calculator multiply", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("calculator divide", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("caesarCipher test wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher test lettercase", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher test punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
