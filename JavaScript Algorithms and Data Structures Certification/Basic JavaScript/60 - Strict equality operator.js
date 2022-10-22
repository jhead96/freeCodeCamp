// The strict equality operator is defined as === and checks if the value and type of the variables are equal

function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  let x = testStrict("7");
  console.log(x);