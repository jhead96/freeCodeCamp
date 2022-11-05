// The slice(start, end) method returns a copy of a certain part of an array
// THe end index is non-inclusive

function sliceArray(anim, beginSlice, endSlice) {

    return anim.slice(beginSlice, endSlice);

  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);