// An exact number of matches can be specified using no comma within the curly brackets

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);