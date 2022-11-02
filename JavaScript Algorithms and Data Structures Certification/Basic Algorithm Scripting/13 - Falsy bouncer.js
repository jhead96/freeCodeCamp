function bouncer(arr) {
    let noFalsyArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Boolean(arr[i])) {
        noFalsyArr.push(arr[i]);
      }
    }
    return noFalsyArr;
  }
  
  bouncer([7, "ate", "", false, 9]);