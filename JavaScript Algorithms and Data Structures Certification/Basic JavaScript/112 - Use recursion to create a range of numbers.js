// An example of recursion to create a range of numbers

function rangeOfNumbers(startNum, endNum) {
    // Base case
    if (startNum == endNum) {
      return [startNum];
    } else {
      let range = rangeOfNumbers(startNum, endNum - 1);
      range.push(endNum);
      return range;
    }
  
    
  };