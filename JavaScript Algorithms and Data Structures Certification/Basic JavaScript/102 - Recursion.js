// Recursion expresses a function in terms of itself
// All recursive functions must have a base case to break out from the recursion

function sum(arr, n) {

    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n-1) + arr[n - 1];
    }
    
  }