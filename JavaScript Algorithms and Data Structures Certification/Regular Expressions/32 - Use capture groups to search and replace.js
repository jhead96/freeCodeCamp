// Capture groups can be used to replace a match using .replace(regex, replacement)
// Capture groups in the replacement string can also be accessed with the "$"
// For example .replace(regex, "$2 $1") will replace instances of capture group 1 with capture group 2 in the string 

// Regex to swap "one two three" to "three two one"
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/g;
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);