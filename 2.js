'use strict';

// Write a function that checks, if an array contains a number
// that has 5 as divisor. If it has it should return true otherwise false.

function hasDivisableBy5(numbers) {
  var output = false;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      output = true
    }
  }
  return output
};


console.log(hasDivisableBy5([1, 8, 3, 6, 2])); // false
console.log(hasDivisableBy5([11, 7, 15, 9])); // true
