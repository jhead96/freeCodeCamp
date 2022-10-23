// Random integers can be generated in a range using the following method

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);;

  }