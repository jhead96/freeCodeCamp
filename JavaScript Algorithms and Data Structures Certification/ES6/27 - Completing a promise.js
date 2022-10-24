// A promise has 3 states: pending, fulfilled and rejected.
// Resolve is used when you want the promise to succeed
// Reject is used when you want it to fail

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });