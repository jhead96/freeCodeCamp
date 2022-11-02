function largestOfFour(arr) {
    let largestArr = [];
    let arrSize;
  
    for (let i = 0; i < arr.length; i++) {
      // Assign initial value to first sub array value
      arrSize = arr[i][0];
      
      // Can ignore arr[i][0]
      for (let j = 1; j < arr[i].length; j++) {

        if (arr[i][j] > arrSize) { 
            arrSize = arr[i][j];
        }
      }
      largestArr.push(arrSize);
    }
    
    return largestArr;
  }

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

