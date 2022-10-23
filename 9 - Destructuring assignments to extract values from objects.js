// Destructuring assignment is used to neatly assign values from an object

// ES5 method
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;

// ES6 method #1
const user2 = { name2: 'John Doe', age2: 34 };
const { name2, age2 } = user2;

// ES6 method #2
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = HIGH_TEMPERATURES;