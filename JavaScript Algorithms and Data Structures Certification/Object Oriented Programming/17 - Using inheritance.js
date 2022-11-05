// If properties and methods are shared among multiple objects, inheritance can be used to minimise code repitition
// Shared methods and properties can be defined in a supertype
// Objects that inherit from the supertype also gain its functionalty, in addition to object specific functionality

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() {}
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {console.log("nom nom nom");}
    
  
  };