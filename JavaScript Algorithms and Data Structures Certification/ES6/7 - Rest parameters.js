// The rest parameter is used for functions that can take in a variable number of arguments
// These arguments are stored in an array that can be accessed within the function

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }