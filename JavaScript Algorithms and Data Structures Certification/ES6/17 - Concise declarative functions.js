// The function keyword can be omitted for a function within an object

// Old method
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };

  // New method
const bicycle = {
    gear: 2,
    setGear(newGear){
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);
