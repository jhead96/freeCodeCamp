// The push() method adds elements to the end of an array, mutating the original array.
// The concat() method adds elements without any mutation.

function nonMutatingPush(original, newItem) {

    return original.concat(newItem);
  
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);