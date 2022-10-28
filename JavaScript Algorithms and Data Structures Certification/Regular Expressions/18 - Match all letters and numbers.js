// The shortcut character class "\w" matches the same as "[A-Za-z0-9_]"

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
