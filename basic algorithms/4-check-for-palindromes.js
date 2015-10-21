function palindrome(str) {
  var strToArr = str.split('')
  var noSpaceStr = str.toLowerCase().replace(/[\s]|[^\w]/g, "");
  var reversedStr = strToArr.reverse().join('').toLowerCase().replace(/[\s]|[^\w]/g, "");
  if (noSpaceStr == reversedStr) {
    return true;
  }
  else {
      return false;
  }
}

palindrome("A man, a plan, a canal. Panama");