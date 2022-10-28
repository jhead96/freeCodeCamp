// You can specify the possible existence of an element with "?"
// This can be thought of as the previous symbol is optional
// For example "\colou?r\" matches "color" and "colour"

let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);