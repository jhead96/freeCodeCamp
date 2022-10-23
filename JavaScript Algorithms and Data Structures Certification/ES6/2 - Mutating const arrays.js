// Variables defined with const are still mutable
// The const keyword only prevents reassignment of the variable identifier

// Uncommenting the second line will cause and error since the array s points to cannot be changed.
// However individual elements of the array can be still be changed as they are mutable

const s = [5, 6, 7];
//s = [1, 2, 3];
s[2] = 45;
console.log(s);

const f = [5, 7, 2];
function editInPlace() {

  // Using f = [2, 5, 7] would be invalid
  f[0] = 2;
  f[1] = 5;
  f[2] = 7;

}
editInPlace();