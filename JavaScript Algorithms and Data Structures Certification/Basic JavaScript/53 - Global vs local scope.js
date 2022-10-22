// If global and local variables have the same name, local variables takes precedence

const outerWear = "T-Shirt";

function myOutfit() {

  const outerWear = "sweater";
  console.log(outerWear);

  return outerWear;
}

myOutfit();