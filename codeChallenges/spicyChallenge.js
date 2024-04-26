////////////////////////////////////////////////////////////////////////////////////////
// PROMPT:
// Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of a Number. If the Number is a multiple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz". If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.
////////////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(number) {
  var result = '';

  if (number % 3 === 0) result += 'Fizz';
  if (number % 5 === 0) result += 'Buzz';

  if (result.length) {
    console.log(result);
  } else {
    console.log(number);
  }
}
