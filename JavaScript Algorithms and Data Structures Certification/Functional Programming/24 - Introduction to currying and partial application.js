// The arity of a function is the number of arguments it requires.
// Currying a function means to convert a function of N arity into N functions of arity 1
// Partial application is supplying a few arguments to a function and returning another function that can be applied to more arguments
// These are useful when not all arguments can be supplied at once.

// Currying
function unCurried(x, y) {
    return x + y;
}
  
  function curried(x) {
    return function(y) {
      return x + y;
    }
}
  
const curried = x => y => x + y
  
curried(1)(2)

// Partial application
const funcForY = curried(1);
console.log(funcForY(2)); // 3


function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  
  }
  
  add(10)(20)(30);