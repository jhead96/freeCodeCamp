function translatePigLatin(str) {
    let vowels = "aeiou"
    let consonantRegex = /[^aeiou]+/i;

    // Starts with consonant
    if (vowels.search(str[0]) == -1) {
        
        // No vowels
        if (str.match(consonantRegex)[0] == str){
            return str + "ay";
        }

        let new_end = str.match(consonantRegex)[0] + "ay";

        return str.replace(consonantRegex, "") + new_end;
    } 

    // Starts with vowel
    return str + "way";

  }
  
console.log(translatePigLatin("california"))
console.log(translatePigLatin("paragraphs"))
console.log(translatePigLatin("glove"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("eight"))
console.log(translatePigLatin("rhythm"))