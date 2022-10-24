// Objects can be created using shorthand

// Old way
const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });

  // New way
  const MousePosition = (x, y) => ({ x, y });

  // Old way 
  const createPerson = (name, age, gender) => {
    return {
      name: name,
      age: age,
      gender: gender
    };
  };

  // New way
  const createPerson2 = (name, age, gender) => ({name, age, gender});


