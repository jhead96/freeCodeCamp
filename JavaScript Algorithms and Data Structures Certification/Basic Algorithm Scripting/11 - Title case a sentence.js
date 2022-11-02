function titleCase(str) {
    let wordRegex = /\S+/g;
    let matches = str.match(wordRegex);
    let titleCaseStr = "";
    
    for (let i = 0; i < matches.length; i++) {
        titleCaseStr += matches[i][0].toUpperCase() + matches[i].slice(1,).toLowerCase() + " ";
        //console.log(titleCaseStr);
    }
    
    return titleCaseStr.slice(0, titleCaseStr.length-1)
    
  }
  
console.log(titleCase("I'm a little tea pot"));

