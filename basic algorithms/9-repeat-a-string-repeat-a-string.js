function repeat(str, num) {
  var repeated = [];
  for (var i = 1; i <= num; i++) {
  if (num < 0) {
      return -1;
  }
  else {
      repeated.push(str);
    }
  }
  return repeated.join('');
}