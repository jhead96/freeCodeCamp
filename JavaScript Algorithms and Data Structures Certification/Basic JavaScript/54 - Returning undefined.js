// If a function doesn't have a return value, it will return undefined

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

console.log(sum);
let y = addThree();
console.log(sum);
console.log(y);
addFive();
console.log(sum);