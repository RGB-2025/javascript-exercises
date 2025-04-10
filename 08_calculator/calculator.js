const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total*current);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(x) {
	return x == 0 || x == 1 ? 1 : multiply(Array.from({length: x}, (_, i) => i+1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
