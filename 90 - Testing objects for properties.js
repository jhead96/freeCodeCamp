// An object can be tested for the existence of a property using the .hasOwnProperty(propName) method

function checkObj(obj, checkProp) {

    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp]
    }
    return "Not Found";
    
  }