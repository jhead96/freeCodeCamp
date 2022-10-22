function myLocalScope() {
    let myVar = 3;
    console.log('inside myLocalScope', myVar);
  }
  
  myLocalScope();
  
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);