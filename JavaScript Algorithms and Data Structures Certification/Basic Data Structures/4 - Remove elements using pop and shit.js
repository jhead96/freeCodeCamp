// Elements can be removed from the end of an array using .pop()
// Elements can be removed from the start of an array using .shift()

function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));