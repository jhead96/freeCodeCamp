// Functional programming can be used to avoid errors caused by variables being changed unexpectedly by functions

// The global variable
let fixedValue = 4;

function incrementer() {

  return fixedValue + 1;

}