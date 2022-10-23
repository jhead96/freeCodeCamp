// The spread operator allows arrays to be expanded in places where multiple parameters are expected
// It is defined as ... and unpacks arrays
// It only works in place (i.e. in a function call) and cannot be stored in a variable

// .apply expects comma separated arguments not an array
// arr is unpacked using the spread operator

let arr = [6, 89, 3, 45];
let maximus = Math.max(...arr);
console.log(maximus);


// It can also be used in array creation
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);