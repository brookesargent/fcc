function find(arr, func) {
    if(arr.some(func)) {
    for (var num = 0; num <= arr.length; num++) {
        if (func(arr[num])) {
            return arr[num];
        }
    }
  }
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
