const capitalize = function(str) {
    return str.toUpperCase()
}

const reverseString = function(str) {
    return str.split("").reverse().join("")
}

module.exports = {
    capitalize,
    reverseString,
};