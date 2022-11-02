// In IIFE is often used to group related functionality into a module

let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
  })();

  funModule.isCuteMixin();
  funModule.singMixin();