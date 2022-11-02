function frankenSplice(arr1, arr2, n) {

    if (arr2.length == 0) {
        return arr1;
    }

    // Splice arr2
    arr2.splice(n, 0, ...arr1);
    // Copy spliced array values to new array
    let splicedArr = [...arr2];
    // Unsplice arr2
    arr2 = arr2.splice(n, arr1.length);
    return splicedArr;

  }

frankenSplice([1, 2, 3], [4, 5, 6], 1);