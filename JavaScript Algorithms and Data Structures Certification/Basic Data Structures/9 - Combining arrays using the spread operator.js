// Two array can be combined using the spread operator

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
  }
  
  console.log(spreadOut());