// The strict inequality operator is defined as !==

function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  


  console.log(testStrictNotEqual("17"));
  console.log(testStrictNotEqual(17));