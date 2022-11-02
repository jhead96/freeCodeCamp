function getIndexToIns(arr, num) {
    // Add element to array
    arr.push(num);
    // Sort array
    arr.sort((a, b) => a - b);
    
    // Search for element of inserted item
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }
    }

  }
  
  getIndexToIns([40, 60,], 50);