function booWho(bool) {

    if (typeof bool == "boolean") {
      return true;
    }
  
    return bool == false;
  }
  
  booWho(null);