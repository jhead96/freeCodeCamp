// An example of a recursive counter

// Only change code below this line
function countdown(n){

    // Base case
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  
  }

  console.log(countdown(5))