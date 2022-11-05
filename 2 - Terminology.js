// Callbacks - The function passed into another function to decide the invocation of the function.
// First class functions - Functions that act like normal variables. In JavaScript, all functions are first class functions.
// Higher order function - Functions that accept a function as an argument or return a function.
// Lambda function - Function that is passed in to or returned from another function.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);