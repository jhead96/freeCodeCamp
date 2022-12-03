function diffArray(arr1, arr2) {
    const newArr = [];

    // Check arr1 for elements of arr2
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {

            newArr.push(arr2[i]);
        }
    }
    
    // Check arr2 for elements of arr1
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr2.indexOf(arr1[i]))
        if (arr2.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);