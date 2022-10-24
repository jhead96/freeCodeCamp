// Getter functions are designed to return the value of a private variable without the user being able to access the variable
// Setter functions are designed to modify the value of the private variable based on the input parameters
// They are defined using the get and set keywords
// Private variables are often denoted with an _ however this is common practice only, it doesn't affect the behaviour of the code


class Thermostat{
    constructor (tempF) {
      this._temperature = tempF;
      console.log(this._temperature);
    }
  
    set temperature(C) {
      this._temperature = (C * 9.0) / 5 + 32;
    }
  
    get temperature() {
      return (5 / 9) * (this._temperature - 32);
    }
  
  }

  const thermos = new Thermostat(76); // Setting in F
  let temp = thermos.temperature; // Getter returns in C
  thermos.temperature = 26; // Setter sets in F
  temp = thermos.temperature; // Getter returns in C



