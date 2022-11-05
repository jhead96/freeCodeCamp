// The splice() method can be used to remove elements from an array.
// However it mutatates the original array to do this.
// The slice() method can be used to remove elements by making a copy of the array that only contains elements that should be kept.


function mutatingSplice(cities) {
    // Delete all elements past index 2
    return cities.splice(3);

  }

function nonMutatingSplice(cities) {
    // Keep first 3 elements only
    return cities.slice(0, 3);

  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);