// A minimum number of matches can be specified using one number within the curly brakets

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);