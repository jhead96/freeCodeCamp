// Square brackets are used to match a single character to multiple choices
// For example, /b[aiu]g/ will match bag, big and bug but not bog

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 