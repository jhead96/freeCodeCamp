// Creating variables inside the constructor function makes them act like private variables
// Only functions within the constructor can access or modify the variables

function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    }
  
  
  }