// Multiple prototypes can be added to an object by putting them in an object

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 4,
    eat: function(){console.log("nom nom nom");},
    describe: function(){console.log("My name is " + this.name);}
  };