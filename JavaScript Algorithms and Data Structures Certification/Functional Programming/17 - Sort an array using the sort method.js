// The sort() method sorts arrays according to the callback function.
// If a callback function is supplied, the return value is used to sort the two inputs.
// If the return value is negative, a is placed before b.
// If the return value is 0, the position of a and b are unchanged.
// If the return value is positive, b is placed before a.

function alphabeticalOrder(arr) {
  
    return arr.sort()

  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);