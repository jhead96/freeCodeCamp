// The every method works on an array to check if every element passes a test.
// If all elements pass it returns true else if one element fails it returns false.

function checkPositive(arr) {

    return arr.every(i => (i > 0));

  }
  
  checkPositive([1, 2, 3, -4, 5]);