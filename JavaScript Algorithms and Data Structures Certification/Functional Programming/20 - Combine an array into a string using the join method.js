// The join() method joins array elements into a string separated by a specified delimiter.

function sentensify(str) {

    return str.split(/\W/).join(" ");
    
  }
  
  sentensify("May-the-force-be-with-you");