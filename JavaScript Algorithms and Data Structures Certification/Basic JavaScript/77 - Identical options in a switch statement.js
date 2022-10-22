// Multiple inputs can be assigned to the same case branch in the following way

function sequentialSizes(val) {
    let answer = "";
    
    switch (val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
  
    }
 
    return answer;
  }
  
  sequentialSizes(1);