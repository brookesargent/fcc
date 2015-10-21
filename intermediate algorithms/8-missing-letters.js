function fearNotLetter(str) {
  codeValue = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== (codeValue + i)) {
      var num = codeValue + i;
      return String.fromCharCode(num);
    }
  }
  return undefined;
}


fearNotLetter('abce');