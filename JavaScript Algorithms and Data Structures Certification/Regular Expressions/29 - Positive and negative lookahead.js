// Lookaheads are patterns to look-ahead in the string to check for patterns, used to match multiple patterns in the same string
// A positive lookahead will look to see if the element in the search pattern is there, but won't match
// Positive lookaheads are used as "(?=...)" where "..." is the part that is not matched
// Negative lookaheads will look to make sure the element in the search pattern is not present
// Negative lookaheads are used as "(?!...)" where "..." is the pattern you don't want to be there
// The rest of the pattern is returned if the negative lookahead part is not present

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);

// Example of positive lookaheads
// Consider a simple checker that looks for 3-6 characters and at least one number

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);