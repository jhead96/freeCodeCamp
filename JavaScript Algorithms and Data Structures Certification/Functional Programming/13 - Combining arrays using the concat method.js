// Arrays can be combined using the .concat() method.
// This creates a new copy

function nonMutatingConcat(original, attach) {

    return original.concat(attach);
  
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);