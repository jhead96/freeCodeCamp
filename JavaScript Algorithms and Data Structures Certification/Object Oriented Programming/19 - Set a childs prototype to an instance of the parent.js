// To inherit from the parent object, the child must use the prototype from the parent object

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Let Dog inherit methods from Animal
Dog.prototype = Object.create(Animal.prototype);
// Make new Dog
let beagle = new Dog();