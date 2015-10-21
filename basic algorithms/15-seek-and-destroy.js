function destroyer(arr) {
  var filtered = [ ];
  
  for (var i = 1; i < arguments.length; i++) {
    filtered.push(arguments[i]);
  }
  
  console.log(filtered);
  
  // Remove all the values
  return arr.filter(function(value) {
    return filtered.indexOf(value) < 0;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);