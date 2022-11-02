// The isPrototypeOf() method is used to check where a prototype was assigned from

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle);