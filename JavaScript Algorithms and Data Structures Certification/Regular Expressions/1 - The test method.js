// Regular expressions (Regex) are used to match patterns in a string
// A regex is defined with no quote marks
// The .test(teststring) method will return a true or false if a pattern if found in the teststring

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

console.log(result);