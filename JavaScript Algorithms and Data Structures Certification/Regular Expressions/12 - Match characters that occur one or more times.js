// Characters the appear one or more times in a row can be matched with +
// For example, /a+g/, would match "a" in "abc" and "aa" in "aabc"

let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);