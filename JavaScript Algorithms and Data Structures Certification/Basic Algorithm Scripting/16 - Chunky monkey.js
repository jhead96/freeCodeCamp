function chunkArrayInGroups(arr, size) {
    
    let chunkArray = [];

    while (arr.length > 0) {
        chunkArray.push(arr.splice(0, size))
        console.log(chunkArray);
    }

    return chunkArray;
    
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 3);