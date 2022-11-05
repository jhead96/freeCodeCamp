// The .sort() method mutates the array in place.
// One way to create a copy is to first to concatenate an empty array to the one to be sorted before calling .sort()

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

  let newArr = arr.concat([]);
  return newArr.sort((a,b) => {return a - b;});


}


console.log(nonMutatingSort(globalArray));