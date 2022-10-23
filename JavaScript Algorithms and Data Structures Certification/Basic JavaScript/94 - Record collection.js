// An example of a more complicated object

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(records, id, prop, value) {
  
    let currRecord = records[id];
  
    // Delete if value == ""
    if (value == ""){
      console.log("Deleting")
      delete currRecord[prop];
      return records
    }
  
    // Check if prop == "tracks"
    if (prop == "tracks") {
      if (currRecord.hasOwnProperty(prop)){
        currRecord[prop].push(value);
      } else {
        currRecord[prop] = [value];
      }
      return records;
  
    }
  
    // if prop != "tracks" assign prop = val
    currRecord[prop] = value;
    
    return records;
  }
  

  
  