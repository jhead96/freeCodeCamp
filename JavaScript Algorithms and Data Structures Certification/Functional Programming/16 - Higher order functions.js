// A more complex example

const squareList = arr => {

    // Filter for positive and integer
    let integerArr = arr.filter(i => Number.isInteger(i) && i > 0)
    console.log(integerArr)
    // Sqaure
    return integerArr.map(i => (i*i));

  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);