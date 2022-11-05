// A more complicated example


function urlSlug(title) {
    return title.toLowerCase().split(/\s+/).filter(s => s !== "").join("-");
  
  }

  console.log(urlSlug(" Winter Is  Coming"));