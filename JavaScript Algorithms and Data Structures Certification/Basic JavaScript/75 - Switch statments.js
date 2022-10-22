// The switch statement can be used when there are many options to choose from
// Statments are executed from the first matched case statement
// Case statments are tested with ===

function caseInSwitch(val) {
    let answer = "";

    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
  
  
    return answer;
  }
  
  caseInSwitch(1);
