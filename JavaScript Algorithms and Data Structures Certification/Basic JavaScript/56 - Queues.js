// A queue can be implemented with the following function

function nextInLine(arr, item) {

    arr.push(item);
    item = arr.shift();
    return item;
  }
  

  let testArr = [1, 2, 3, 4, 5];

  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));