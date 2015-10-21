function boo(bool) {
  var x = (bool).valueOf();
  if (x === true || x === false) {
    return true;
  }  
  else {
    return false; 
  }
}

boo(true);