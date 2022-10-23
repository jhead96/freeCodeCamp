// Var defines a global variable or a local variable if defined within a function

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
//console.log(numArray);
//console.log(i);

// This causes problems if the variable is used within a function created inside a for loop
// i = 3 is printed since it returns the global i that is incremented after creation of printNumTwo()

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
//console.log(printNumTwo());

// The let keyword doesn't follow this behaviour
// printTwo now prints j = 2 since printTwo() was created inside the for loop where j was declared
// The error is due to j not being declared in global scope as it only exists locally inside the loop statement

let printTwo;
for (let j = 0; j < 3; j++) {
  if (j === 2) {
    printTwo = function() {
      return j;
    };
  }
}
console.log(printTwo());
//console.log(j);

// In this example using let allows for variables of the same name to be defined
// The first n is local to the function
// The second n is local to the if statement

function checkScope() {
    let n = 'function scope';
    if (true) {
      let n = 'block scope';
      console.log('Block scope i is: ', n);
    }
    console.log('Function scope i is: ', n);
    return n;
  }

