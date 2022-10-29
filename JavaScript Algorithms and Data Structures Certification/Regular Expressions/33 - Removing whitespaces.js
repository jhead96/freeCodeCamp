// One common use is to remove unwanted whitespaces in strings

let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)|(\s+)$/g;
let result = hello.replace(wsRegex, ""); 

