// All objects in JavaScript has a prototype
// Since a prototype is an object it also has a prototype
// Most prototypes will be derived from Object.prototype

function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  Object.prototype.isPrototypeOf(Dog.prototype);