/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console?
  4. How many times is "f1" called?
  5. How many times is "f2" called?
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); // x is a global variable
console.log(a); // this a is a global variable
// console.log(b); This line throws the error as b is not defined

for (let i = 0; i < 5; ++i) {
  a = a + 1; // a is incremented 5 times as long as the loop's index is less that 5
  if (i % 2 === 0) {
    const d = f2(i, x); // f2 is called at i=0,2,4
    console.log(d); // 4,6 and 8 are the results of this statement
  } else {
    const e = f1(i, a); // f1 is called at i=1,3
    console.log(e); //9 and 13 are the results of this statement
  }
}
