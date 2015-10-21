function sumPrimes(num) {
  var primeArr = [];
  var value = 2;
  
  while (value <= num) {
    var isPrime = true;
    for (var i = 0; i < num; i++) {
      if (value % primeArr[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      primeArr.push(value);
    }
    value++;
  }
    
  var sum = primeArr.reduce(function(acc,cur){
    return acc + cur;
  });
  
  return sum;
}

sumPrimes(10);
