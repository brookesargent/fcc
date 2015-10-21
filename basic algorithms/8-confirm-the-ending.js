function end(str, target) {
  var length = target.length;
  var start = str.length - target.length;
  if (str.substr(start, length) == target) {
    return true;
  }
  else {
      return false
  }
}

end('Bastian', 'n');