function destroyer(arr) {
    let [,...vals] = arguments;

    // Mark matching elements for removal
    for (let i = 0; i < vals.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log("j = " + j);
        console.log(arr);
        if (arr[j] == vals[i]) {
            console.log("Arr value = " + arr[j] + ", Delete val = " + vals[i]);
            arr[j] = false;
  
        } 
      }
    }
  
    // Filter elements
    return arr.filter(i => i);
  }
  
  console.log(destroyer([2, 3, 2, 3], 2, 3));