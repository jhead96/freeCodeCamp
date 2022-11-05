// Variables should not be altered in functional programming, new variables and objects should be created for use in a function and returned if necessary
// Any computation inside a function should only depend on the input arguments

// The global variable is unchanged in this example
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {

  // Copy into local array
  let newList = [...list];
  newList.push(bookName);
  return newList;
  
}

function remove(list, bookName) {

  // Copy into local array
  let newList = [...list];
  const book_index = newList.indexOf(bookName);
  if (book_index >= 0) {

    newList.splice(book_index, 1);
    return newList;

    }
}