// Promises are used when a process that takes an unkown amount of time is used in your code, like a server request
// After it completes the then method is immediately executed if the promise is fulfilled with resolve
// The then method returns the parameter within the resolve function

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });

makeServerRequest.then(result => {console.log(result)});