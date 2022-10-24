// The export keyword allows functions to be used in other .js files

// Method 1
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }

  // Method 2
  export {uppercaseString, lowercaseString}; 