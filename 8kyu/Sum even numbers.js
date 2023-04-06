// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// solution

function sumEvenNumbers(input) {
    return input.filter(function(el) {
      return el % 2 == 0;
    }).reduce(function(a, b) {
      return a + b;
    });
  }

// solution 2
function sumEvenNumbers(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] % 2 == 0 ? sum += input[i] : 0;
    };
    return sum;
}
