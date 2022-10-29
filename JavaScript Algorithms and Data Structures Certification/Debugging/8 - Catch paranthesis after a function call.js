// If a function takes no arguments it still requires empty brackets
// If no brackets are present, the variable will be assigned to the function NOT the result of calling the function

function myFunction() {
    return "You rock!";
  }
  let varOne = myFunction;
  let varTwo = myFunction();

  console.log(varOne);
  console.log(varTwo);