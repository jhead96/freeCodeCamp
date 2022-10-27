// Letters in a range can be matched using a -
// For example, [a-e] will match a,b,c,d,e

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 