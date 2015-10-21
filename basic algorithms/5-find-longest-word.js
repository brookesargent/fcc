function findLongestWord(str) {
  var longest = 0;
  var splitStr = str.split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      if (splitStr[i].length > longest) {
          longest = splitStr[i].length;
      }
  }
  return longest;
}
findLongestWord('The quick brown fox jumped over the lazy dog');