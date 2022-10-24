// The class keyword can be used to create objects
// It is not a fully fledged class-based implementation unlike in other languages
// A class declaration has a constructor function that is invoked with the new keyword
// If the constructor method is not defined it is implicitly defined with no arguments
// UpperCamelCase is the preferred style for class names
// The this keyword defines a class variable

class Vegetable {
    // Explicit constructor
    constructor(name) {
      this.name = name;
    }
  
  }
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name);