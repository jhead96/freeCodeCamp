// The map() method is equivalent to a for loop

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {

  // Make new array
  const newArray = [];
  // Put each element of s through callback function
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

// s is unchanged
console.log(s)