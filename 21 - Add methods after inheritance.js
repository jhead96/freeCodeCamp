// A constructor function that inherits its prototype from a supertype can have its own methods

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// Add new function to Dog object
Dog.prototype.bark = function() {
  console.log("Woof!");
};



let beagle = new Dog();