function repeatStringNumTimes(str, num) {
    let repeatStr = "";

    if (num <= 0) {
        return "";
    }

    for (let i = 0; i < num; i++) {
        repeatStr += str;
    }

    return repeatStr;

  }
  
 console.log(repeatStringNumTimes("abc", 3));