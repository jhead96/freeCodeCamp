// Mixins allow unrelated objects to use a shared set of functions

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Define mixin
  let glideMixin = function(obj) {
    obj.glide = function() {}
  }
  
  // Assign to objects
  glideMixin(bird);
  glideMixin(boat);