// The shortcut for not matching all numbers and letters is "\W" and is equivalent to [^A-Za-z0-9_]
// You can search for the opposite pattern using a capital letter

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;