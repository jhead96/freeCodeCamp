// Recursive if/else
function factorialize(num) {

    if (num == 0) {
        return 1;
    } else {
        return num * factorialize(num-1); 
    }

  }
  
  // Recursive with ternery operator
  
function factorializeTern(num) {
    return num == 0 ? 1 : num * factorialize(num-1);
  }
  

  console.log(factorialize(4));
  console.log(factorializeTern(4));