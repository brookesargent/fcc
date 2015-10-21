function isItTrue(arr) {
  return Boolean(arr);
}

function bouncer(arr) {
  var filter = arr.filter(isItTrue);
   return filter;
  }


bouncer([7, 'ate', '', false, 9]);