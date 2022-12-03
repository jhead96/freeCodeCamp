function spinalCase(str) {
    //let regex = /[\W||_]/g;
    let lowerCaseRegex = /[A-Z]/g;
    let dashRegex = /[\W||_]-?/g;

    // Replace capitals with - + lowercase
    let lowerStr = str.replace(lowerCaseRegex, function(match) {return "-"+match.toLowerCase();});
    // Replace non whitespaces with -
    let dashedStr = lowerStr.replace(dashRegex, "-");

    if (dashedStr[0] == "-"){
        return dashedStr.slice(1, dashedStr.length);
    } else {
        return dashedStr;
    }
 

  }
  
spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")

console.log(spinalCase('This Is Spinal Tap'));