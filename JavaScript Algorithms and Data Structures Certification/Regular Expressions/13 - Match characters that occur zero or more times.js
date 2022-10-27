// The * matches characters that occur zero or more times
// For example, "/go*/" wil match "goo" in "gooal" and "g" in "gut"


let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);