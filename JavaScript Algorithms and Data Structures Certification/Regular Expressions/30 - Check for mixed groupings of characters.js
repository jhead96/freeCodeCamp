// () are used to find groups of characters
// For example, "\P(engu|umpk)in\" will match "Penguin" and "Pumpkin"

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)\s.*?Roosevelt/; 
let result = myRegex.test(myString); 
