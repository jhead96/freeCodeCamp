function whatIsInAName(collection, source) {
    const arr = [];
    
        // Iterate through objects array
        for (let i = 0; i < collection.length; i++){
            let matched_values = 0;
            
            // Iterate through source properties
            for (let property in source) {
    
                if (collection[i].hasOwnProperty(property)){

                    if (collection[i][property] == source[property]) {
                        matched_values += 1;
                    }
                }               
            }

            if (matched_values == Object.keys(source).length) {
                arr.push(collection[i]);
            }

             matched_values = 0;
        }

        console.log(arr[0]);
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })