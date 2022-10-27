// The .match(regex) method is a method available to strings used to extract the first regex match from a string

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);