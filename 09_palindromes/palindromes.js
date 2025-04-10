const palindromes = function (string) {return string.replace(/\W|_/g, '').toLowerCase().split('').reverse().join('') === string.replace(/\W|_/g, '').toLowerCase()};

// Do not edit below this line
module.exports = palindromes;
