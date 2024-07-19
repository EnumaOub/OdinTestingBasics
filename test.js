const functions2test = require("./functions2test");

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