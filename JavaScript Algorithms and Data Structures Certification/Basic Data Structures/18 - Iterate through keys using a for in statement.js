// A for ... in ... statement iterates through all the keys of an object 

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let numOnline = 0;
    for (let user in usersObj) {
      if (usersObj[user]["online"]) {
        numOnline += 1;
      }
    }
  
    return numOnline
  
  }
  
  console.log(countOnline(users));