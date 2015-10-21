function titleCase(str) {
  str = str.toLowerCase();
  arr = str.split(' ');
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}
titleCase("brooke is cool");