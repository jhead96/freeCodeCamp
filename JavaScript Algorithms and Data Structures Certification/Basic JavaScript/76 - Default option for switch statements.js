// A default option for a case statment is specified using the default keyword
// The default case is executed when no matching case conditions are found

function switchOfStuff(val) {
    let answer = "";

    switch (val){
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
  
    }

    return answer;
  }
  
  switchOfStuff(1);