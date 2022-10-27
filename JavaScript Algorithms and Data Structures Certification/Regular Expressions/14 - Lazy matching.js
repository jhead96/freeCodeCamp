// A greedy match finds the longest possible part of a string that matched the regex
// By default, all regex matches are greedy
// A lazy match will find the shortest match and is specified using a ?
// For example "/t[a-z]*?/i" will match "ti" in "titanic"

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);