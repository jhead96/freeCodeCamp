// The filter method can be implemented using a for loop

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Make new array
  const newArray = [];
  // Iterate through elements
  for (let i = 0; i < this.length; i++) {
    // If callback() returns true add to newArray
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});