// When a constructor creates an object, the object is said to be an instance of its constructor
// The instanceof operator compares an object to a constructor returning true if they match

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(3);
  console.log(myHouse instanceof House);