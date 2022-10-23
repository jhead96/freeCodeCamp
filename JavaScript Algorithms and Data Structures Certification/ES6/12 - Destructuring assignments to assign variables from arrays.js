// Destructuring assignments can be used for arrays

var [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

var [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

let a = 8, b = 6;
[b, a] = [a, b];