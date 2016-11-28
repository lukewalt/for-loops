// // Write a for loop that uses a counter variable initialized at 5
// and then increments it by 10 every time it executes. Use console.log()
// to output the value of the counter variable each time through the loop.
// Stop execution of the loop if the counter variable's value is greater than 120.
console.log("<---- 1 --->")

for (var i = 5; i < 126; i += 10) {
  console.log(i);
}

// ########################################

console.log("<---- 2 --->")

// Write a for loop with a counter variable initialized at 4096.
// Each time the loop executes divide the counter variable's value by 2.
// Use console.log() to output its value every time.
// When the counter variable's value is 1, stop execution.

for (var i = 4096; i >= 1 ; i /= 2) {
  console.log(i);
}

// ########################################

console.log("<---- 3 --->")

// Create an array that contains the names of American Presidents.
// Loop over that array with a for loop, and use string concatenation with console.log()
// to output the order and name of each President (see example below).


var americanPresidents = ["George Washington", "John Adams", "Thomas Jefferson", "Abraham Lincoln", "Fanklin Roosevelt", "Barack Obama"];

for (var i = 0; i < americanPresidents.length; i++) {
  console.log(americanPresidents[i] + " was a president of the USA");
}


// ########################################

console.log("<---- 4 --->")

// Use can use another kind of for loop to iterate over objects.
// Iterate over the object below and use console.log() to output
// the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var i in antSpecies) {
  console.log(i);
}
