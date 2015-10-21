function reverseString(str) {
  var splitStr = str.split('');
  var reversed =splitStr.reverse();
  return reversed.join('');
  
}

reverseString('hello');