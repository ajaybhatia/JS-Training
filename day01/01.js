// ECMAScript 2020 ES10 / ES5+

// Declaration of variable

/*
 1. using const keyword
 2. using let keyword
 3. using var keyword (depreciated)
*/

/*
 Indentifier naming convention
 1. First letter, it should begin with either an _ or an alphabet (lowercase or uppercase)
 2. In between name; alphabets, _ or numbers are valid
 3. Two consecutive _ are valid
 4. No whitespace is allowed for example var 1
*/

const variable1 = 10;
let variable2 = true;

// To print in JS, console can be used
console.log(variable1, variable2);

// variable1 = "Apple"; // Re-initialization is invalid: Error
// variable2 = 40;
// console.log(variable1, variable2);

var variable3 = 50;
console.log(variable3);

// Permissible types
console.log(typeof variable2);

// Strings "", '', ``

// String interplotation using backticks
const numberOfApples = 5;
const priceOfAnApple = 10;
console.log(
  `I bought ${numberOfApples} apples for ${numberOfApples *
    priceOfAnApple} rupees`
);

// Operators
/*
    1. Arithmetic Operators
    +, -, *, /, %, ++, --
*/

let a = 10;
const b = 20.78;

console.log(++a);
console.log(a + b - a / b + a++);
