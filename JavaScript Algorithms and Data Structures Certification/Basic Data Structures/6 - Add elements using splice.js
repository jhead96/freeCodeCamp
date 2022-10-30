// .splice() can be used to add elements to an array
// The elements to be added are added as a third argument to .splice()

function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond")

    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));