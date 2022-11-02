function mutation(arr) {
    console.log(arr);
  
    for(let i = 0; i < arr[1].length; i++) {

        console.log(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()))
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1) {
            return false;
        }
      
    }

    return true;

  }
  
  console.log(mutation(["hello", "leoh"]));