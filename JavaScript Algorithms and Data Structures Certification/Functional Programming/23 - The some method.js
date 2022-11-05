// The some() method checks if any element in an array passes a test.
// It returns true if any element passes the test.

function checkPositive(arr) {

  
  return arr.some(i => i > 0);

  }
  
  checkPositive([1, 2, 3, -4, 5]);