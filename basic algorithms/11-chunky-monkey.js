function chunk (array, length) { 
   var chunkarr = [], 
      i = 0, 
      n = array.length;
  while (i < n) { 
    chunkarr.push(array.slice(i, i += length)); 
  } 
  return chunkarr; 
} 
chunk(['a', 'b', 'c', 'd'], 2);