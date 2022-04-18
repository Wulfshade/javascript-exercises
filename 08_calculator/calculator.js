const add = (a, b) => a+b;

const subtract = (a, b) => a-b;

const sum = numbers => numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

const multiply = numbers => numbers.reduce((previousValue, currentValue) => previousValue * currentValue, 1);

const power = (number, power) => Math.pow(number, power);

const factorial = number => (number == 0) ? 1 : (number * factorial(number - 1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
