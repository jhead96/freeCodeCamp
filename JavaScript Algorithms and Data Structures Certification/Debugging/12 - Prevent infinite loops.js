// Conditions on a while loop that never evaluate to true will cause the program to enter an infinite loops

// Broken function with infinite loop
function myFuncInf() {
    for (let i = 1; i != 4; i += 2) {
      console.log("Still going!");
    }
  }

// Fixed function
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
  }