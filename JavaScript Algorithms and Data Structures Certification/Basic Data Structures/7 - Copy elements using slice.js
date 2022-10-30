// Elements can be copied to a new array using .slice(start, end)

function forecast(arr) {
    arr = arr.slice(2,4);
    return arr;
  }

  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));