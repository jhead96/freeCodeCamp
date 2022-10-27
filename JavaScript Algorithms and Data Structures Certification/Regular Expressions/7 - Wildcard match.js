// The wildcard character . is used to match any character
// For example /hu./ will match hug,hub,hut etc.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);