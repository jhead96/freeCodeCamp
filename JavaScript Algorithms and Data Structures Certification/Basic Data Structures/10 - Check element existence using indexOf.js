// .indexOf(element) will return the index of the first matching elememt
// If the element doesn't exist it will return -1

function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1 ? true : false; 
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));