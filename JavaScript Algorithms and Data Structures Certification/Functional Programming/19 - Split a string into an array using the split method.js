// The split() method splits a string into an array by specifying a delimiter.
// It can be specified using regex

function splitify(str) {

    return str.split(/\W/);

  }
  
  console.log(splitify("Hello World,I-am code"));