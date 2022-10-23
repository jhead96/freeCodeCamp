// The rest parameter can be used to group any number of parameters into a separate array

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// Function for removing first 2 elements of array
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,,...a] = list;

  return a;
}
const g = removeFirstTwo(source);
