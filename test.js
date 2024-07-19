const functions2test = require("./functions2test");

// Capitalize

const capitalize = functions2test.capitalize

test('Capitalize "teSt"', () => {
    expect(capitalize("teSt")).toBe("TEST");
});

test('Capitalize "aaa"', () => {
    expect(capitalize("aaa")).toBe("AAA");
});

test('Capitalize "eNumA"', () => {
    expect(capitalize("eNumA")).toBe("ENUMA");
});

test('Capitalize "v"', () => {
    expect(capitalize("v")).toBe("V");
});

// reverseString

const reverseString = functions2test.reverseString

test('reverseString "hello"', () => {
    expect(reverseString("hello")).toBe("olleh");
});

test('reverseString "test a space"', () => {
    expect(reverseString("test a space")).toBe("ecaps a tset");
});

// calculator

const calculator = functions2test.calculator

test('calculator add "1 + 9"', () => {
    expect(calculator.add(1, 9)).toBe(10);
});

test('calculator subtract "5 - 2"', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('calculator divide "25 / 5"', () => {
    expect(calculator.divide(25, 5)).toBe(5);
});

test('calculator multiply "3 x 3"', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});

// calculator

const caesarCipher = functions2test.caesarCipher

test('caesarCipher "xyz" shift of 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher "HeLLo" shift of 3', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('caesarCipher "Hello, World!" shift of 3', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
