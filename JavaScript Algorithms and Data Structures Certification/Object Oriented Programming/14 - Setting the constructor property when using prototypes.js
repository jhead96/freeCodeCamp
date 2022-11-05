// Setting a prototype erases the constructor
// It must be manually redefined

function Dog(name) {
    this.name = name;
  }
  
 
  Dog.prototype = {
    // Constructor
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };