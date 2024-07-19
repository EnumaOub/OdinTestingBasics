const capitalize = function(str) {
    return str.toUpperCase()
}

const reverseString = function(str) {
    return str.split("").reverse().join("")
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
};