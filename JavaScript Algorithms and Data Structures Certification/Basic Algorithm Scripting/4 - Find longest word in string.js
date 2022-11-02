
// Using global flag in regex
function findLongestWordLength(str) {
    let wordRegex = /\S+/g;
    let longestStr = 0;
  
    let words = str.match(wordRegex);
 

    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i].length > longestStr) {
            longestStr = words[i].length;
        }
    }

    return longestStr;
}

  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));