// The spread operator can be used to copy an array using the syntax newArr = [...oldArr];

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {

      newArr.push([...arr]);
 
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));