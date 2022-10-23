// Ternery operators also support multiple conditions using the following syntax

function checkSign(num) {
    return (num > 0) ? "positive"
      : (num < 0) ? "negative"
      : "zero"
  }
  
  checkSign(10);