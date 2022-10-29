// If an index is tried to be accessed that doesn't exist in an object there may be an "index out of range" error or undefined will be returned

function countToFiveBroken() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 1; i <= len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i <= len-1; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }

  countToFiveBroken();
  console.log();
  countToFive();