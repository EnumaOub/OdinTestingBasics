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

const caesarCipher = function(str, shift) {
    let strArr = str.split("");
    strArr.forEach((char, index) =>  {
        const code = char.charCodeAt()
        if (code <= 90 && code >= 65) {
            strArr[index] = String.fromCharCode((code - 65 + shift) % 26 + 65);  
        }
        else if (code <= 122 && code >= 97) {
            strArr[index] = String.fromCharCode((code - 97 + shift) % 26 + 97);  
        }
    })
    return strArr.join("");
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
};