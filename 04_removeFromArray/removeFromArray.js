const removeFromArray = function(array = [], ...remove) {
    return array.filter((i) => !remove.includes(i));
}

// Do not edit below this line
module.exports = removeFromArray;
