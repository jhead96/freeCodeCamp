// There are two ways of checking a property exists
// The first way is the .hasOwnProperty(property) method
// The second way is the in keyword
// The statment '"property" in object' will return true if the property is in the object

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    
    if ((("Alan" in userObj && "Jeff" in userObj) && ("Sarah" in userObj && "Ryan" in userObj))) {
      return true
    } 
  
    return false

  }
  
  console.log(isEveryoneHere(users));