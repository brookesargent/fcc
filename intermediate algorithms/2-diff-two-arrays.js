function diff(arr1, arr2) {
  var newArr = [];
  arr1.forEach(function(number) {
      if (arr2.indexOf(number) === -1) {
          newArr.push(number);
      }
  });
  arr2.forEach(function(number) {
      if (arr1.indexOf(number) === -1) {
          newArr.push(number);
      }
  });
  return newArr;

}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

