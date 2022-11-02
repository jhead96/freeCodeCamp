// When an object inherits its prototype in also inherits its supertype constructor property
// This can be manually changed in the usual way

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Change Bird and Dog constructor from Animal
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();