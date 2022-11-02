// A for loop can iterate over all own properties and prototype properties

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  

  for (let property in beagle) {
    // Own props
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
      // Prototype props
    } else {
      prototypeProps.push(property);
    }
  }