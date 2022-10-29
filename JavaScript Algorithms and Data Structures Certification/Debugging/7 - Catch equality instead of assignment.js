// If an assignment is made, almost all values evaluate to true
// The only exceptions are false, 0, "", NaN, undefined and null

let x2 = 1;
let y2 = 2;
if (x2 = y2) {
    console.log("Condition is true")
} else {

}

// Fixed
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);