// Prototype properties are shared between all instances

function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");