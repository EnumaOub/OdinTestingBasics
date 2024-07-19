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