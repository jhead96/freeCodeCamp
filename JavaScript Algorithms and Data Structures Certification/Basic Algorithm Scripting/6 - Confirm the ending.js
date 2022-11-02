function confirmEnding(str, target) {
    let targetLen = target.length;
    let strLen = str.length;

    if (str.slice(strLen-targetLen) == target) {
        return true;
    }

    return false;

  }
  
console.log(confirmEnding("Bastian", "an"));


 