// The + sign is used for one or more characters
// The * is used for zero or more characters
// Curly brackets defines a lower and upper number of matches
// For example "\a{3,5}h\" matches "aaah", "aaaah" and "aaaaah" and nothing else

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
let result = ohRegex.test(ohStr);