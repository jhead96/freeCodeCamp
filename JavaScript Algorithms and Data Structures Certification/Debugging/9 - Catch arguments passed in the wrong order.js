// Arguments passed in the wrong order to the function will throw a runtime error if the type is wrong
// If the type is correct the logic of the function won't make sense

function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
  console.log(power);